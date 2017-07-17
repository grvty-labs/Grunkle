'use strict';
import React, { Component } from 'react';

class TextColumn extends Component {
  render() {
    let background = {
      backgroundColor: 'rgba(' + this.props.value.decoration.background_color + ')',
    };
    let column = this.props.value.columns.map((element, index) => (
      <div key = { index } className = 'column'>
        <img className = { 'icon' + (element.image == null ? ' null' : '')}
          src = { element.image == null ? null : element.image.thumbs.xs }/>
        <h5>{ element.title }</h5>
        <p>{ element.paragraph }</p>
      </div>
    ));

    return (
      <div className = 'text-column' style = { background }>
        { column }
      </div>

    );
  }
}

export default TextColumn;
