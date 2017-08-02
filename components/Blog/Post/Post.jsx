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
        <div className = 'header'>
          <div className = 'container'>
            <h5>BY: { this.props.author.first_name}</h5>
            <h2>{ this.props.title }</h2>
          </div>
          <div className = 'division-rectangle'></div>
        </div>
        <div className = 'post-content'>
          <div className = 'container'>
            <div className = 'left-column'
              dangerouslySetInnerHTML={{ __html: this.props.body }}>
            </div>
            <div className = 'right-column'>
              <h5>Subscribe:</h5>
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
      </div>
    );
  }
}

export default Post;
