import React, { Component } from 'react';
import '../index.css';



class Heading extends Component {
    render() {
        return(
            <div id='id-heading-container' className='heading-container'>
                <h1 id='id-heading-h1' className='heading-h1' style={ this.props.titleStyle }>{this.props.title}</h1>
            </div>
        )
    }
}

export default Heading;