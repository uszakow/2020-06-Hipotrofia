import React from "react";

import Banner from "../Banner/Banner";
import ButtonsAndText from "../ButtonsAndText/ButtonsAndText";
import Post from './Post';
import StoriesImages from './StoriesImages';

import bannerPhoto from "../../img/Banner/banner.svg";


const StoriesPage = (props) => (
  <>
    <Banner photo={bannerPhoto} />
    <div className="stories container">
      <ButtonsAndText />
      <Post 
      // postInformation={postInformation}
      />
      <StoriesImages/>
    </div>
  </>
);

export default StoriesPage;
