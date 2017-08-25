// @flow
import * as React from 'react';
import SideImage from '../components/SideImage';
import Hero from '../components/Hero';
import Header from '../components/Header';
import CenteredText from '../components/CenteredText';
import Columns from '../components/Columns';
import SideEmbended from '../components/SideEmbedded';
import TeamList from '../components/TeamList';
import MasonryComponent from '../components/Masonry';
// import Post from '../components/Posts/Post';
// import Roll from '../components/Rolls/Roll';
import RichTextField from '../components/RichTextField';
import type { PageComponentProps } from '../flowTypes';

class Page extends React.Component<void, PageComponentProps, void> {
  componentDidMount() {
    document.title = this.props.location.state.title;
  }

  render() {
    const currentPage = this.props.location.state;

    // console.log(currentPage);

    const pageRender = currentPage.body.map((element) => {
      switch (element.type) {
        case 'sideImage':
          return <SideImage key={element.id} {...element} />;
        case 'hero':
          return <Hero key={element.id} {...element} />;
        case 'header':
          return <Header key={element.id} {...element} />;
        case 'centeredText':
          return <CenteredText key={element.id} {...element} />;
        case 'columns':
          return <Columns key={element.id} {...element} />;
        case 'sideEmbed':
          return <SideEmbended key={element.id} {...element} />;
        case 'teamList':
          return <TeamList key={element.id} {...element} />;
        case 'masonry':
          return <MasonryComponent key={element.id} {...element} />;
        case 'richtext':
          return <RichTextField key={element.id} {...element} />;
        default:
          return <div key={element.id} >Component not available</div>;
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
    //    }
    //  }
    // ));

    return (
      <div className='page'>
        { pageRender}
      </div>
    );
  }
}

export default Page;
