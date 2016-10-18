import $ from 'jquery';
import React from 'react';

export default class Layout extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div className='container'>
                <h1>Khaleesi</h1>
                {this.props.children}
            </div>
        );
    }
}