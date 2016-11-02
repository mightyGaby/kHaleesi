import $ from 'jquery';
import React from 'react';
import GoogleMap from '../components/googleMap';
import {Link} from 'react-router';
var myLatlng, userCoords, closestBoxCoords, map, bounds, directionsService, directionsDisplay;

export default class BoxMap extends React.Component {
    
    constructor() {
        super();

        this.state = {
            khaleesi : [],
            boxes: []
        };

    }

    componentDidMount() {
        $.ajax({        
            type: 'GET',
            url: '/web/data.json',
            success: function(response) {
                this.setState({
                    boxes: response.boxes,
                    khaleesi: response.khaleesis[0],
                    user: response.users[0]
                });

                let khaleesiCoords = this.state.khaleesi.location;
                bounds = new google.maps.LatLngBounds();
                myLatlng = new google.maps.LatLng(khaleesiCoords.lat, khaleesiCoords.lng);
                this.renderGoogleMap();
                this.renderAvailableBoxes();
                this.findClosestBox();
                this.calculateAndDisplayRoute(directionsService, directionsDisplay, myLatlng, this.state.user.location);

            }.bind(this),
            error: function(e) {
                console.log(e);
            }.bind(this)
        });
    }

    renderGoogleMap() {

        //Map option
        let mapOptions = {
          center: myLatlng,
          zoom: 15
        };
        //Render google maps in #map container
        map = new google.maps.Map(document.getElementById('g-map'), mapOptions);
        // Instantiate a directions service.
        directionsService = new google.maps.DirectionsService,
        directionsDisplay = new google.maps.DirectionsRenderer({
          map: map
        });
    }

// ======= DISTANCE CALCULATIONS =======

    // use google geometry library to find the closest box
    findClosestBox() {
        var boxArray = [],
            nearestDistance;
        this.state.boxes.map((box, i) => {
            if(!box.empty){
                let boxCoords = new google.maps.LatLng(box.location.lat, box.location.lng,);
                boxArray.push({
                    "boxId": box.boxId,
                    "distanceFromKhaleesi": google.maps.geometry.spherical.computeDistanceBetween(myLatlng, boxCoords)/1609.34,
                    "coords": boxCoords
                });
            }
        });

        nearestDistance = Math.min.apply(this,$.map(boxArray, function(o){ return o.distanceFromKhaleesi; }));

        let closestBox = boxArray.filter(function(e){
                return (e.distanceFromKhaleesi==nearestDistance) ? true:false;
            })[0];
        closestBoxCoords = closestBox.coords;

        return ( 
            closestBox
        )
        
    }

    calculateAndDisplayRoute(directionsService, directionsDisplay, pointA, pointB) {
        console.log(this.state.khaleesi.location)
      directionsService.route({
        origin: pointA,
        destination: pointB,
        travelMode: google.maps.TravelMode.DRIVING
      }, function(response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
          directionsDisplay.setDirections(response);
        } else {
          window.alert('Directions request failed due to ' + status);
        }
      });
    }

    onclick_displayDirectionsToBox(e) {
        e.preventDefault();

        this.calculateAndDisplayRoute(directionsService, directionsDisplay, this.state.khaleesi.location, closestBoxCoords);

    }

//  ======= MARKERS =======

    // generic render marker function, with the option to customize the marker and label
    addMarker(location,name, markerObj, label) {
        var markerImage, labelContent;

        if(markerObj.color) {
           markerImage = 'http://maps.google.com/mapfiles/ms/icons/'+markerObj.color+'-dot.png';
           labelContent = ''
        } else if(markerObj.icon) {
            markerImage = ' ';
            labelContent = markerObj.icon
        }

        //Adding maker to maps
        let marker = new google.maps.Marker({
          position: location,
          map: map,
          title: name,
          icon: markerImage,
          label: labelContent
        });

        bounds.extend(location);
        map.fitBounds(bounds);

    }

    // gets user's location and adds a marker on the map
    renderUserMarker(){
        let userLocation = this.state.user.location;

        userCoords = new google.maps.LatLng(userLocation.lat, userLocation.lng);
        this.addMarker(userCoords, 'User', {color:'red'});
    }

    // finds boxes that currently have naloxone and renders them on the map
    renderAvailableBoxes(){
        let closestBox = this.findClosestBox(),
            availableBoxes = this.state.boxes.map((box, i) => {
                    if(!box.empty){
                        let boxCoords = new google.maps.LatLng(box.location.lat, box.location.lng,),
                            boxName = "box_" + i;
                        if (box.boxId === closestBox.boxId){
                            this.addMarker(boxCoords, boxName, {icon:"📫"})
                        } else {
                            this.addMarker(boxCoords, boxName, {color:"purple"})
                        }
                    }
                });
        return({availableBoxes});
    }

    render() {
        return(
            <div className='row'>
            <h1>Box Locations</h1>
            <GoogleMap />
            <button className="boxRoute" onClick={this.onclick_displayDirectionsToBox.bind(this)}> get directions to closest box </button>
            </div>
        );
    }
}