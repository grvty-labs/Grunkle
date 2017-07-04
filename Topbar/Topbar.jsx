'use strict';
import React, { Component } from 'react';
import BurgerMenu from 'react-burger-menu';

class Topbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNavigation: false,
      onScroll: false,
    };
  }

  onClick(e) {
    e.preventDefault();
    this.setState({ showNavigation: !this.state.showNavigation });
  }

  render () {
    const {
      links,
      goToLink,
    } = this.props;

    let lastScrollTop = 0;

    window.addEventListener('scroll', function () {
      var st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        document.getElementById('nav-bar-scroll').style.top = '-100%';
      } else if (st <= 3) {
        document.getElementById('nav-bar-scroll').style.top = '-100%';
      } else {
        // console.log('arriba');
        document.getElementById('nav-bar-scroll').style.top = '0';
      }

      lastScrollTop = st;
    }, false);

    let linksRender = links.map((element, index) => (
      <div key = { index } className = 'nav' onClick = { () => {
        goToLink(element.id);
        this.state.onScroll == false ? this.setState({ showNavigation: !this.state.showNavigation })
        : null;
      }
      }>
        { element.title }
      </div>
    ));

    let navBarScroll =  <div className = 'nav-bar-scroll' id = 'nav-bar-scroll'>
      <img className = 'hamburguer-icon' src = '/static/assets/menu.png' onClick={this.onClick.bind(this)}/>
      <div className = {'navigation' + (this.state.showNavigation ? 'show' : 'hidden')}>
        <div className = 'nav-container'>
          { linksRender }
        </div>
      </div>
    </div>;

    let navBarHeader = <div className = 'nav-bar-header'>
      <div className = 'left-column'>
        <img src = '/static/assets/logo.svg'/>
      </div>
      <div className = 'right-column'>
        { linksRender }
      </div>
    </div>;

    return (
      <div className = 'topbar'>
        { navBarHeader }
        { navBarScroll }
      </div>
    );
  }
}

export default Topbar;
