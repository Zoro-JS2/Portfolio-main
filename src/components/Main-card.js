import React from "react";

import "./style/Cards-style.css";
function Maincard(props) {
  return (
    <div className='cards-body'>
      <img src={props.img} />
      <h1>{props.title}</h1>
      <p>{props.text}</p>
    </div>
  );
}

export default Maincard;
