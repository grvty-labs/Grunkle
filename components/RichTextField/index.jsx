// @flow
import * as React from 'react';
import inViewport from 'in-viewport';

type Props = {
  value: string,
  slide: boolean,
};

type State = {
  show: boolean,
  slide: boolean,
};

class RichTextField extends React.Component<void, Props, State> {
  constructor(props: Props) {
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
    /* checks if the menu is opened or closed and changes the class depending
    on the case */
    const menu = (this.state.slide !== this.props.slide && window.innerWidth >= 1024)
      ? 'menu-open'
      : 'menu-close';

    return (
      <div
        className={`rich-text-field fadeUp ${this.state.show ? 'play' : ''}`}
        ref={(fadeUp) => { this.div = fadeUp; }}
      >
        <div className={`container ${menu}`}>
          <div
            className='text'
            dangerouslySetInnerHTML={{ __html: this.props.value }}
          />
        </div>
      </div>
    );
  }
}

export default RichTextField;
