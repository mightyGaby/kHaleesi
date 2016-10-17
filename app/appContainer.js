import React from 'react';

export default class AppContainer extends React.Component {
    constructor() {
        super();
        
        //this.state = { filters: [] }
    }

    componentDidMount() {
        // $.ajax({
        //     url: 'https://cdn.contentful.com/spaces/48ovsamdb5b7/content_types/cocktail?access_token=97a3e5fd0c474170c569bfc33003efe2aa65bc55a5b7ffc4eb48b7c26bff75c2',
        //     dataType: 'json',
        //     success: function(filterList) {
        //         this.setState({
        //             filters: filterList.fields[1].items.validations[0].in
        //         });
        //     }.bind(this)
        // });
    }

    render() {
        return <AppContent />;
    }
}