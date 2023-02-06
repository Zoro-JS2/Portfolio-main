import React from "react";

import "./style/card.css";
export default function Card(props) {
  return (
    <div className='card_web'>
      <img src={props.img} />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <p className='link'>{props.link} </p>
    </div>
  );
}
