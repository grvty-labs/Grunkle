'use strict';
import React, { Component } from 'react';

class CaseRoll extends Component{
  render() {
    let miniPost = this.props.cases.map((element, index) => (
      <div className = 'mini-post' onClick = {() => this.props.toPage(element.id) }>
        <div className = 'left-column'>

        </div>
        <div className = 'right-column'>
          <h5>{ element.subtitle }</h5>
          <h3>{ element.title }</h3>
          <p></p>
        </div>
      </div>
    ));

    return (
      <div className = ' case-roll'>
        <div className = 'header'>
          <div className = 'content'>
            <h5>{ this.props.subtitle }</h5>
            <h2>{ this.props.title }</h2>
            <div className = 'description'
              dangerouslySetInnerHTML = {{ __html: this.props.description }}>
            </div>
          </div>
          <div className = 'rectangle'></div>
        </div>
        <div className = 'roll'>
          { miniPost }
        </div>
      </div>
    );
  }
}

export default CaseRoll;
