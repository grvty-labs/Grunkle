'use strict';
import React, { Component } from 'react';

class Topbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNavigation: false
    }
  }


  onClick(e){
    e.preventDefault();
    this.setState({showNavigation: !this.state.showNavigation});
  }

  render () {
    const {
      links,
      goToLink,
    } = this.props;

    let linksRender = links.map((element, index) => (
      <div key = { index } className = 'nav' onClick = { () => {
        goToLink(element.id);
        this.setState({showNavigation: !this.state.showNavigation});
      }}>
        { element.title }
      </div>
    ));

    return (
      <div className = 'topbar'>
        <img className = 'hamburguer-icon' src = '/static/assets/menu.png' onClick={this.onClick.bind(this)}/>
        <div className = {'navigation' + (this.state.showNavigation ? 'show' : 'hidden')}>
          <div className = 'nav-container'>
            { linksRender }
          </div>
        </div>
      </div>
    )
  }
}

export default Topbar;
