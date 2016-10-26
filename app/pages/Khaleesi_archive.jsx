import $ from 'jquery';
import React from 'react';
import {Link} from 'react-router';

export default class Khaleesi extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            boxes : [],
            user: [],
            khaleesi: [],
            initialPosition: 'undefined'
        };
    }

    componentDidMount() {
        $.ajax({        
            type: 'GET',
            url: '/web/data.json',
            success: function(response) {
                this.setState({
                    boxes: response.boxes,
                    khaleesi: response.khaleesis[this.getActiveAccountIndex(response)],
                    user: this.getUserInNeed(response),
                    initialPosition: this.getLocation()
                });
                console.log(this.createGoogleMapsLink(this.state.boxes[1].location));
            }.bind(this),
            error: function(e) {
                console.log(e);
            }.bind(this)
        });
    }

    getLocation(){
        navigator.geolocation.getCurrentPosition(this.geolocationSuccess, this.geolocationError, {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000});
    }

    geolocationSuccess(pos) {
        console.log(pos.coords)
        // let position = {
        //     initialPosition: pos.coords
        // }
        // this.setState({
        //     initialPosition: pos.coords
        // });
        return ({initialPosition: pos.coords});

    }

    geolocationError(err) {
        console.warn('ERROR(' + err.code + '): ' + err.message);
    }

    getActiveAccountIndex(response){
        for( var i in response.khaleesis){
            if(response.khaleesis[i].loggedIn){
                return i;
            }
        }
    }

    getUserInNeed(response){
        let khaleesi = response.khaleesis[this.getActiveAccountIndex(response)];
        let userID = khaleesi.triggeredUser;

        for ( var i in khaleesi.users){
            if(khaleesi.users[i].uuid==474743){
                return khaleesi.users[i];
            }
        }

    }


    renderAvailableBoxes(){
        let availableBoxes = this.state.boxes.map((box, i) => {
            if(!box.empty){
                return (
                    <li key={i} className='col-xs-12'>
                        <div className='row'>
                            <div className='col-xs-6'>
                                <h2>{box.PIN.code}</h2>
                            </div>
                            <div className='col-xs-6'>
                                Box# {box.boxId} {box.landmark} {this.state.initialPosition}

                            </div>
                        </div>
                    </li>
                );
            }
        });
        return(
            <ul className='row'>
                {availableBoxes}
            </ul>
        );
    }

    getBoxLocation(){
        // get the location of the closest box using the google proximity API
        let boxLocation = this.state.boxes[1].location;
        return (  
            <p> {boxLocation}</p> 
        );
    }
    
    createGoogleMapsLink(location) {
        let map_zoom=19,
            map_type = "m",
            output_type= "nl",
            search_type = "loc",
            lat = location.lat,
            lng = location.lng;

        let googleMapLink = "https://maps.google.com/maps?&q=loc:" + lat + "," + lng + "&z=" + map_zoom + "&mrt=" + search_type + "&t=" + map_type + "&output=" + output_type;

        return ( {googleMapLink} );
    }

    render() {
        return(
            <ul className='row'>
                <h1> Boxes </h1>
                { this.renderAvailableBoxes() }
            </ul>
        );
    }
}