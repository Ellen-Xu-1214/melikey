import React, { Component } from 'react';

class Display extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <div className="container">
                <div className="body">
                    <div className="title">
                    <h1><a href={this.props.data.yUrl}>{this.props.data.Name}</a></h1>
                    </div>
                <div className="summary">
                <p>{this.props.data.wTeaser}</p>
                </div>
                </div>
                </div>
            </div>
        );
    }
}

export default Display;
