import React from "react";
import "./style/card.css";
function PriceCard(props) {
  return (
    <div className='card_price'>
      <div className='header_price'>
        <h3>{props.plan}</h3>
        <h2>{props.status}</h2>
      </div>

      <div className='price_date'>
        <h1>{props.price}</h1>
        <p>{props.period}</p>
      </div>
      <hr />
      <ul>
        <li>{props.list1}</li>
        <li>{props.list2}</li>
        <li>{props.list3}</li>
        <li>{props.list4}</li>
        <li>{props.list5}</li>
        <li>{props.list6}</li>
        <li>{props.list7}</li>
      </ul>
      <button className='price_btn'>Buy Now</button>
    </div>
  );
}

export default PriceCard;
