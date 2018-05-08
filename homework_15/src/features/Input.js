import React, { Component } from 'react';

export default class Input extends Component {
    render () {
        return (
            <input autoFocus placeholder="Color's name, tags." type="text" onChange={this.props.handleSearch} />
        )
    }
}