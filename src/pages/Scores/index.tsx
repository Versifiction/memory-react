import * as React from "react";
import { FormattedMessage } from "react-intl";

import Nav from "../../components/molecules/Nav";
import ScoresText from "../../components/molecules/ScoresText";
import Footer from "../../components/molecules/Footer";
import "./Scores.css";

function Scores() {
  return (
    <div className="Scores">
      <Nav />
      <ScoresText />
      <Footer />
    </div>
  );
}

export default Scores;
