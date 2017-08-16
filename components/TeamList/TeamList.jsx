'use strict';
import React, { Component } from 'react';
import { TEAM_LIST_GROUPSIZE } from '../../../../constants';

class Team extends Component {
  constructor(props) {
    super(props);
    this.showInformation = this.showInformation.bind(this);
    this.renderMemberInformation = this.renderMemberInformation.bind(this);
    this.hideInformation = this.hideInformation.bind(this);
    this.state = {
      id: null,
      // showInformation: this.props.modal,
      element: null,
      slide: this.props.slide,
    };
  }


  showInformation(element, id) {
    this.setState({
      element: element,
      // showInformation: true,
      id: id,
    });
  }

  hideInformation() {
    this.setState({
      element: null,
      // showInformation: false,
      id: null,
    });
  }

  renderMemberInformation(element) {
    return (
      <div className = 'member-information'>
        <div className = 'svg'></div>
        <div className = 'information'>
          <div className = 'close'>
            <p onClick = { () => {
              this.hideInformation();
              this.props.toggleModal();
            }
            }>X</p>
          </div>
          <picture className = 'member-photo'>
            <source media = '(max-width:768px)' srcSet = { element.photograph.thumbs.xs }/>
            <source media = '(max-width:1024px)' srcSet = { element.photograph.thumbs.sm }/>
            <source media = '(min-width:1024px)' srcSet = { element.photograph.thumbs.md }/>
            <img src = { element.photograph.thumbs.original }/>
          </picture>
          <div className = 'name-container'>
            <h3>{ element.name }</h3>
            <p className = 'position'>{ element.position }</p>
            <div className = 'rectangle'></div>
            <p className = 'description'>{ element.description }</p>
          </div>
        </div>
      </div>
    );
  }

  render() {
    console.log(this.props.modal);
    var inViewport = require('in-viewport');
    var elem = this.fadeUp;
    var watcher = inViewport(elem, visible);

    function visible() {
      elem.style.animation = 'fadeUp 1s ease forwards';
      elem.style.webkitAnimation = 'fadeUp 1s ease forwards';

      watcher.dispose();
    }

    let background = {
      backgroundColor: 'rgba(' + this.props.value.decoration.background_color + ')',
    };

    let team = this.props.value.members.map((element, index) => (
      <div key = { index } className ='member-container'>
        <picture className = 'member-photo' onClick = {() =>
          {
            this.showInformation(element, index); this.props.toggleModal();
          }
        }>
        <source media = '(max-width:1440px)' srcSet = { element.photograph.thumbs.sm }/>
        <img src = { element.photograph.thumbs.original }/>
      </picture>
      <span>{ element.name }</span>
    </div>
  ));

    let divider = ~~(this.props.value.members.length / 3);
    let firstColumn = team;
    let secondColumn = firstColumn.splice(0, divider);
    let thirdColumn = firstColumn.splice(0, divider);

    /*checks if the menu is opened or closed and changes the class depending
    on the case */
    let menu;
    if (this.state.slide != this.props.slide && window.innerWidth >= 1024) {
      menu = 'menu-open';
    } else {
      menu = 'menu-close';
    }

    //  div with n number of elements
    // .reduce((r, element, index) => {
    //       index % aux === 0 && r.push([]);
    //       r[r.length - 1].push(element);
    //       return r;
    //     }, []).map((rowContent, index) => (
    //       <div className='row' key={ index }>
    //         <div className = 'information'>
    //           { parseInt(this.state.id / 3) == index && this.state.showInformation == true ?
    //             this.renderMemberInformation(this.state.element)
    //             : null }
    //         </div>
    //         <div className = 'member-photos'>
    //           { rowContent }
    //         </div>
    //       </div>
    //     ));

    return (
      <div className = 'team-list' style = { background }>
        <div className = 'header-container fadeUp' ref = {(fadeUp => { this.fadeUp = fadeUp; })}>
          <div className = 'header'>
            <div className = 'container'>
              <h5>{ this.props.value.subtitle }</h5>
              <h2>{ this.props.value.title }</h2>
              <p>{ this.props.value.paragraph }</p>
            </div>
            <div className = 'division-rectangle'></div>
          </div>
        </div>
        <div className = {'team ' + menu}>
          <div className = {'left-column column ' + menu }>
            { secondColumn}
          </div>
          <div className = {'middle-column column ' + menu}>
            { firstColumn }
          </div>
          <div className = {'right-column column ' + menu}>
            { thirdColumn }
          </div>
        </div>
        <div className = {'modal' + (this.props.modal
          ? '-show' : '-hidden')}>
          {this.props.modal ?
            this.renderMemberInformation(this.state.element)
            : null }
        </div>
      </div>
    );
  }
}

export default Team;
