import React from "react";
import "../style/spinner.css";

export default function LoadingSpinner() {
  return (
    <div className='spinner-container'>
      <div className='loading-spinner'></div>
      <h1>Loading...</h1>
    </div>
  );
}
