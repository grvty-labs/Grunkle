// @flow
import * as React from 'react';
import inViewport from 'in-viewport';
import type { BlogPostPreview } from '../../../flowTypes/pages';

type Props = {
  toPage: Function,
} & BlogPostPreview;

type State = {
  show: boolean,
};

class PostPreviewComponent extends React.Component<void, Props, State> {
  constructor(props: Props) {
    super(props);
    (this: any).fadeUp = this.fadeUp.bind(this);
  }

  state = {
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
    const {
      toPage,
      id,
      url,
      author,
      title,
      tags,
    } = this.props;

    return (
      <div
        className={`mini-post fadeUp ${this.state.show ? 'play' : ''}`}
        key={id}
        ref={(fUp) => { this.div = fUp; }}
        onClick={() => toPage(id, url)}
        role='link' tabIndex={0}
      >
        <h5>BY {author.first_name}</h5>
        <h2>{title}</h2>
        { tags.map((tag, i) => (
          <span key={i}>#{tag}</span>
        ))}
      </div>
    );
  }
}

export default PostPreviewComponent;
