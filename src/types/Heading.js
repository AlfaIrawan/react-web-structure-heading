import React, { Component } from 'react';
import '../index.css';



class Heading extends Component {
    render() {
        return(
            <div id='id-heading-container' className='heading-container' style={Object.assign({ marginBottom: 20 }, this.props.containerStyle)}>
                <h1 id='id-heading-h1' className='heading-h1' style={ this.props.titleStyle }>{this.props.title}</h1>
            </div>
        )
    }
}

export default Heading;