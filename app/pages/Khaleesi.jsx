import $ from 'jquery';
import React from 'react';
import FormInput from '../components/input';
import GoogleMap from '../components/googleMap';
import {Link} from 'react-router';

export default class Khaleesi extends React.Component {
    constructor(props) {
        super(props);

        this.state = ({
            isVisible: false,
            khaleesi: [],
            user: [],
            boxes: [],
            naloxoneOnHand: null
        });
    }

    componentDidMount() {
        $.ajax({        
            type: 'GET',
            url: '/web/data.json',
            success: function(response) {
                this.setState({
                    khaleesi: response.khaleesis[0],
                    user: response.users[0],
                    boxes: response.boxes
                });
            }.bind(this),
            error: function(e) {
                console.log(e);
            }.bind(this)
        });

    }

    createGoogleMapsLink(location) {
        let map_zoom=19,
            map_type = "m",
            output_type= "nl",
            search_type = "loc",
            lat = location.lat,
            lng = location.lng;

        let googleMapLink = "https://maps.google.com/maps?&q=loc:" + lat + "," + lng + "&z=" + map_zoom + "&mrt=" + search_type + "&t=" + map_type + "&output=" + output_type;

        return ( googleMapLink );
    }

    onclick_isAvailable(e) {
        e.preventDefault();

        this.setState({
            isVisible: true
        });
        $('.callKhaleesi').hide();
        //call to twilio with yes response
    }

    onclick_submit(e) {
        e.preventDefault();
        let naloxoneOnHand = $('[name="naloxoneOnHand"]').prop("checked");

        if(!naloxoneOnHand){

            //go to the map with the boxes, because khaleesi does not have naloxone
            let mapURL = this.createGoogleMapsLink(this.state.boxes[1].location);

            let form = $('.twilio'),
                action = form.attr('action'),
                data = {
                    "googleMapLink": mapURL,
                    "boxPin": this.state.boxes[1].PIN.code
                };
            this.postToTwilio(action,data)
            this.props.history.pushState(null, 'boxes');

        } else {
            //go to the map with only the user's location because the khaleesi has naloxone
            let mapURL = this.createGoogleMapsLink(this.state.user.location);

            this.props.history.pushState(null, 'route_to_user');
        }
    }

    postToTwilio(action,data) {
        $.ajax({
            type: 'POST',
            url: action,
            data: data,
            success: function (data) {
                console.log('data', data);
            },
            error: function (xhr, status, error) {
                console.log(error);
            }
        });
    }
    render() {
        let visibleClass = this.state.isVisible ? 'show' : 'hide',
            locationString = this.state.khaleesi.address;

        return(
            <div className='row'>
                <form action='http://localhost:8080/twilio' method='' className='twilio khaleesiAvail col-xs-12'>
                    <div className="callKhaleesi">
                        <label>Available?</label>
                        <button onClick={this.onclick_isAvailable.bind(this)}>Yes</button>
                        <button>No</button>
                    </div>
                    <div className={visibleClass}>
                        <label>Naloxone on Hand?</label>
                        <FormInput modifier={visibleClass} label='yes' type='checkbox' name='naloxoneOnHand'/>
                        <FormInput modifier={visibleClass} label='location' type='text' name='location' value={locationString} placeholder={locationString} />
                        <input className={visibleClass} type='submit' value='Submit' onClick={this.onclick_submit.bind(this)}/>
                    </div>
                </form>
            </div>
        );
    }
}