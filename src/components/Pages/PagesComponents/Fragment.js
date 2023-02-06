import React from "react";
//css
import "../../style/fragment.css";

//components

function Fragment(props) {
  return (
    <div className='Container_cards'>
      <div className='mini-cards'>
        <img src={props.image} />
        <h1>
          {props.name}
          <br />
          {props.date}
        </h1>
      </div>
      <p>
        Vestibulum ut placerat nisl. Cras sed purus tellus. Pellentesque
        habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Duis posuere nisi sit amet neque finibus vestibulum. Vivamus at
        leo ut turpis posuere molestie. Nullam at turpis nec metus pharetra
        bibendum. Vivamus id urna et leo blandit consequat.
      </p>
    </div>
  );
}

export default Fragment;
