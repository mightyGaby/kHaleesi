import $ from 'jquery';
import React from 'react';

export default class FormInput extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        });
    }

    render() {
        return (
            <div>
                <label htmlFor={this.props.name}>{this.props.label}</label>
                <input
                    type={this.props.type}
                    value={this.state.value}
                    id={this.props.name}
                    name={this.props.name}
                    placeholder={this.props.label}
                    onChange={this.handleChange}
                    required='required'
                />
            </div>
        );
    }
}