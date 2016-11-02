import $ from 'jquery';
import React from 'react';
import FormInput from '../components/input';
import {Link} from 'react-router';

export default class Khaleesi extends React.Component {
    constructor(props) {
        super(props);

        this.state = ({
            isVisible: false,
            khaleesi: [],
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
                });
            }.bind(this),
            error: function(e) {
                console.log(e);
            }.bind(this)
        });

    }



    onclick_isAvailable(e) {
        e.preventDefault();

        this.setState({
            isVisible: true
        });
        $('.callKhaleesi').hide();
        //call to twilio with yes response
        //this.props.history.pushState(null, 'khaleesiInfo');
    }

    onclick_submit(e) {
        e.preventDefault();
        let naloxoneOnHand = $('[name="naloxoneOnHand"]').prop("checked");

        if(!naloxoneOnHand){
            this.props.history.pushState(naloxoneOnHand, 'boxes');
        } else {
            this.props.history.pushState(naloxoneOnHand, 'route_to_user');
        }
    }

    render() {
        let visibleClass = this.state.isVisible ? 'show' : 'hide',
            locationString = this.state.khaleesi.address;

        return(
            <div className='row'>
                <form action='' method='' className='khaleesiAvail col-xs-12'>
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