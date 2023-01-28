import React from "react";

const PortfolioCard = ({
  image,
  projectName,
  techs,
  gitHubLink,
  projectLink,
}) => {
  return (
    <div>
      <article className="portfolio__card">
        <div className="portfolio__item-image">
          <img src={image} alt="Project" />
        </div>
        <div className="portfolio__project">
          <h3>{projectName}</h3>
          <p>{techs}</p>
          <div className="portfolio__item-cta">
            <a
              href={gitHubLink}
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Repository
            </a>
            <a
              href={projectLink}
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              The Page
            </a>
          </div>
        </div>
      </article>
    </div>
  );
};

export default PortfolioCard;
