import React from "react";

import "./style/Cards-style.css";
function Maincard2(props) {
  return (
    <div className='cards-body2'>
      <img src={props.img} />
      <h1>{props.text}</h1>
    </div>
  );
}

export default Maincard2;
