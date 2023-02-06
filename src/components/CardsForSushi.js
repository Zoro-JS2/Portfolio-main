import React from "react";
import "./style/Sushi.css";
export default function CardsSushi(props) {
  return (
    <div className='Social_container'>
      <div class='Sushicard'>
        <img src={props.image} class='card-img-top' alt={props.title} />
        <div class='card-body'>
          <h5 class='card-title'>{props.title}</h5>
          <h2 class='cards-filtre'>{props.filtre}</h2>
          <p class='card-text'>{props.text}</p>
          <a href={props.link} class='btn btn-primary' target='_blank'>
            {props.title}
          </a>
        </div>
      </div>
    </div>
  );
}
