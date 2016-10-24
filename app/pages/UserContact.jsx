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

    componentDidMount() {
        $.ajax({        
            type: 'get',
            url: 'data.json',
            dataType: 'json',           
            success: function(data) {
                console.log(data.data);
                this.setState({
                    khaleesi: data
                });
            }.bind(this)
        });
    }

    render() {
        return(
            <div>
                {this.state.khaleesi}
            </div>  
        );
    }
}