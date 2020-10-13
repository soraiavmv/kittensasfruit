import React from "react";
import "./cards-list.css";
import { Card } from "../cards/card";

export const CardList = (props) => {
  return (
    <div className="cards-list">
      {props.fruits.map((fruit) => (
        <Card key={"fruit" + fruit.id} fruit={fruit}/>
      ))}
    </div>
  );
};
