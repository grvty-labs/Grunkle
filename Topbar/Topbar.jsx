'use strict';
import React, { Component } from 'react';
import { LOGO } from '../../../constants';
import { LOGO_MOBILE } from '../../../constants';

class Topbar extends Component {
  constructor(props) {
    super(props);
    if (window.innerWidth > 1024) {
      this.state = {
        showScrollBar: false,
      };
    } else {
      this.state = {
        showScrollBar: true,
      };
    }
  }

  componentDidMount() {
    let lastScrollTop = 0;
    window.addEventListener('scroll', function () {
      var st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop && this.props.slide == false) {
        this.setState({ showScrollBar: false });
      } else if (st <= 3 && this.props.slide == false && window.innerWidth > 1024) {
        this.setState({ showScrollBar: false });
      } else {
        this.setState({ showScrollBar: true });
      }

      lastScrollTop = st;
    }.bind(this), false);
  }

  componentWillUnmount() {
    //TODO:checar como matar listener
  }

  render () {
    const {
      links,
      goToLink,
      toggle,
      slide,
      goToPage,
    } = this.props;

    let linksRender = links.map((element, index) => (
      <div key = { index } className = 'nav' onClick = {
        (element.id == null ? ()=> { goToPage(element.link);}

        : () => { goToLink(element.id);})}>
        { element.title }
      </div>
    ));

    let navBarScroll =  <div className = { 'nav-bar-scroll ' +
    (this.state.showScrollBar ? 'show' : 'hidden')}>
    <div className = 'container'>
      <div className = 'left-column'>
        <img className = 'logo' src = { LOGO }/>
        <img className = 'logo-mobile' src = { LOGO_MOBILE }/>
      </div>
      <div className = 'right-column'>
        <h5 className = 'nav'>Hire us</h5>
        <div id = 'menu' className = {slide ? 'on' : 'menu'}
          onClick={ toggle }>
          <i className = 'close'>
            <span>
              <p></p>
              <p></p>
              <p></p>
            </span>
          </i>
        </div>
      </div>
    </div>
      <div className = {'navigation ' + (slide ? 'show' : 'hidden')}>
        <img src = { LOGO }/>
        <div className = 'nav-container'>
          { linksRender }
        </div>
      </div>
    </div>;

    let navBarHeader = <div className = 'nav-bar-header'>
      <div className = 'container'>
        <div className = 'left-column'>
          <img src = { LOGO }/>
        </div>
        <div className = 'right-column'>
          { linksRender }
        </div>
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
