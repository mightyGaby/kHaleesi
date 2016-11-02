import $ from 'jquery';
import React from 'react';
import GoogleMap from '../components/googleMap';
import {Link} from 'react-router';
var myLatlng, map, bounds;

export default class UserMap extends React.Component {
    
    constructor() {
        super();

        this.state = {
            khaleesi : [],
        };

    }

    componentDidMount() {
        $.ajax({        
            type: 'GET',
            url: '/web/data.json',
            success: function(response) {
                this.setState({
                    khaleesi: response.khaleesis[0],
                    user: response.users[0]
                });

                let khaleesiCoords = this.state.khaleesi.location;
                bounds = new google.maps.LatLngBounds();
                myLatlng = new google.maps.LatLng(khaleesiCoords.lat, khaleesiCoords.lng);
                this.renderGoogleMap();
                this.renderUserMarker();
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
        this.addMarker(myLatlng,'Khaleesi',{color:'blue'});
    }

    addMarker(location,name, markerObj) {
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
        let userLocation = this.state.user.location,
            userCoords = new google.maps.LatLng(userLocation.lat, userLocation.lng);
        this.addMarker(userCoords, 'User', {color:'red'});
    }
    

    render() {
        return(
            <div className='row'>
                <GoogleMap />
            </div>
        );
    }
}