import * as React from "react";

import Nav from "../../components/molecules/Nav";
import RulesText from "../../components/molecules/RulesText";
import Footer from "../../components/molecules/Footer";
import "./Rules.css";

function Rules() {
  return (
    <div className="Rules">
      <Nav />
      <RulesText />
      <Footer />
    </div>
  );
}

export default Rules;
