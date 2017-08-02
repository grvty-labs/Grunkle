'use strict';
import React, { Component } from 'react';

class CaseStudy extends Component{
  render() {
    return (
      <div className = 'case-study'>
        <div className = 'header'>
          <div className = 'container'>
            <h5>{ this.props.subtitle }</h5>
            <h2>{ this.props.title }</h2>
          </div>
          <div className = 'division-rectangle'></div>
        </div>
        <div className = 'case-study-content'>
          <div className = 'container'>
            <div className = 'first-column'>
              <a href = '#'><strong>See all work</strong></a>
            </div>
            <div className = 'second-column'
              dangerouslySetInnerHTML={{ __html: this.props.body }}>
            </div>
            <div className = 'third-column'>
              <h5>Client:</h5>
              <h5>Year:</h5>
              <h5>Solutions:</h5>
            </div>
          </div>
          </div>
      </div>
    );
  }
}

export default CaseStudy;
