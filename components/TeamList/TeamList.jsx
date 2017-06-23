'use strict';
import React, { Component } from 'react';
import { TEAM_LIST_GROUPSIZE } from '../../constants';

class Team extends Component {
  constructor(props) {
    super(props);
    this.showInformation = this.showInformation.bind(this);
    this.renderMemberInformation = this.renderMemberInformation.bind(this);
    this.state = {
      id: null,
      showInformation: false,
      element: null,
    };
  }

  showInformation(element, id) {
    this.setState({
      element: element,
      showInformation: true,
      id: id,
    });
  }

  renderMemberInformation(element) {
    return (
      <div className = 'member-information' key={0}>
        <div className = 'left-column'>
          <picture className = 'member-photo'>
            <source media = '(max-width:1024px)' srcSet = { element.photograph.thumbs.xs }/>
            <source media = '(min-width:1024px)' srcSet = { element.photograph.thumbs.sm }/>
            <img src = { element.photograph.thumbs.original }/>
          </picture>
        </div>
        <div className = 'right-column'>
          <h5>{ element.name }</h5>
          <p>{ element.description }</p>
          <p>{ element.position }</p>
        </div>
      </div>
    );
  }

  render() {
    console.log(TEAM_LIST_GROUPSIZE);

    let background = {
      backgroundColor: 'rgba(' + this.props.value.decoration.background_color + ')',
    };

    let groupSize = 3;

    let team = this.props.value.members.map((element, index) => (
      <div key = { index } className ='member-container'>
        <picture className = 'member-photo' onClick = {() =>
          { this.showInformation(element, index); }
        }>
        <source media = '(max-width:1024px)' srcSet = { element.photograph.thumbs.xs }/>
        <source media = '(min-width:1024px)' srcSet = { element.photograph.thumbs.sm }/>
        <img src = { element.photograph.thumbs.original }/>
      </picture>
      <span>{ element.name }</span>
    </div>
  )).reduce((r, element, index) => {
      index % TEAM_LIST_GROUPSIZE === 0 && r.push([]);
      r[r.length - 1].push(element);
      return r;
    }, []).map((rowContent, index) => (
      <div className='row' key={ index }>
        <div className = 'information'>
          { parseInt(this.state.id / 3) == index && this.state.showInformation == true ?
            this.renderMemberInformation(this.state.element)
            : null }
        </div>
        <div className = 'member-photos'>
          { rowContent }
        </div>
      </div>
    ));

    return (
      <div className = 'team-list' style = { background }>
        <div className = 'team-list-header'>
          <h4>{ this.props.value.subtitle }</h4>
          <h2>{ this.props.value.title }</h2>
          <p>{ this.props.value.paragraph }</p>
        </div>
        <div className = 'team'>
          { team }
        </div>
      </div>
    );
  }
}

export default Team;
