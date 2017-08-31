'use strict';
import React, { Component } from 'react';
import RichTextField from '../../RichTextField';
import Masonry from '../../Masonry';
import SideEmbedded from '../../SideEmbedded';
import Quote from '../../Quote';

class CaseStudy extends Component {
  componentDidMount() {
    document.title = this.props.title;
  }

  render() {
    let pageRender = this.props.body.map((element, index) => {
      switch (element.type) {
        case 'richtext':
          return <RichTextField key={index} {...element} />;
        case 'masonry':
          return <Masonry key={index} {...element} />;
        case 'sideEmbed':
          return <SideEmbedded key={index} {...element} />;
        case 'quote':
          return <Quote key={index} {...element} />;
        default:
          return <div>Component not available</div>;
      }
    });

    return (
      <div className='case-study'>
        <div className='header-container'>
          <div className='header'>
            <div className='container'>
              <h5>{this.props.subtitle}</h5>
              <h2>{this.props.title}</h2>
            </div>
            <div className='division-rectangle' />
          </div>
        </div>
        <div className='header-image'
          style={{ backgroundImage: 'url(' + this.props.header_image.thumbs.original + ')' }}
        >
        </div>
        <div className='case-study-content'>
          <div className='container'>
            <div className='first-column'>
              <a href='#'><strong>See all work</strong></a>
            </div>
            <div className='second-column'>
              { pageRender}
            </div>
            <div className='third-column'>
              <h5>Client:</h5>
              <h5>Year:</h5>
              <h5>Solutions:</h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CaseStudy;
