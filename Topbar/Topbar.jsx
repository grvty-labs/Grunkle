'use strict';
import React, { Component } from 'react';
import BurgerMenu from 'react-burger-menu';

class Topbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNavigation: false,
    };
  }

  onClick(e) {
    e.preventDefault();
    this.setState({ showNavigation: !this.state.showNavigation });
  }

  // wrapper() {
  //   this.state.showNavigation ? document.get
  // }

  render () {
    const {
      links,
      goToLink,
    } = this.props;

    let lastScrollTop = 0;
    let state = this.state.showNavigation;

    /*corregir esto*/
    window.addEventListener('scroll', function () {
      var st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop && state == false) {
        document.getElementById('nav-bar-scroll').style.top = '-100%';
      } else if (st <= 3 && state == false) {
        document.getElementById('nav-bar-scroll').style.top = '-100%';
      } else {
        document.getElementById('nav-bar-scroll').style.top = '0';
      }

      lastScrollTop = st;
    }, false);

    let linksRender = links.map((element, index) => (
      <div key = { index } className = 'nav' onClick = { () => {
        goToLink(element.id);
        this.state.showNavigation == true ? this.setState({ showNavigation: !this.state.showNavigation })
        : null;
      }
      }>
        { element.title }
      </div>
    ));

    let navBarScroll =  <div className = 'nav-bar-scroll' id = 'nav-bar-scroll'>
      <div className = 'left-column'>
        <img className = 'logo' src = '/static/assets/logo.svg'/>
        <img className = 'logo-mobile' src = '/static/assets/logo-mobile.svg'/>
      </div>
      <div className = 'right-column'>
        <h5 className = 'nav'>Hire us</h5>
        <div id = 'menu' className = {this.state.showNavigation ? 'on' : 'menu'}
          onClick={this.onClick.bind(this)}>
          <i className = 'close'>
            <span>
              <p></p>
              <p></p>
              <p></p>
            </span>
          </i>
        </div>
      </div>
      <div className = {'navigation ' + (this.state.showNavigation ? 'show' : 'hidden')}>
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
