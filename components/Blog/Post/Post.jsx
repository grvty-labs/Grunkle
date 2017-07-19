'use strict';
import React, { Component } from 'react';

class Post extends Component {
  render() {
    const formProps = {
      action: '//grvtylabs.us12.list-manage.com/subscribe/post?u=9d3af7886067ec22e1903608a&amp',
      messages: {
        inputPlaceholder: 'Votre email',
        btnLabel: 'Envoyer',
        sending: 'Envoi en cours...',
        success: 'Merci de votre intérêt!',
        error: 'Oops, impossible',
      },
      styles: {
        sending: {
          fontSize: 18,
          color: 'auto',
        },
        success: {
          fontSize: 18,
          color: 'green',
        },
        error: {
          fontSize: 18,
          color: 'red',
        },
      },
    };

    // const Form = ;

    return (
      <div className = 'blog'>
        <div className = 'blog-header'>
          <div className = 'content'>
            <h3>BY: </h3>
            <h2>{ this.props.title }</h2>
          </div>
        </div>
        <div className = 'post-content'>
          <div className = 'left-column'
            dangerouslySetInnerHTML={{ __html: this.props.body }}>
          </div>
          <div className = 'right-column'>
            <h3>Subscribe:</h3>
            <p>Get our freshest content and a list of curated posts every week.</p>

            <form>
              <span>Email:</span>
              <input type = 'email' placeholder = 'stan@mysteryshack.com'></input>
              <div className = 'primary-show'>
                <span>JOIN NEWSLETTER</span>
              </div>
            </form>
            <span>*No spam; we promise</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
