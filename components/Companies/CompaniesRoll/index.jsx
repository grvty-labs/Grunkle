// @flow
import * as React from 'react';

class CompaniesRoll extends React.Component {
  componentDidMount() {
    document.title = this.props.title;
  }

  render() {
    const {description, posts, subtitle, title, toPage} = this.props;
    const miniPost = posts.map((element, index) => (
      <div
        className='mini-post' key={index}
        onClick={() => toPage(element.id, element.url)}
        role='link' tabIndex={0}
      >
        <h5>{element.subtitle}</h5>
        <h2>{element.title}</h2>
      </div>
    ));

    return (
      <div className='companies-roll'>
        <div className='header'>
          <div className='container'>
            <h5>{subtitle}</h5>
            <h2>{title}</h2>
            <div
              className='description'
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>
        </div>
        <div className='roll'>
          { miniPost }
        </div>
      </div>
    );
  }
}

export default CompaniesRoll;
