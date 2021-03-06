'use strict';
import React, { Component } from 'react';

class CompanyPost extends Component {
  componentDidMount() {
    document.title = this.props.title;
  }

  render() {
    return (
      <div className='company-post'>
        <div className='header'>
          <div className='container'>
            <h5>{ this.props.subtitle }</h5>
            <h2>{ this.props.title }</h2>
          </div>
        </div>
        <div
          className='content-container'
          dangerouslySetInnerHTML={{ __html: this.props.body }}
        />
      </div>
    );
  }
}

export default CompanyPost;
