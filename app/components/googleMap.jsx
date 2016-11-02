import $ from 'jquery';
import React from 'react';

export default class GoogleMap extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {        
        return (
          <div className="col-xs-12" id="g-map"></div>
        );
    }
}