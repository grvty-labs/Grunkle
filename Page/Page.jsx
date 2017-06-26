'use strict';
import React, { Component } from 'react';
import SideImage from '../components/sideimage/SideImage';
import Hero from '../components/hero/Hero';
import Header from '../components/header/Hero';
import CenteredText from '../components/centeredtext/CenteredText';
import TextColumn from '../components/textcolumn/TextColumn';
import SideEmbended from '../components/sideembended/SideEmbended';
import TeamList from '../components/teamlist/TeamList';
import MasonryComponent from '../components/masonry/Masonry';
import Post from '../components/posts/Post';
import Roll from '../components/rolls/Roll';

class Page extends Component {

  render() {

    const {
      currentPage,
    } = this.props;

    // console.log(currentPage);

    let pageRender = currentPage.body.map((element, index) => {
      switch (element.type) {
        case 'sideImage':
          return <SideImage key={ index } { ...element } />;
        case 'hero':
          return <Hero key = { index } { ...element }/>;
        case 'header':
          return <Header key = { index } { ...element }/>;
        case 'centeredText':
          return <CenteredText key = { index } { ...element }/>;
        case 'columns':
          return <TextColumn key = { index } { ...element }/>;
        case 'sideEmbed':
          return <SideEmbended key = { index } { ...element }/>;
        case 'teamList':
          return <TeamList key = { index } { ...element }/>;
        case 'masonry':
          return <MasonryComponent key = { index } { ...element }/>;
        default:
          return <div key={ index }>Component not available</div>;
      }
    });

    // switch (currentPage.body.type) {
    //   case expression:
    //
    //     break;
    //   default:
    //
    // }

    // let pageRender = currentPage.map((element, index) => (
    //   switch (element.body.type) {
    //     case sideImage:
    //     return{
    //       <SideImage ... element/>
    //     }
    //   }
    // ));

    return(
      <div className = 'page'>
        { pageRender }
      </div>
    )
  }
}

export default Page;
