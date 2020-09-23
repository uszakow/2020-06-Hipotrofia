import React, { Component } from "react";

import HeartImage from "../../img/Articles/Vector.png";

class Article extends Component {
  render() {
    return (
      <div className="ArticlesPage article">
        <div className=" article-horizontal-line"></div>
        <div className=" article-content">
          <div className=" article-content-avatar-image"></div>
          <div className=" article-content-text">
            <div className=" article-content-text-header">
              <div className="article-content-text-header-box">
                <h1>Tytuł artytułu</h1>
                <p>Data utworzenia</p>
              </div>

              <img src={HeartImage}></img>
            </div>
            <div className="article-content-text-body-box">
                <div className="article-content-text-body-box-content">treść artykułu blablabla</div>
                <p>Czytaj więcej...</p>

                <p>Czytaj mniej</p>
                <div className="article-content-text-body-box-content-action-box">
                    <div className="hand-up">
                        <img></img>
                        <p>Doceń</p>
                    </div>
                    <div className="comment">
                        <img></img>
                        <p>Skomentuj</p>
                    </div>
                    <div className="share">
                        <img></img>
                        <p>Udostępnij</p>
                    </div>
                    <div className="edit">
                        <img></img>
                        <p>Edit</p>
                    </div>
                    <div className="delete">
                        <img></img>
                        <p>Usuń</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Article;

//Karolina Skorupska
