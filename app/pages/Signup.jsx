import $ from 'jquery';
import React from 'react';
import FormInput from '../components/input';
import {Link} from 'react-router';

export default class Signup extends React.Component {
    constructor() {
        super();
    }

    onclick_submit() {
        //e.preventDefault();

        let password = $("input[name='password']"),
            confirmPassword = $("input[name='confirmPassword']");

        this.props.history.replace(null, '/');
        //if(password.val() === confirmPassword.val()) {
            //this.submit = this.submit.bind(this);
        // } else {
        //     $('.error').show();
        //     password.addClass('error');
        //     confirmPassword.addClass('error');
        // }
    }

    submit() {
    }

    render() {
        return(
            <div className='row'>
                <form action='' method='' className='col-xs-12'>
                    <FormInput label='Email Address' type='email' name='emailAddress' value='' />
                    <FormInput label='Phone Number' type='number' name='phoneNumber' value='' />
                    <FormInput label='Password' type='password' name='password' value='' />
                    <p className='error'>Passwords must match</p>
                    <FormInput label='Confirm Password' type='password' name='confirmPassword' value='' />
                    <p className='error'>Passwords must match</p>
                    <input type='submit' value='sign up' onClick={this.onclick_submit.bind(this)} />
                </form>
                <Link to='/' className='link'>Login</Link>
            </div>
        );
    }
}