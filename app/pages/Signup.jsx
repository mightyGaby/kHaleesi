import $ from 'jquery';
import React from 'react';
import FormInput from '../components/input';
import {Link} from 'react-router';

export default class Signup extends React.Component {
    constructor() {
        super();
    }

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

        console.log(data);

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
                <form action='http://localhost:8080' method='' className='twilio col-xs-12'>
                    <FormInput label='First Name' type='text' name='firstName' value='' />
                    <FormInput label='Phone Number' type='number' name='phoneNumber' value='' />
                    <input type='submit' value='sign up' onClick={this.onclick_submit.bind(this)} />
                </form>
                <Link to='/' className='link'>Login</Link>
            </div>
        );
    }
}