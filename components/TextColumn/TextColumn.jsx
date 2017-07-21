'use strict';
import React, { Component } from 'react';

class TextColumn extends Component {
  render() {
    let background = {
      backgroundColor: 'rgba(' + this.props.value.decoration.background_color + ')',
    };
    let columnNumber = this.props.value.columns.length;
    let width;
    let column = this.props.value.columns.map((element, index) => (
      <div key = { index } className = 'column'>
        <img className = { 'icon' + (element.image == null ? ' null' : '')}
          src = { element.image == null ? null : element.image.thumbs.xs }/>
        <h3>{ element.title }</h3>
        <p>{ element.paragraph }</p>
      </div>
    ));
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
      <div className = 'text-column' style = { background }>
        <div className = 'container' style = { width }>
          { column }
        </div>
      </div>

    );
  }
}

export default TextColumn;
