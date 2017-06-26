'use strict';
import React, { Component } from 'react';


class Content extends Component {
  render() {
    let content = this.props.content.map((element, index) => (
      <div className = 'text-blog' key = { index }>
        <p>{ element }</p>
      </div>
    ));

    return (
      <div>
        { content }
      </div>
    )
  }
}
export default Content;
