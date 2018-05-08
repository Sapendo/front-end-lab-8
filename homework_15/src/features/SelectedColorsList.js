import React, { Component } from 'react';

export default class SelectedColorsList extends Component {
    render () {
        return (
        <div class="selectedColorsBox">
            {this.props.colors.length ? 
                this.props.colors.map(( color ) => (
                    <div key={color.id} className="selected" style={{background: color.color}}>
                        <a href="#" class="btnDel" onClick={() => this.props.delColor(color)}>
                            <i className="material-icons">clear</i>
                        </a>
                    </div>
                ))
                :
                <React.Fragment>
                    <div className="empty lightest-blue"></div>
                    <div className="empty light-blue"></div>
                    <div className="empty blue"></div>
                </React.Fragment>
            }
        </div>
        )
    }
}