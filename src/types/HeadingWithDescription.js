import React, { Component } from 'react';
import '../index.css';



class HeadingWithContent extends Component {
    render() {
        return(
            <div id='id-heading-container' className='heading-container'>
                <h1 id='id-heading-h1' className='heading-h1' style={ this.props.titleStyle }>{this.props.title}</h1>
                <div id='id-heading-description' className='heading-description' style={ this.props.descriptionStyle }>
                    { this.props.description }
                </div>
            </div>
        )
    }
}

export default HeadingWithContent;