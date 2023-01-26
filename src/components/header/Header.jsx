import React from "react";
import CTA from "./CTA.jsx";
import ME from "../../assets/me2.png";
import HeaderSocials from "./HeaderSocials.jsx";
import "./header.css";

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello! I'm</h5>
        <h1>André Marques</h1>
        <h5 className="text-ligth">Front-end Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="Me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
