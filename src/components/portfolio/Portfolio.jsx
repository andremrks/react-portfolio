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

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>See My Work</h5>
      <h2>Portfolio</h2>

      <Swiper
        className="container portfolio__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={80}
        slidesPerView={2}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <PortfolioCard
            image={Sara}
            projectName="Sara Store"
            techs="HTML | CSS | JavaScript"
            gitHubLink="https://github.com/andremrks/sara"
            projectLink="https://andremrks.github.io/sara/"
          />
        </SwiperSlide>
        <SwiperSlide>
          <PortfolioCard
            image={Hoobank}
            projectName="Hoobank"
            techs="Tailwind CSS | React"
            gitHubLink="https://github.com/andremrks/hoobank"
            projectLink="https://andremrks.github.io/hoobank/"
          />
        </SwiperSlide>
        <SwiperSlide>
          <PortfolioCard
            image={GPT3}
            projectName="GPT-3"
            techs="CSS | React"
            gitHubLink="https://github.com/andremrks/gpt3"
            projectLink="https://andremrks.github.io/gpt3/"
          />
        </SwiperSlide>
        <SwiperSlide>
          <PortfolioCard
            image={Movieland}
            projectName="Movieland"
            techs="CSS | React"
            gitHubLink="https://github.com/andremrks/movieland"
            projectLink="https://andremrks.github.io/movieland/"
          />
        </SwiperSlide>
        <SwiperSlide>
          <PortfolioCard
            image={Mustache}
            projectName="Mustache Barbershop"
            techs="HTML | Bootstrap"
            gitHubLink="https://github.com/andremrks/mustache-barbershop"
            projectLink="https://andremrks.github.io/mustache-barbershop/"
          />
        </SwiperSlide>
        <SwiperSlide>
          <PortfolioCard
            image={Spiderverse}
            projectName="Spiderverse"
            techs="HTML | CSS | JavaScript"
            gitHubLink="https://github.com/andremrks/spiderverse"
            projectLink="https://andremrks.github.io/spiderverse/"
          />
        </SwiperSlide>
        <SwiperSlide>
          <PortfolioCard
            image={Calculador}
            projectName="React Calculator"
            techs="CSS | React"
            gitHubLink="https://github.com/andremrks/calculadora"
            projectLink="https://andremrks.github.io/calculadora/"
          />
        </SwiperSlide>
        <SwiperSlide>
          <PortfolioCard
            image={DIO}
            projectName="DIO - Clone"
            techs="CSS | React"
            gitHubLink="https://github.com/andremrks/dio-clone"
            projectLink="https://andremrks.github.io/dio-clone/"
          />
        </SwiperSlide>
        <SwiperSlide>
          <PortfolioCard
            image={Lesaloon}
            projectName="Le Saloon"
            techs="HTML | CSS | JavaScript"
            gitHubLink="https://github.com/andremrks/le-saloon"
            projectLink="https://andremrks.github.io/le-saloon/"
          />
        </SwiperSlide>
        <SwiperSlide>
          <PortfolioCard
            image={Beyound}
            projectName="Beyound Us"
            techs="HTML | CSS | JavaScript"
            gitHubLink="https://github.com/andremrks/beyond-us-blog"
            projectLink="https://andremrks.github.io/beyond-us-blog/"
          />
        </SwiperSlide>
        <SwiperSlide>
          <PortfolioCard
            image={Social}
            projectName="My Social Media Links"
            techs="HTML | CSS"
            gitHubLink="https://github.com/andremrks/social-links"
            projectLink="https://andremrks.github.io/social-links/"
          />
        </SwiperSlide>
        <SwiperSlide>
          <PortfolioCard
            image={Premium}
            projectName="Premium House"
            techs="HTML | CSS | JavaScript"
            gitHubLink="https://github.com/andremrks/premium-house"
            projectLink="https://andremrks.github.io/premium-house/"
          />
        </SwiperSlide>
        <SwiperSlide>
          <PortfolioCard
            image={Tasty}
            projectName="Tasty Restaurant"
            techs="HTML | CSS | JavaScript"
            gitHubLink="https://github.com/andremrks/tasty"
            projectLink="https://andremrks.github.io/tasty/"
          />
        </SwiperSlide>
        <SwiperSlide>
          <PortfolioCard
            image={PortfoliOld}
            projectName="My Old Portfolio Page"
            techs="HTML | CSS | JavaScript"
            gitHubLink="https://github.com/andremrks/portfolio"
            projectLink="https://andremrks.github.io/porfolio/"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Portfolio;
