import React, { Component } from "react";

import Comment from "./Comment";

import HeartImage from "../../img/Articles/Vector.png";
import ThumbUpImage from "../../img/Articles/thumbs-up.png";
import MessageSquareImage from "../../img/Articles/message-square.png";
import ShareImage from "../../img/Articles/share-2.png";
import EditImage from "../../img/Articles/edit-3.png";
import DeleteImage from "../../img/Articles/trash.png";
import AvatarImage from "../../img/Articles/woman-wearing-coat-762020 1.png";

class Article extends Component {
  state = {
    wrapperIsOpen: false,
  };
  wrapperHandler = () => {
    this.setState({ wrapperIsOpen: !this.state.wrapperIsOpen });
  };
  render() {
    const { title, contents, created, author, id } = this.props.article;
    return (
      <div className="article">
        <div className=" article-horizontal-line"></div>
        <div className=" article-content">
          <div className=" article-content-avatar-image">
            <img src={AvatarImage} alt="avatar"></img>
          </div>
          <div className=" article-content-text">
            <div className=" article-content-text-header">
              <div className="article-content-text-header-box">
                <h1>{title}</h1>
                <p>{created}</p>
              </div>

              <img src={HeartImage} alt="heart"></img>
            </div>
            <div className="article-content-text-body-box">
              <div
                className={
                  this.state.wrapperIsOpen
                    ? "article-content-text-body-box-content"
                    : "article-content-text-body-box-content-hidden"
                }
              >
                {contents}
              </div>
              <p
                onClick={this.wrapperHandler}
                className={
                  this.state.wrapperIsOpen
                    ? "article-button-show-more-hidden"
                    : "article-button-show-more"
                }
              >
                Czytaj więcej
              </p>
              <p
                onClick={this.wrapperHandler}
                className={
                  this.state.wrapperIsOpen
                    ? "article-button-hide"
                    : "article-button-hide-hidden"
                }
              >
                Czytaj mniej
              </p>

              <div className="horizontal-line-short"></div>
              <div className="article-content-text-body-box-content-action-box">
                <div className="thumb-up">
                  <img src={ThumbUpImage} alt="thumb up"></img>
                  Doceń
                </div>
                <div className="comment">
                  <img src={MessageSquareImage} alt="message"></img>
                  Skomentuj
                </div>
                <div className="share">
                  <img src={ShareImage} alt="share"></img>
                  Udostępnij
                </div>
                <div className="edit">
                  <img src={EditImage} alt="edit"></img>
                  Edytuj
                </div>
                <div className="delete">
                  <img src={DeleteImage} alt="delete"></img>
                  Usuń
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="article-comments">
          <Comment id={id} />
        </div>
      </div>
    );
  }
}

export default Article;

//Karolina Skorupska
