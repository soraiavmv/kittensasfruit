import React from "react";
import "./card.css";

export const Card = (props) => (
  <div className="card-container">
    <img
      alt="kitten"
      src={`https://robohash.org/${props.fruit.name}?set=set4&size=180x180`}
    />
    <h2>{props.fruit.name}</h2>
  </div>
);
