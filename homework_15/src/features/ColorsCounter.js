import React, { Component } from 'react';

export default class ColorsCounter extends Component {
    render () {
        return (
        <div className="colorsCount">Colors: {this.props.count}</div>
        )
    }
}
