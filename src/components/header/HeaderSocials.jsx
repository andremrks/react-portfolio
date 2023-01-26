import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/andr%C3%A9-marques-858865230/"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillLinkedin />
      </a>
      <a href="https://github.com/andremrks" target="_blank" rel="noreferrer">
        <AiFillGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
