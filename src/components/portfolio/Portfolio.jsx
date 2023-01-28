import React from "react";
import PortfolioCard from "./PortfolioCard";
import {
  Beyound,
  Calculador,
  DIO,
  GPT3,
  Hoobank,
  Lesaloon,
  Movieland,
  Mustache,
  PortfoliOld,
  Premium,
  Sara,
  Social,
  Spiderverse,
  Tasty,
} from "../../assets";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>See My Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <PortfolioCard
          image={Sara}
          projectName="Sara Store"
          techs="HTML | CSS | JavaScript"
          gitHubLink="https://github.com/andremrks/sara"
          projectLink="https://andremrks.github.io/sara/"
        />
        <PortfolioCard
          image={Hoobank}
          projectName="Hoobank"
          techs="Tailwind CSS | React"
          gitHubLink="https://github.com/andremrks/hoobank"
          projectLink="https://andremrks.github.io/hoobank/"
        />
        <PortfolioCard
          image={GPT3}
          projectName="GPT-3"
          techs="CSS | React"
          gitHubLink="https://github.com/andremrks/gpt3"
          projectLink="https://andremrks.github.io/gpt3/"
        />
        <PortfolioCard
          image={Movieland}
          projectName="Movieland"
          techs="CSS | React"
          gitHubLink="https://github.com/andremrks/movieland"
          projectLink="https://andremrks.github.io/movieland/"
        />
        <PortfolioCard
          image={Mustache}
          projectName="Mustache Barbershop"
          techs="HTML | Bootstrap"
          gitHubLink="https://github.com/andremrks/mustache-barbershop"
          projectLink="https://andremrks.github.io/mustache-barbershop/"
        />
        <PortfolioCard
          image={Spiderverse}
          projectName="Spiderverse"
          techs="HTML | CSS | JavaScript"
          gitHubLink="https://github.com/andremrks/spiderverse"
          projectLink="https://andremrks.github.io/spiderverse/"
        />
        <PortfolioCard
          image={Calculador}
          projectName="React Calculator"
          techs="CSS | React"
          gitHubLink="https://github.com/andremrks/calculadora"
          projectLink="https://andremrks.github.io/calculadora/"
        />
        <PortfolioCard
          image={DIO}
          projectName="DIO - Clone"
          techs="CSS | React"
          gitHubLink="https://github.com/andremrks/dio-clone"
          projectLink="https://andremrks.github.io/dio-clone/"
        />
        <PortfolioCard
          image={Lesaloon}
          projectName="Le Saloon"
          techs="HTML | CSS | JavaScript"
          gitHubLink="https://github.com/andremrks/le-saloon"
          projectLink="https://andremrks.github.io/le-saloon/"
        />
        <PortfolioCard
          image={Beyound}
          projectName="Beyound Us"
          techs="HTML | CSS | JavaScript"
          gitHubLink="https://github.com/andremrks/beyond-us-blog"
          projectLink="https://andremrks.github.io/beyond-us-blog/"
        />
        <PortfolioCard
          image={Social}
          projectName="My Social Media Links"
          techs="HTML | CSS"
          gitHubLink="https://github.com/andremrks/social-links"
          projectLink="https://andremrks.github.io/social-links/"
        />
        <PortfolioCard
          image={Premium}
          projectName="Premium House"
          techs="HTML | CSS | JavaScript"
          gitHubLink="https://github.com/andremrks/premium-house"
          projectLink="https://andremrks.github.io/premium-house/"
        />
        <PortfolioCard
          image={Tasty}
          projectName="Tasty Restaurant"
          techs="HTML | CSS | JavaScript"
          gitHubLink="https://github.com/andremrks/tasty"
          projectLink="https://andremrks.github.io/tasty/"
        />
        <PortfolioCard
          image={PortfoliOld}
          projectName="My Old Portfolio Page"
          techs="HTML | CSS | JavaScript"
          gitHubLink="https://github.com/andremrks/portfolio"
          projectLink="https://andremrks.github.io/porfolio/"
        />
      </div>
    </section>
  );
};

export default Portfolio;
