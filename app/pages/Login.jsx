import $ from 'jquery';
import React from 'react';
import FormInput from '../components/input';
import {Link} from 'react-router';

export default class Login extends React.Component {
    constructor() {
        super();

        //navigate after submit
        //this.props.history.replaceState(null, 'newPage');
    }

    render() {
        return(
            <div className='row'>
                <form action='' method='' className='col-xs-12'>
                    <FormInput label='Email Address' type='email' name='emailAddress' value='' />
                    <FormInput label='Password' type='password' name='password' value='' />
                    <input type='submit' value='login' />
                </form>
                <Link to='signup' className='link col-xs-12'>Sign Up</Link>
            </div>
        );
    }
}