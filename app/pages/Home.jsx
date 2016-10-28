import $ from 'jquery';
import React from 'react';
import {Link} from 'react-router';

export default class Home extends React.Component {
    constructor() {
        super();

        //navigate after submit
        //this.props.history.replaceState(null, 'newPage');
    }

    render() {
        return(
            <div className='row'>
                <h1>Splash Page if needed</h1>
            </div>
        );
    }
}