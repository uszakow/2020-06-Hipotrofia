import React from "react";
import CooperationButtons from "./CooperationButtons";
import CooperationText from "./CooperationText";
import CooperationExtraText from "./CooperationExtraText";
import "./Cooperation.scss";

import RollercosterImg from "../../img/Cooperation/roller-coaster-3605743_1920 1.png";

const Cooperation = () => (
  <div className="cooperation_container">
    <div className="cooperation_container_buttons_and_text">
      <CooperationButtons />
      <CooperationText />
    </div>

    <div className="cooperation_container_photo">
      <h2>Rozpocznij współpracę z NAMI!!!</h2>
    </div>

    <CooperationExtraText />
  </div>
);

export default Cooperation;

//Karolina Skorupska
