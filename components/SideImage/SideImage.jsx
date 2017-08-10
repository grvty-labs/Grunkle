'use strict';
import React, { Component } from 'react';

class sideImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slide: this.props.slide,
      load: false,
    };
    this.changeState = this.changeState.bind(this);
  }

  // componentDidMount() {
  //   let wrapper = document.getElementsByClassName('image');
    /*cuando la clase image este in view (no se como hacerle porque se ejecuta
  en todos los que tienen esa clase y no el componente que en el que esta in view)*/
    /*for para tener en una variable las imagenes que se tienen que desplegar*/

    // for (let i = 0; i < wrapper.length; i++) {
    //   let img = wrapper[i].children;
    //   for (let i = 0; i < img.length; i++) {
    /*checar si las imagenes se cargaron*/

    //     var tempImg = new Image();
    //     tempImg.src = img[i].src;
    //     tempImg.onload = () => {
    //       this.setState({ load: true });
    //     };
    //   }
    // }
  // }

  changeState() {
    console.log('entro');
    this.setState({ load: true });
  }

  render() {
    var inViewport = require('in-viewport');
    var elem = this.image;
    var watcher = inViewport(elem, visible);

    function visible() {
      let img = elem.lastElementChild;
      var tempImg = new Image();
      tempImg.src = img.src;
      tempImg.onload = () => {
        () => this.changeState();
      };

      watcher.dispose();
    }

    let cta = '-none';
    if (this.props.value.cta.text != '') {
      cta = '-show';
    }

    let menu;
    if (this.state.slide != this.props.slide && window.innerWidth >= 1024) {
      menu = 'menu-open';
    } else {
      menu = 'menu-close';
    }

    let inverse = 'normal';
    if (this.props.value.side == 'right') {
      inverse = 'inverse';
    }

    let background = {
      backgroundColor: 'rgba(' + this.props.value.decoration.background_color + ')',
    };

    let image;
    if (this.props.value.inline) {
      image = (
        <picture className = { 'image ' + menu +
        (this.state.load ? ' loaded' : ' not-loaded') } ref = {(image) => { this.image = image; }}
        >
          <source media = '(max-width:1024px)' srcSet = { this.props.value.image.thumbs.sm }/>
          <source media = '(min-width:1024px)' srcSet = { this.props.value.image.thumbs.md }/>
          <img src = { this.props.value.image.thumbs.original }/>
        </picture>
      );
    } else {
      image = (
        <div className = 'image-container'
          style = {{ backgroundImage: 'url(' + this.props.value.image.thumbs.original + ')' }}/>
      );
    }

    return (
      <div className =  { 'sideImage ' + inverse +
      (this.props.value.inline ? ' inline' : ' not-inline') }
        style = { background }
        ref={div => {this.div = div;}}
        >
        <div className = 'column column-image'>
          { image }
          <div className = 'division-rectangle'></div>
        </div>
        <div className = 'column column-text'>
          <div className = {'container-text ' + menu}>
            <h5>{ this.props.value.subtitle }</h5>
            <h2>{ this.props.value.title }</h2>
            <p>{ this.props.value.paragraph }</p>
            <div className = {'cta-container' + cta}>
              <div className = {this.props.value.cta.breed + cta}>
                <span>{this.props.value.cta.text}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default sideImage;
