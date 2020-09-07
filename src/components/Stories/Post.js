import React, { Component } from "react";

import StoriesImages from './StoriesImages';

import ArrowUp from "../../img/Stories/Vector.png";

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
    console.log(this.state.wrapperIsOpen);

    return (
      <div className="stories-post-container">
        <div className="stories-post-horizontal-line"></div>
        <h2 className="stories-post-title">{this.props.title}Tytuł posta</h2>
        <p className="stories-post-date">{this.props.date}05.03.2020</p>

        <div className="stories-post-content">
          <p className="stories-post-content-sample-text">
            {this.props.sampleText}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
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
        <img
          src={ArrowUp}
          alt="arrow up"
          className={
            this.state.wrapperIsOpen
              ? "stories-post-arrow-up"
              : "stories-post-arrow-up-hidden"
          }
          onClick={this.wrapperHandler}
        ></img>
        </div>

          <p
            className={
              this.state.wrapperIsOpen
                ? "stories-post-content-all-text"
                : "stories-post-content-all-text-hidden"
            }
          >
            {this.props.allText}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
        <StoriesImages />
      </div>
    );
  }
}

export default Post;

//Karolina Skorupska
