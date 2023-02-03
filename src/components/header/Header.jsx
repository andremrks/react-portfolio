import React from "react";
import Zoom from "react-reveal/Zoom";
import CTA from "./CTA.jsx";
import ME from "../../assets/me2.png";
import HeaderSocials from "./HeaderSocials.jsx";
import "./header.css";

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <Zoom cascade>
          <h5>Hi! I'm</h5>
          <h1>André Marques</h1>
          <h5 className="text-ligth">Front-end Developer</h5>
        </Zoom>
          <CTA />

        <div className="me">
          <img src={ME} alt="Me" />
          <HeaderSocials />
        </div>
      </div>
    </header>
  );
};

export default Header;
