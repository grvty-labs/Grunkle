'use strict';
import React, { Component } from 'react';

class CompaniesRoll extends Component {
  componentDidMount() {
    document.title = this.props.title;
  }

  render() {
    let miniPost = this.props.posts.map((element, index) => (
      <div className = 'mini-post' key = { index } onClick = {() => this.props.toPage(element.id, element.slug)}>
        <h5>{ element.subtitle }</h5>
        <h2>{ element.title }</h2>
      </div>
    ));

    return (
      <div className = 'companies-roll'>
        <div className = 'header'>
          <div className = 'container'>
            <h5>{ this.props.subtitle }</h5>
            <h2>{ this.props.title }</h2>
            <div className = 'description'
              dangerouslySetInnerHTML = {{ __html: this.props.description }}>
            </div>
          </div>
        </div>
        <div className = 'roll'>
          { miniPost }
        </div>
      </div>
    );
  }
}

export default CompaniesRoll;
