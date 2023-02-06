import React from "react";
//css
import "../style/Sushi.css";

// Components
import SushiCards from "../CardsForSushi";
import Categories from "./Categories";
//img
import Sushiimg from "../Images/sushi.png";
import Sus from "../Images/sus1.jpg";
function Sushi() {
  return (
    <div>
      <div className='MainInf'>
        <div className='logo'>
          <div class='Cards_Logo'>
            <div class='row g-0'>
              <div class='image_logo'>
                <img src={Sushiimg} class='img-fluid rounded-start' alt='' />
              </div>
              <div class='col-md-8'>
                <div class='card-body'>
                  <h5 class='header_card-title'>Sushi</h5>
                  <p class='header_card-text'>
                    Hello our visitor. We present Sushi for you. Let see our
                    menu:
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='header_links'>
          <a href='#' class='link-warning'>
            All for Client
          </a>
          <a href='#' class='link-warning'>
            Order and paymet
          </a>
          <a href='#' class='link-warning'>
            Contact
          </a>
        </div>
      </div>
      <div className='Header'>
        <h1>Hits</h1>
        <h1>Sets</h1>
        <h1>Rools</h1>
        <h1>Sushi</h1>
        <h1>Soups</h1>
        <h1>Deserts</h1>
        <h1>Drinks</h1>
        <h1>Pizza</h1>
        <h1 className='Sale'>Sale</h1>
      </div>
      <div className='NavPath'>
        <nav aria-label='breadcrumb'>
          <ol class='breadcrumb'>
            <li class='breadcrumb-item'>
              <a href='/'>Home</a>
            </li>
            <li class='breadcrumb-item active' aria-current='page'>
              Sushi
            </li>
          </ol>
        </nav>
      </div>
      <div className='Context'>
        <h1 className='Main_text'>Sushi</h1>
        <Categories />
        <div className='Context-area'>
          <div className='container_cards'>
            <SushiCards
              image={Sus}
              title='Sushi li-Hi'
              filtre='New'
              text='Sushi have 10inch fish and 10g tree'
            />
            <SushiCards
              image={Sus}
              title='Sushi Bri-Ka-Si'
              filtre='New'
              text='Sushi have 10inch fish and 10g tree'
            />
            <SushiCards
              image={Sus}
              title='Sushi'
              filtre='Traditional'
              text='Sushi have 10inch fish and 10g tree'
            />
            <SushiCards
              image={Sus}
              title='Sushi-Chini'
              filtre='Hot'
              text='Sushi have 10inch fish and 10g tree'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sushi;
