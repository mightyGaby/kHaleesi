import $ from 'jquery';
import React from 'react';
import FormInput from '../components/input';
import {Link} from 'react-router';

export default class KhaleesiAvailable extends React.Component {
    constructor() {
        super();

        this.state = ({
            isVisible: false,
            khaleesi: []
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
        $('button').hide();
        //call to twilio with yes response
        //this.props.history.pushState(null, 'khaleesiInfo');
    }

    onclick_isNotAvailable(e) {
        e.preventDefault();

        //call to twilio with no response / with updated emergency procedure
    }

    onclick_submit(e) {
        e.preventDefault();

        this.props.history.pushState(null, 'khaleesiMap');
    }

    render() {
        let visibleClass = this.state.isVisible ? 'show' : 'hide',
            locationString = this.state.khaleesi.address;

        return(
            <div className='row'>
                <form action='' method='' className='khaleesiAvail col-xs-12'>
                    <label>Available?</label>
                    <button onClick={this.onclick_isAvailable.bind(this)}>Yes</button>
                    <button>No</button>
                    <div className={visibleClass}>
                        <label>Naloxone on Hand?</label>
                        <FormInput modifier={visibleClass} label='yes' type='checkbox' name='naloxoneOnHand' value='yes'/>
                        <FormInput modifier={visibleClass} label='location' type='text' name='location' value='asdfasdfsdf' placeholder={locationString} />
                        <input className={visibleClass} type='submit' value='Submit' onClick={this.onclick_submit.bind(this)} />
                    </div>
                </form>
            </div>
        );
    }
}