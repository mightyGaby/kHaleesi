import $ from 'jquery';
import React from 'react';
import {Link} from 'react-router';

export default class Khaleesi extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            box : [],
            user: [],
            khaleesi: []
        };
    }

    componentDidMount() {
        $.ajax({        
            type: 'GET',
            url: '/web/data.json',
            success: function(response) {
                this.setState({
                    box: response.boxes,
                    khaleesi: response.khaleesis[this.getActiveAccountIndex(response)],
                    user: this.getUserInNeed(response)
                });
                console.log(this.state.user)
            }.bind(this),
            error: function(e) {
                console.log(e);
            }.bind(this)
        });

    }

    getActiveAccountIndex(response){
        for( var i in response.khaleesis){
            if(response.khaleesis[i].loggedIn){
                return i;
            }
        }
    }

    getUserInNeed(response){
        let khaleesi = response.khaleesis[this.getActiveAccountIndex(response)];
        let userID = khaleesi.triggeredUser;
        for ( var i in khaleesi.users){
            if(khaleesi.users[i].uuid==474743){
                return khaleesi.users[i];
            }
        }

    }

    renderAvailableBoxes(){

        let boxes = this.state.box.map((box, i) => {
            if(!box.empty){
                return (
                    <li key={i} className='col-xs-12'>
                        <div className='row'>
                            <div className='col-xs-6'>
                                Box# {box.boxId} {box.landmark}
                            </div>
                            <div className='col-xs-6'>
                                {box.PIN.code}
                            </div>
                        </div>
                    </li>
                );
            }
        });
        return(
            <ul className='row'>
                {boxes}
            </ul>
        );
    }


    render() {        
        return(
            <ul className='row'>
                <h1> Boxes </h1>
                { this.renderAvailableBoxes() }
            </ul>
        );
    }
}