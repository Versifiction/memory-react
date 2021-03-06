import * as React from "react";

import Nav from "../../components/molecules/Nav";
import HeaderBanner from "../../components/molecules/HeaderBanner";
import Footer from "../../components/molecules/Footer";
import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <Nav />
      <HeaderBanner />
      <Footer />
    </div>
  );
}

export default Home;
