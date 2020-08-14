import React from "react";
import ButtonsAndText from '../ButtonsAndText/ButtonsAndText';
import CooperationExtraText from "./CooperationExtraText";
import "./Cooperation.scss";

import Banner from "../Banner/Banner";

import bannerPhoto from "../../img/Banner/banner.svg";

const Cooperation = () => (
  <>
    <Banner photo={bannerPhoto} />
    <div className="cooperation container">
      <ButtonsAndText/>

      <div className="cooperation container_photo"></div>

      <CooperationExtraText />
    </div>
  </>
);

export default Cooperation;

//Karolina Skorupska
