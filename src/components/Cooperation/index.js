import React from "react";
import CooperationButtons from "./CooperationButtons";
import CooperationText from "./CooperationText";
import CooperationExtraText from "./CooperationExtraText";
import "./Cooperation.scss";

import Banner from "../Banner/Banner";

import bannerPhoto from "./../../img/Banner/banner.svg";

const Cooperation = () => (
  <>
    <Banner photo={bannerPhoto} />
    <div className="cooperation container">
      <div className="cooperation container_buttons_and_text">
        <CooperationButtons />
        <CooperationText />
      </div>

      <div className="cooperation container_photo"></div>

      <CooperationExtraText />
    </div>
  </>
);

export default Cooperation;

//Karolina Skorupska
