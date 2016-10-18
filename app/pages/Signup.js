import $ from 'jquery';
import React from 'react';
import FormInput from '../components/input';
import {Link} from 'react-router';

export default class Signup extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div>
                <form action='' method=''>
                    <FormInput label='Email Address' type='email' name='emailAddress' value='' />
                    <FormInput label='Password' type='password' name='password' value='' />
                    <FormInput label='Confirm Password' type='password' name='confirmPassword' value='' />
                    <input type='submit' value='submit' />
                </form>
                <Link to='/' className='link'>Login</Link>
            </div>
        );
    }
}