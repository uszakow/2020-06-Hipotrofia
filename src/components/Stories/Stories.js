import React, { Component } from "react";
import axios from "axios";

import Banner from "../Banner/Banner";
import ButtonsAndText from "../ButtonsAndText/ButtonsAndText";
import Post from "./Post";

import bannerPhoto from "../../img/Banner/banner.svg";

class StoriesPage extends Component {
  state = {
    postsList: [],
  };

  componentDidMount() {
    axios.get("http://localhost:3001/posts")
    .then(res => {
      const postsList = res.data;
      this.setState({ postsList });
    });
  }

  render() {
    
    const {postsList} = this.state;
    
    return (
      <>
        <Banner photo={bannerPhoto} />
        <div className="stories container">
          <ButtonsAndText />
          
          {postsList.map((post, index)=> <Post key={index} post={post}/>)}


          {/* miejsce na pole formularza */}
        </div>
      </>
    );
  }
}

export default StoriesPage;

//Karolina Skorupska
