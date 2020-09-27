import React, { Component } from "react";

import Comment from './Comment';

import HeartImage from "../../img/Articles/Vector.png";
import ThumbUpImage from "../../img/Articles/thumbs-up.png";
import MessageSquareImage from "../../img/Articles/message-square.png";
import ShareImage from "../../img/Articles/share-2.png";
import EditImage from "../../img/Articles/edit-3.png";
import DeleteImage from "../../img/Articles/trash.png";
import AvatarImage from "../../img/Articles/woman-wearing-coat-762020 1.png";


class Article extends Component {
  render() {
    return (
      <div className="article">
        <div className=" article-horizontal-line"></div>
        <div className=" article-content">
          <div className=" article-content-avatar-image">
            <img src={AvatarImage}></img>
          </div>
          <div className=" article-content-text">
            <div className=" article-content-text-header">
              <div className="article-content-text-header-box">
                <h1>Tytuł artykułu</h1>
                <p>Data utworzenia</p>
              </div>

              <img src={HeartImage}></img>
            </div>
            <div className="article-content-text-body-box">
              <div className="article-content-text-body-box-content">
                treść artykułu blablabla
              </div>
              <p>Czytaj więcej</p>

              <p>Czytaj mniej</p>

              <div className="horizontal-line-short"></div>
              <div className="article-content-text-body-box-content-action-box">
                <div className="thumb-up">
                  <img src={ThumbUpImage}></img>
                  Doceń
                </div>
                <div className="comment">
                  <img src={MessageSquareImage}></img>
                  Skomentuj
                </div>
                <div className="share">
                  <img src={ShareImage}></img>
                  Udostępnij
                </div>
                <div className="edit">
                  <img src={EditImage}></img>
                  Edytuj
                </div>
                <div className="delete">
                  <img src={DeleteImage}></img>
                  Usuń
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="article-comments">
        <Comment/>

          



        </div>
      </div>
    );
  }
}

export default Article;

//Karolina Skorupska
