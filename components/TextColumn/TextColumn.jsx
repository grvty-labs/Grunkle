'use strict';
import React, { Component } from 'react';

class TextColumn extends Component {
  render() {
    let background = {
      backgroundColor: 'rgba(' + this.props.value.decoration.background_color + ')',
    };
    let columnNumber = 0;
    let width;
    let column = this.props.value.columns.map((element, index) => (
      <div key = { index } className = 'column'>
        <img className = { 'icon' + (element.image == null ? ' null' : '')}
          src = { element.image == null ? null : element.image.thumbs.xs }/>
        <h5>{ element.title }</h5>
        <p>{ element.paragraph }</p>
        <p style = {{ display: 'none' }}>{ columnNumber = index }</p>
      </div>
    ));
    console.log(columnNumber + 1);
    if (columnNumber + 1 >= 4) {
      width = {
        width: '1024px',
      };
    } else if (columnNumber + 1 == 3) {
      width = {
        width: '600px',
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
