import React from "react";
import "./style/client.css";
export default function Client(props) {
  return (
    <div className='client'>
      <img src={props.image} />
      <h1>{props.title}</h1>
    </div>
  );
}
