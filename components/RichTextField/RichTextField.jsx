'use strict';
import React, { Component } from 'react';

class RichTextField extends Component{
  render() {
    return (
      <div className = 'rich-text-field'>
          <div className = 'container'>
            <div className = 'text'
              dangerouslySetInnerHTML={{ __html: this.props.value }}>
            </div>
          </div>
      </div>
    );
  }
}

export default RichTextField;
