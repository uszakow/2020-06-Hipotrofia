import React from "react";

import AvatarImage from "../../img/Articles/woman-wearing-coat-762020 1.png";
import SettingsImage from "../../img/Articles/Group 100.png";
import ThumbUpImage from "../../img/Articles/thumbs-up.png";
import MessageSquareImage from "../../img/Articles/message-square.png";

const Comment = () => {
  return (
    <>
      <div className="article-comments-header">
        <b>Odpowiedzi</b> (2)
      </div>

      <div className="article-comments-comment">
        <img className="avatar-image" src={AvatarImage}></img>
        <div className="article-comments-comment-content">
          <div className="article-comments-comment-content-header">
            <h3>Imię nazwisko</h3>
            <img className="settings" src={SettingsImage}></img>
          </div>
          <div className="article-comments-comment-content-text">
            tekst blavlabla
          </div>
          <div className="article-comments-comment-content-action-box">
            <div className="thumb-up">
              <img src={ThumbUpImage}></img>1
            </div>
            <div className="comment">
              <img src={MessageSquareImage}></img>
              Odpowiedź (1)
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comment;
