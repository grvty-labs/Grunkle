'use strict';
import React, { Component } from 'react';

class CaseStudy extends Component{
  render() {
    return (
      <div className = 'case-study'>
        <div className = 'header'>
          <div className = 'content'>
            <h3>{ this.props.subtitle }</h3>
            <h2>{ this.props.title }</h2>
          </div>
        </div>
        <div className = 'case-study-content'>
          <div className = 'first-column'>

          </div>
          <div className = 'second-column'
            dangerouslySetInnerHTML={{ __html: this.props.body }}>

          </div>
          <div className = 'third-column'>

          </div>
        </div>
      </div>
    );
  }
}

export default CaseStudy;
