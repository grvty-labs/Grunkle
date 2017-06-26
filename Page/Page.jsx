'use strict';
import React, { Component } from 'react';
import SideImage from '../components/SideImage/SideImage';
import Hero from '../components/Hero/Hero';
import Header from '../components/Header/Hero';
import CenteredText from '../components/CenteredText/CenteredText';
import TextColumn from '../components/TextColumn/TextColumn';
import SideEmbended from '../components/SideEmbended/SideEmbended';
import TeamList from '../components/TeamList/TeamList';
import MasonryComponent from '../components/Masonry/Masonry';
import Post from '../components/Posts/post';
import Roll from '../components/Rolls/roll';

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
