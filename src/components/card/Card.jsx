import React from "react";
import "./card.css";

const Card = ({ icon, title, text }) => {
  return (
    <article className="card">
      <div className="card2">
        <i>{icon}</i>
        <h5>{title}</h5>
        <small>{text}</small>
      </div>
    </article>
  );
};

export default Card;
