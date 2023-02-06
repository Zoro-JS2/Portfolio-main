import React from "react";

//css
import "../style/Gallery.css";

//img
import img1 from "../Images/sea1.jpeg";
function Galery() {
  return (
    <div>
      <h1>Gallery2</h1>
      <div className='gallery'>
        <img src={img1} />
        <img src={img1} />
        <img src={img1} />
        <img src={img1} />
        <img src={img1} />
        <img src={img1} />
        <img src={img1} />
        <img src={img1} />
        <img src={img1} />
        <img src={img1} />
        <img src={img1} />
        <img src={img1} />
        <img src={img1} />
        <img src={img1} />
        <img src={img1} />
      </div>
      <nav aria-label='Show Galerry' className='gallery-nav'>
        <ul class='pagination'>
          <li class='page-item '>
            <a class='page-link'>Previous</a>
          </li>
          <li class='page-item '>
            <a class='page-link' href='/gallery'>
              1
            </a>
          </li>
          <li class='page-item active ' aria-current='page'>
            <a class='page-link' href='/gallery2'>
              2
            </a>
          </li>
          <li class='page-item'>
            <a class='page-link' href='/#3'>
              3
            </a>
          </li>
          <li class='page-item'>
            <a class='page-link' href='/#3'>
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Galery;
