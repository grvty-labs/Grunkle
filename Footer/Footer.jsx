import React, { Component } from 'react';

class Footer extends Component{
  render() {

    const{
      telephone,
      address,
      twitter,
      fb,
    } = this.props;

    return (
      <div className = 'footer'>
        <div className = 'left-column'>
          <span>{ telephone }</span>
          <span>{ address }</span>
        </div>
        <div className = 'right-column'>
          <a href = { fb }>
            <img className = 'social' src = '/static/assets/facebook.svg'/>
          </a>
          <a href = { twitter }>
            <img className = 'social' src = '/static/assets/twitter.svg'/>
          </a>
        </div>
      </div>
    )
  }
}

export default Footer;
