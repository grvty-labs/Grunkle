'use strict';
import React, { Component } from 'react';
import { TEAM_LIST_GROUPSIZE } from '../../../../constants';

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

    let background = {
      backgroundColor: 'rgba(' + this.props.value.decoration.background_color + ')',
    };

    let team = this.props.value.members.map((element, index) => (
      <div key = { index } className ='member-container'>
        <picture className = 'member-photo' onClick = {() =>
          { this.showInformation(element, index);}
        }>
        <source media = '(max-width:1024px)' srcSet = { element.photograph.thumbs.xs }/>
        <source media = '(min-width:1024px)' srcSet = { element.photograph.thumbs.sm }/>
        <img src = { element.photograph.thumbs.original }/>
      </picture>
      <span>{ element.name }</span>
    </div>
  ));

    let divider = ~~(this.props.value.members.length / 3);
    let firstColumn = team;
    let secondColumn = firstColumn.splice(0, divider);
    let thirdColumn = firstColumn.splice(0, divider);

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
        <div className = 'header'>
          <div className = 'container'>
            <h3>{ this.props.value.subtitle }</h3>
            <h2>{ this.props.value.title }</h2>
            <p>{ this.props.value.paragraph }</p>
          </div>
        </div>
        <div className = 'team'>
          <div className = 'left-column column'>
            { secondColumn}
          </div>
          <div className = 'middle-column column'>
            { firstColumn }
          </div>
          <div className = 'right-column column'>
            { thirdColumn }
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
