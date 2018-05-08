import React, { Component } from 'react';

export default class ColorsList extends Component {
    render () {
        let template =!this.props.load ? 'Loading.........' : 'There are no colors found';
        return (
        <React.Fragment>            
        {this.props.colors.length ? 
        <div className="colorsBox">
            {this.props.colors.map((color, index) => (
                <div key={color.id} className="colorItem" style={{background : color.color}}>
                    <a href="#" class="btnAdd" onClick={() => this.props.addColor(color)}>
                        <i className="material-icons">add</i> Add
                    </a>
                </div>
            ))}
        </div> : <div className="emptyColorsBox">{ template }</div>}
        </React.Fragment>
        )
    }
}