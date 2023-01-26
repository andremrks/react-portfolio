import React from "react";
import "./card.css";

const Card = ({ icon, title, text }) => {
  return (
    <article className="card">
      <i>{icon}</i>
      <h5>{title}</h5>
      <small>{text}</small>
    </article>
  );
};

export default Card;
