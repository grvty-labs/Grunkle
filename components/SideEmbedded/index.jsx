// @flow
import * as React from 'react';
import inViewport from 'in-viewport';

import CTAComponent from '../CTA';
import type { BlockComponentProps } from '../../flowTypes/pages';
import type { SideEmbeddedBlock } from '../../flowTypes/blocks';

type State = {
  slide: boolean,
  show: boolean,
};

class SideEmbedded extends React.Component<void, BlockComponentProps, State> {
  constructor(props: BlockComponentProps) {
    super(props);
    (this: any).fadeUp = this.fadeUp.bind(this);
  }

  state = {
    slide: this.props.slide,
    show: false,
  };

  componentDidMount() {
    this.watcher = inViewport(this.div, this.fadeUp);
  }

  div: HTMLDivElement;
  watcher: ?any;

  fadeUp() {
    if (this.watcher) {
      this.watcher.dispose();
      this.setState({ show: true });
    }
  }

  render() {
    const value: SideEmbeddedBlock = this.props.value;

    const side = (this.props.value.side === 'left')
      ? 'left'
      : 'right';

    /* checks if the menu is opened or closed and changes the class depending
    on the case */
    const menu = (this.state.slide !== this.props.slide && window.innerWidth >= 1024)
      ? 'menu-open'
      : 'menu-close';

    return (
      <div
        className='sideEmbed'
        style={{ backgroundColor: `rgba(${value.decoration.background_color})` }}
      >
        <div className={`container ${side}`}>
          <div
            className='column video'
            style={{ backgroundImage: `url(${value.embed.thumbnail_url})` }}
            dangerouslySetInnerHTML={{ __html: value.embed.html }}
          />
          <div
            className={`column fadeUp ${this.state.show ? 'play' : ''}`}
            ref={(div) => { this.div = div; }}
          >
            <div className={`container-text ${menu}`}>
              <h5>{value.subtitle}</h5>
              <h2>{value.title}</h2>
              <p>{value.paragraph}</p>
              <CTAComponent {...value.cta} toPage={this.props.toPage} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SideEmbedded;
