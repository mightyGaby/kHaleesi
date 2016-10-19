import $ from 'jquery';
import React from 'react';
import {Link} from 'react-router';

export default class UserContact extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            khaleesi : []
        };
    }

    // componentDidMount() {
    //     $.ajax({        
    //         url: 'data.json',
    //         dataType: 'json',           
    //         success: function(data) {
    //           this.setState({datajson: data});
    //         }.bind(this)
    //   });
    // }

    render() {
        return(
            <div>
                <p>test</p>
            </div>  
        );
    }
}