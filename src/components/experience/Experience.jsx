import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiJavascript1 } from "react-icons/di";
import { SiBootstrap, SiTailwindcss, SiReact } from "react-icons/si";
import "./experience.css";

const Experience = () => {
  return (
    <section id="experience">
      <h5>These Are My Skills</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div>
          <h3>Front-end Development</h3>
          <div className="experience__content">
            <artice className="experience__details">
              <AiFillHtml5 className="experience__details-icons" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </artice>
            <artice className="experience__details">
              <DiCss3 className="experience__details-icons" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </artice>
            <artice className="experience__details">
              <DiJavascript1 className="experience__details-icons" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Beginner</small>
              </div>
            </artice>
            <artice className="experience__details">
              <SiBootstrap className="experience__details-icons" />
              <div>
                <h4>Bootsrap</h4>
                <small className="text-light">Beginner</small>
              </div>
            </artice>
            <artice className="experience__details">
              <SiTailwindcss className="experience__details-icons" />
              <div>
                <h4>Tailwind CSS</h4>
                <small className="text-light">Beginner</small>
              </div>
            </artice>
            <artice className="experience__details">
              <SiReact className="experience__details-icons" />
              <div>
                <h4>React</h4>
                <small className="text-light">Beginner</small>
              </div>
            </artice>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
