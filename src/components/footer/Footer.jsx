import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Logo from "../../assets/logo.png";
import "./footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <a href="#home">
        <img className="footer__logo" src={Logo} alt="Logo" />
      </a>

      <div className="footer__socials">
        <a href="https://github.com/andremrks" target="_blank" rel="noreferrer">
          <AiFillGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/andr%C3%A9-marques-858865230/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin />
        </a>
      </div>

      <div className="footer__copy">
        <small>
          ©{" "}
          <a
            href="https://andremrks.github.io/social-links/"
            target="_blank"
            rel="noreferrer"
          >
            André Marques
          </a>{" "}
          2023
        </small>
      </div>
    </footer>
  );
};

export default Footer;
