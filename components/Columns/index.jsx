// @flow
import * as React from 'react';
import inViewport from 'in-viewport';
// import CTAComponent from '../CTA';

import type { BlockComponentProps } from '../../flowTypes/pages';
import type { ColumnsBlock } from '../../flowTypes/blocks';
import type { ColumnField } from '../../flowTypes/fields';

type State = {
  show: boolean,
};

class Columns extends React.Component<void, BlockComponentProps, State> {
  constructor(props: BlockComponentProps) {
    super(props);
    (this: any).fadeUp = this.fadeUp.bind(this);
    (this: any).renderColumn = this.renderColumn.bind(this);
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

  renderColumn(column: ColumnField, index: number) {
    return (
      <div key={index} className='column'>
        <img
          className={`icon ${column.image ? '' : 'null'}`}
          src={column.image ? column.image.thumbs.xs : null}
          alt={column.image ? column.image.title : column.title}
        />
        <h3>{ column.title }</h3>
        <p>{ column.paragraph }</p>
      </div>
    );
  }

  render() {
    const value: ColumnsBlock = this.props.value;

    const columnNumber = value.columns.length;
    const columns = value.columns.map(this.renderColumn);

    const width = (columnNumber >= 4 && window.innerWidth > 1024)
      ? { width: '1024px' }
      : (columnNumber === 3 && window.innerWidth > 1024)
        ? { width: '800px' }
        : null;

    /* checks if the menu is opened or closed and changes the class depending
    on the case */
    const menu = (this.state.slide !== this.props.slide && window.innerWidth >= 1024)
      ? 'menu-open'
      : 'menu-close';

    return (
      <div
        className='text-column fadeUp'
        style={{ backgroundColor: `rgba(${value.decoration.background_color})` }}
        ref={(fadeUp) => { this.div = fadeUp; }}
      >
        <div
          className={`container ${menu}`}
          style={width}
        >
          {columns}
        </div>
      </div>

    );
  }
}

export default Columns;
