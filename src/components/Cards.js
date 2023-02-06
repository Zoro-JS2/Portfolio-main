import React from "react";
import "./style/PortfolioStyle.css";
export default function Cards(props) {
  return (
    <div className="Social_container">
      <div class="card">
        <img src={props.image} class="card-img-top" alt={props.title} />
        <div class="card-body">
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text">{props.text}</p>
          <a href={props.link} class="btn btn-primary" target="_blank">
            {props.title}
          </a>
        </div>
      </div>
    </div>
  );
}
