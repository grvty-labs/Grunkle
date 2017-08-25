// @flow
import * as React from 'react';
import inViewport from 'in-viewport';
import type { CTAField } from '../../flowTypes/fields';

type State = {
  show: boolean,
};

type Props = {
  toPage: Function,
} & CTAField;

class CTAComponent extends React.Component<void, Props, State> {
  constructor(props: Props) {
    super(props);
    (this: any).colorUp = this.colorUp.bind(this);
  }

  state = {
    show: false,
  };

  componentDidMount() {
    this.watcher = inViewport(this.ctaWrap, this.colorUp);
  }

  componentWillUnmount() {
    if (this.watcher) {
      this.watcher.dispose();
      this.watcher = null;
    }
  }

  ctaWrap: HTMLDivElement;
  watcher: ?any;

  colorUp() {
    if (this.watcher) {
      this.watcher.dispose();
      this.setState({ show: true });
    }
  }

  render() {
    const { breed, text, page, toPage, link } = this.props;
    const className = text !== '' ? '-show' : '-none';
    const linkAction = page
      ? (
        <div
          className={`${breed}${className} ${this.state.show ? 'active' : ''}`}
          ref={((ctaAn) => { this.ctaWrap = ctaAn; })}
          role='link' tabIndex={0}
          onClick={() => toPage(page.id, page.url)}
        >
          <span className='cta-text'>{text}</span>
          <span>{text}</span>
        </div>)
      : (
        <a
          className={`${breed}${className} ${this.state.show ? 'active' : ''}`}
          ref={((ctaAn) => { this.ctaWrap = ctaAn; })}
          target='_blank' href={link}
        >
          <span className='cta-text'>{text}</span>
          <span>{text}</span>
        </a>);

    return (
      <div className={`cta-container${className}`}>
        {linkAction}
      </div>
    );
  }
}

export default CTAComponent;
