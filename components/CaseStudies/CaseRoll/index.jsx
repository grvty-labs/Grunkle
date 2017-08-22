'use strict';
import React, { Component } from 'react';

class CaseRoll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slide: this.props.slide,
    };
  }

  componentDidMount() {
    document.title = this.props.title;
  }

  render() {
    const { cases, description, slide, toPage, subtitle, title, } = this.props;

    let menu;
    if (this.state.slide !== slide && window.innerWidth >= 1024) {
      menu = 'menu-open';
    } else {
      menu = 'menu-close';
    }

    const miniPost = cases.map((element, index) => (
      <div
        className='mini-post'
        onClick={() => toPage(element.id, element.url)}
        key={index}
      >
        <div className='column column-image'>
          <picture className={`image ${menu}`}>
            <source media='(max-width:767px)' srcSet={element.header_image_thumbs.thumbs.xs} />
            <source media='(max-width:1024px)' srcSet={element.header_image_thumbs.thumbs.sm} />
            <source media='(min-width:1024px)' srcSet={element.header_image_thumbs.thumbs.md} />
            <img
              src={element.header_image_thumbs.thumbs.original}
              alt={element.header_image_thumbs.title}
            />
          </picture>
        </div>
        <div className='column column-text'>
          <h5>{ element.subtitle }</h5>
          <h2>{ element.title }</h2>
          <p>{ element.search_description }</p>
        </div>
      </div>
    ));


    return (
      <div className=' case-roll'>
        <div className='header-container'>
          <div className='header'>
            <div className='container'>
              <h5>{subtitle}</h5>
              <h2>{title}</h2>
              <div
                className='description'
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </div>
            <div className='division-rectangle' />
          </div>
        </div>
        <div className='roll'>
          { miniPost }
        </div>
      </div>
    );
  }
}

export default CaseRoll;
