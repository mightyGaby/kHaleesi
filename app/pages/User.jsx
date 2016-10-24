import $ from 'jquery';
import React from 'react';
import {Link} from 'react-router';

export default class User extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            khaleesi : []
        };
    }

    componentDidMount() {
        $.ajax({        
            type: 'GET',
            url: '/web/data.json',
            success: function(response) {
                this.setState({
                    khaleesi: response.khaleesis
                });
            }.bind(this),
            error: function(e) {
                console.log(e);
            }.bind(this)
        });
    }

    onclick_trigger(e) {
        e.preventDefault();

        $.ajax({        
            type: 'POST',
            url: '/web/data.json',
            success: function(response) {
                this.setState({
                    khaleesi: response.khaleesis
                });
            }.bind(this),
            error: function(e) {
                console.log(e);
            }.bind(this)
        });
    }

    render() {
        let khaleesis = this.state.khaleesi.map((khaleesi, i) => {
            return (
                <li key={i} className='col-xs-12'>
                    <div className='row'>
                        <div className='col-xs-6'>
                            {khaleesi.firstName} {khaleesi.lastName}
                        </div>
                        <div className='col-xs-6'>
                            {khaleesi.phone}
                        </div>
                    </div>
                </li>
            );
        });
        return(
            <ul className='row'>
                <h2>Emergency Contact Examples</h2>
                {khaleesis}
                <a className='primary-button' href='#' onClick={this.onclick_trigger.bind(this)}>
                    <span>Trigger</span>
                </a>
            </ul>
        );
    }
}