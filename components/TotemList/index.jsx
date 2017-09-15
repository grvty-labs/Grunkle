// @flow
import * as React from 'react';
import inViewport from 'in-viewport';

// import CTAComponent from '../CTA';
import type { BlockComponentProps } from '../../flowTypes/pages';
import type { TotemsBlock } from '../../flowTypes/blocks';

type State = {
  show: boolean,
  slide: boolean,
};

class Totems extends React.Component<void, BlockComponentProps, State> {
  constructor(props: BlockComponentProps) {
    super(props);
    (this: any).fadeUp = this.fadeUp.bind(this);
  }

  state = {
    show: false,
    slide: this.props.slide,
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
    const value: TotemsBlock = this.props.value;

    const columns = value.totems.map((element, i) => (
      <div className='column' key={i}>
        <img src={element.svg.url} alt={element.svg.title} />
      </div>
    ));

    let columnNumber = value.totems.length;
    let width;
    if (columnNumber >= 4 && window.innerWidth > 1024) {
      width = {
        width: '1024px',
      };
    } else if (columnNumber === 3 && window.innerWidth > 1024) {
      width = {
        width: '800px',
      };
    } else {
      width = {
        width: '100%',
      }
    }

    /* checks if the menu is opened or closed and changes the class depending
    on the case */
    const menu = (this.state.slide !== this.props.slide && window.innerWidth >= 1024)
      ? 'menu-open'
      : 'menu-close';

    // TODO: Add CTA, Title and Decoration

    return (
      <div
        className={`totemList fadeUp ${this.state.show ? 'play' : ''}`}
        ref={(fadeUp) => { this.div = fadeUp; }}
      >
        <div className='totemList-container'>
          <div className={`container ${menu}`} style={width}>
            { columns }
          </div>
        </div>
      </div>
    );
  }
}

export default Totems;
