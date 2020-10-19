import React, { Component } from "react";

import StoriesImages from "./StoriesImages";


import "./Stories.scss";

class Post extends Component {
  state = {
    wrapperIsOpen: false,
  };
  wrapperHandler = () => {
    this.setState({
      wrapperIsOpen: !this.state.wrapperIsOpen,
    });
  };

  render() {
    // console.log(this.state.wrapperIsOpen);

    const { title, created, contents}=this.props.post;

    return (
      <div className="stories-post-container">
        <div className="stories-post-horizontal-line"></div>
        <h2 className="stories-post-title">{title}</h2>
        <p className="stories-post-date">{created}</p>

        <div className="stories-post-content">
          <p
            className={
              this.state.wrapperIsOpen
                ? "stories-post-content-all-text"
                : "stories-post-content-all-text-hidden"
            }
          >
            {contents} 
            
          </p>
          <div
            className={
              this.state.wrapperIsOpen
                ? " stories-post-button-show-more-hidden"
                : "stories-post-button-show-more"
            }
            onClick={this.wrapperHandler}
          >
            Czytaj więcej
          </div>

          <div className="stories-arrow-box">
            <div
              className={
                this.state.wrapperIsOpen
                  ? "stories-post-arrow-up"
                  : "stories-post-arrow-up-hidden"
              }
              onClick={this.wrapperHandler}
            >Zwiń tekst</div>
          </div>
        </div>
        <StoriesImages />
      </div>
    );
  }
}

export default Post;

//Karolina Skorupska
