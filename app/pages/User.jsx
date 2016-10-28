import $ from 'jquery';
import React from 'react';
import FormInput from '../components/input';
import {Link} from 'react-router';

export default class Signup extends React.Component {
    constructor() {
        super();

        this.state = {
            user : []
        };
    }

    // componentDidMount() {
    //     $.ajax({        
    //         type: 'GET',
    //         url: 'data.json',
    //         success: function(response) {
    //             this.setState({
    //                 user: response.users
    //             });
    //         }.bind(this),
    //         error: function(e) {
    //             console.log(e);
    //         }.bind(this)
    //     });
    // }

    onclick_submit(e) {
        e.preventDefault();

        let form = $('.twilio'),
            action = form.attr('action'),
            firstName = $("input[name='firstName']").val(),
            phoneNumber = $("input[name='phoneNumber']").val(),
            data = {
                "firstName": firstName,
                "phoneNumber": phoneNumber
            };

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
        return(
            <div className='row'>
                <form action='http://localhost:3000/twilio' method='' className='twilio col-xs-12'>
                    <FormInput label='First Name' type='text' name='firstName' value='' />
                    <FormInput label='Phone Number' type='number' name='phoneNumber' value='' />
                    <input type='submit' value='Send Message' onClick={this.onclick_submit.bind(this)} />
                </form>
                <Link to='/' className='link'>Back to home</Link>
            </div>
        );
    }
}