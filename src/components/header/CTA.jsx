import React from "react";
import CV from "../../assets/CV Andre Marques.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download>
        <button class="button">
          <span class="button_lg">
            <span class="button_sl"></span>
            <span class="button_text">Download CV</span>
          </span>
        </button>
      </a>
    </div>
  );
};

export default CTA;
