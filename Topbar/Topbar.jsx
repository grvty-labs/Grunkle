// @flow
import * as React from 'react';
import { LOGO, LOGO_MOBILE } from '../../../constants';
import type { TopbarProps } from '../flowTypes';

type DState = {
  showScrollBar: boolean,
};

class Topbar extends React.Component < void, TopbarProps, DState> {
  state = {
    showScrollBar: window.innerWidth <= 1024,
  };

  componentDidMount() {
    let lastScrollTop = 0;
    window.addEventListener('scroll', () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop && this.props.slide === false) {
        this.setState({ showScrollBar: false });
      } else if (st <= 3 && this.props.slide === false && window.innerWidth > 1024) {
        this.setState({ showScrollBar: false });
      } else {
        this.setState({ showScrollBar: true });
      }

      lastScrollTop = st;
    }, false);
  }

  componentWillUnmount() {
    // TODO:checar como matar listener
  }

  render() {
    const {
      links,
      goToLink,
      toggle,
      slide,
      goToPage,
      home,
    } = this.props;
    const { showScrollBar } = this.state;

    const linksRender = links.map((element, index) => (
      <div
        key={index} className='nav'
        onClick={(element.id == null
          ? () => goToPage(element.url)
          : () => goToLink(element.id, element.url))}
        role='link' tabIndex={0}
      >
        {element.title}
      </div>
    ));

    const navBarScroll = (
      <div className={`nav-bar-scroll ${showScrollBar ? 'show' : 'hidden'}`}>
        <div className='container'>
          <div className='left-column'>
            <img
              className='logo' src={LOGO}
              onClick={() => goToLink(home.id)} alt={home.alt}
            />
            <img
              className='logo-mobile' src={LOGO_MOBILE}
              onClick={() => goToLink(home.id)} alt={home.alt}
            />
          </div>
          <div className='right-column'>
            <h5 className='nav'>Hire us</h5>
            <div
              id='menu' className={slide ? 'on' : 'menu'}
              onClick={toggle} role='button'
              tabIndex={0}
            >
              <i className='close'>
                <span>
                  <p />
                  <p />
                  <p />
                </span>
              </i>
            </div>
          </div>
        </div>
        <div className={`navigation ${slide ? 'show' : 'hidden'}`}>
          <img src={LOGO} alt={home.alt} />
          <div className='nav-container'>
            { linksRender }
          </div>
        </div>
      </div>
    );

    const navBarHeader = (
      <div className='nav-bar-header'>
        <div className='container'>
          <div className='left-column'>
            <img src={LOGO} onClick={() => goToLink(home.id, home.url)} alt={home.alt} />
          </div>
          <div className='right-column'>
            { linksRender }
          </div>
        </div>
      </div>
    );

    return (
      <div className='topbar'>
        { navBarHeader }
        { navBarScroll }
      </div>
    );
  }
}

export default Topbar;
