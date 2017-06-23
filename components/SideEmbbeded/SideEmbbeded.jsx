'use strict';
import React, { Component } from 'react';

class SideEmbended extends Component {
  render(){
    let sideEmbended;
    if(this.props.value.side == 'left'){
      sideEmbended = '-left';
    }else if(this.props.value.side == 'right'){
      sideEmbended = '-right';
    }
    return(
      <div className = {'sideEmbended' + sideEmbended}>
        <div className = 'column'>
          EMBENDED
        </div>
        <div className = 'column'>
          <h2>{ this.props.value.title }</h2>
          <span>{ this.props.value.paragraph }</span>
        </div>
      </div>
    )
  }
}

export default SideEmbended;
