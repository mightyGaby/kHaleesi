import $ from 'jquery';
import React from 'react';
import {Link} from 'react-router';

export default class Khaleesi extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            box : []
        };
    }

    componentDidMount() {
        $.ajax({        
            type: 'GET',
            url: '/web/data.json',
            success: function(response) {
                this.setState({
                    box: response.boxes
                });
            }.bind(this),
            error: function(e) {
                console.log(e);
            }.bind(this)
        });
    }

    onclick_trigger(e) {
        e.preventDefault();

        console.log('here');
    }

    render() {
        let boxes = this.state.box.map((box, i) => {
            return (
                <li key={i} className='col-xs-12'>
                    <div className='row'>
                        <div className='col-xs-6'>
                            {box.boxId} {box.landmark}
                        </div>
                        <div className='col-xs-6'>
                            {box.PIN.code}
                        </div>
                    </div>
                </li>
            );
        });
        return(

            <ul className='row'>
                {boxes}
                <a className='primary-button' href='#' onClick={this.onclick_trigger.bind(this)}>
                    <span>Trigger</span>
                </a>
            </ul>
        );
    }
}