import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

export default function () {
  return (
    <div className='Error-Page'>
      <h1>Oops! You seem to be lost.</h1>
      <p>Here are some helpful links:</p>
      <Link to='/' className='homelink'>
        Home
      </Link>
    </div>
  );
}
