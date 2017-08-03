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
    let columnNumber = this.props.value.features.length;
    let width;
    if (columnNumber >= 4 && window.innerWidth > 1024) {
      width = {
        width: '1024px',
      };
    } else if (columnNumber == 3 && window.innerWidth > 1024) {
      width = {
        width: '800px',
      };
    }

    return (
      <div className = 'feature'>
        <div className = 'feature-container'>
          <div className = 'container' style = { width }>
            { columns }
          </div>
        </div>
      </div>
    );
  }
}

export default Feature;
