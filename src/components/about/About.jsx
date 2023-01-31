import React from "react";
import Fade from "react-reveal/Fade";
import MeAbout from "../../assets/me-about2.png";
import Card from "../card/Card";
import { FiAward } from "react-icons/fi";
import { FaLaptopCode } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import "./about.css";

const About = () => {
  return (
    <section id="about">
      <Fade left>
        <h5>Some Informations</h5>
        <h2>About Me</h2>

        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={MeAbout} alt="About Me Img" />
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">
              <Card
                icon={<FiAward />}
                title={"Experience"}
                text={"1 Year Developing"}
              />
              <Card
                icon={<FaLaptopCode />}
                title={"Projects"}
                text={"15+ Personal Projects"}
              />
              <Card
                icon={<GiGraduateCap />}
                title={"Education"}
                text={`Front-end Development (DIO)`}
              />
            </div>
            <p>
              I'm just a guy who loves tecnology and dreams a lot, and one of my
              biggest dreams is about one day become a professional Front-end
              Developer.
              <br />
              Since June 2022 I'm working developing applications as It
              Consultant, but I'm just starting!
            </p>
            <a href="#contact" className="btn btn-primary">
              Contact Me
            </a>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default About;
