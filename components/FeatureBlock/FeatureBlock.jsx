'use strict';
import React, { Component } from 'react';

class Feature extends Component{
  render() {
    let columns = this.props.value.features.map((element, index) => (
        <div className = 'column' key = { index }>
          <img src = { element.svg }/>
          <h3>{ element.title }</h3>
          <p>{ element.paragraph }</p>
        </div>
    ));

    return (
      <div className = 'feature'>
        <div className = 'feature-container'>
          <div className = 'container'>
            { columns }
          </div>
        </div>
      </div>
    );
  }
}

export default Feature;
