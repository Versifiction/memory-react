import * as React from "react";

import Title from "../../atoms/Title";
import Buttons from "../../atoms/Buttons";
import "./HeaderBanner.css";

function HeaderBanner() {
  return (
    <div className="HeaderBanner">
      <div className="container">
        <Title />
        <Buttons />
      </div>
    </div>
  );
}

export default HeaderBanner;
