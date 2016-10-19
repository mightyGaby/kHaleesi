import $ from 'jquery';
import React from 'react';
import {Link} from 'react-router';

export default class UserContact extends React.Component {
    constructor() {
        super();
    }

    render() {
        let filterItems = this.props.filters.map((filters, i) => {
            return <Filter key={i} filters={filters} />;
        });
        
        return <ResultsContainer filter={this.state.filter} />;
    }
}