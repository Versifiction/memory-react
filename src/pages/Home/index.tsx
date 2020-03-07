import * as React from "react";

import Nav from "../../components/molecules/Nav";
import Title from "../../components/atoms/Title";
import Button from "../../components/atoms/Button";
import Rules from "../../components/atoms/Rules";
import Footer from "../../components/molecules/Footer";
import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <Nav />
      <Title />
      <Button />
      <Rules />
      <Footer />
    </div>
  );
}

export default Home;
