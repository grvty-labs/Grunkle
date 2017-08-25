// @flow
import * as React from 'react';
import inViewport from 'in-viewport';

import type { BlockComponentProps } from '../../flowTypes/pages';
import type { TeamListBlock } from '../../flowTypes/blocks';
import type { MemberField, ThumbedImageField } from '../../flowTypes/fields';

// import { TEAM_LIST_GROUPSIZE } from '../../../../constants';

type Props = {
  modal: boolean,
  slide: boolean,
  toggleModal: Function,
} & BlockComponentProps;

type State = {
  element: MemberField | null,
  slide: boolean,
  show: boolean,
};

class Team extends React.Component<void, Props, State> {
  constructor(props: Props) {
    super(props);
    (this: any).fadeUp = this.fadeUp.bind(this);
    (this: any).renderImage = this.renderImage.bind(this);
    (this: any).renderMember = this.renderMember.bind(this);
    (this: any).renderMemberModal = this.renderMemberModal.bind(this);
    (this: any).showInformation = this.showInformation.bind(this);
  }

  state = {
    element: null,
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

  showInformation(element: MemberField) {
    this.setState({ element });
  }

  renderImage(image?: ThumbedImageField) {
    if (image) {
      return (
        <picture className='member-photo'>
          <source media='(max-width:768px)' srcSet={image.thumbs.xs} />
          <source media='(max-width:1024px)' srcSet={image.thumbs.sm} />
          <source media='(min-width:1024px)' srcSet={image.thumbs.md} />
          <img src={image.thumbs.original} alt={image.title} />
        </picture>
      );
    }
    return null;
  }

  // TODO: Render social links
  renderMemberModal(member: MemberField | null) {
    if (member) {
      return (
        <div className='member-information'>
          <div className='svg' />
          <div className='information'>
            <div className='close'>
              <div
                role='button' tabIndex={0}
                onClick={this.props.toggleModal}
              >
                X
              </div>
            </div>
            {this.renderImage(member.photograph)}
            <div className='name-container'>
              <h3>{ member.name }</h3>
              <p className='position'>{member.position}</p>
              <div className='rectangle' />
              <p className='description'>{member.description}</p>
            </div>
          </div>
        </div>
      );
    }
    return null;
  }

  renderMember(member: MemberField, index: number) {
    const photograph: ThumbedImageField = member.photograph;
    return (
      <div
        key={index} className='member-container'
        onClick={() => {
          this.showInformation(member);
          this.props.toggleModal();
        }}
        role='button' tabIndex={0}
      >
        <picture className='member-photo'>
          <source media='(max-width:1440px)' srcSet={photograph.thumbs.sm} />
          <img src={photograph.thumbs.original} alt={photograph.title} />
        </picture>
        <span>{member.name}</span>
      </div>
    );
  }

  render() {
    const value: TeamListBlock = this.props.value;

    const divider = ~~(value.members.length / 3);
    const firstColumn = value.members.map(this.renderMember);
    const secondColumn = firstColumn.splice(0, divider);
    const thirdColumn = firstColumn.splice(0, divider);

    /* checks if the menu is opened or closed and changes the class depending
    on the case */
    const menu = (this.state.slide !== this.props.slide && window.innerWidth >= 1024)
      ? 'menu-open'
      : 'menu-close';

    return (
      <div
        className='team-list'
        style={{ backgroundColor: `rgba(${value.decoration.background_color})` }}
      >
        <div
          className={`header-container fadeUp ${this.state.show ? 'play' : ''}`}
          ref={(fadeUp) => { this.div = fadeUp; }}
        >
          <div className='header'>
            <div className='container'>
              <h5>{value.subtitle}</h5>
              <h2>{value.title}</h2>
              <p>{value.paragraph}</p>
            </div>
            <div className='division-rectangle' />
          </div>
        </div>
        <div className={`team ${menu} fadeUp ${this.state.show ? 'play' : ''}`}>
          <div className={`left-column column ${menu}`}>
            { secondColumn}
          </div>
          <div className={`middle-column column ${menu}`}>
            { firstColumn }
          </div>
          <div className={`right-column column ${menu}`}>
            { thirdColumn }
          </div>
        </div>
        <div className={`modal ${this.props.modal ? 'show' : 'hidden'}`}>
          {this.renderMemberModal(this.state.element)}
        </div>
      </div>
    );
  }
}

export default Team;
