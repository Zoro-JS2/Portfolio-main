import React from "react";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";

import NavBar from "./PagesComponents/NavBar";
import Cards from "../Main-card";
//css
import "../style/navigationStyle.css";

//img
import car from "../Images/car.svg";
import boatWater from "../Images/boat.svg";
import airplane from "../Images/air.svg";
import arrow from "../Images/arrow-down.svg";
import storygif from "../Images/Story.gif";
import StoryImg2 from "../Images/programmer2.png";
import gmail from "../Images/gmail.png";
import github from "../Images/github.png";
function Navigationheader() {
  const [counter, setCount] = useState(0);
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [isMousedOver, setMouseOver] = useState(false);
  function handle_change(event) {
    setName(event.target.value);
    setemail(event.target.value + "@gmail.com");
    console.log(event.target.value);
  }

  function handleMouseOver() {
    setMouseOver(!isMousedOver);
  }

  function handle_click(event) {
    alert("We send your message to dema2000g@gmail.com");
    event.preventDefault();
  }
  return (
    <div>
      <NavBar active={true} activeLog={false} />
      <div className='MeInfo'>
        <h1>Gedzyik Dmytro Oleksandrovich</h1>
        <div className='First_block'>
          <div className='intro'>
            <h2>Hello my reader. I very hope you enjoy my web development.</h2>
            <label for='exampleDataList' class='form-label'></label>
            <input
              class='form-control'
              list='datalistOptions'
              id='exampleDataList'
              placeholder='Type to search...'
            />
            <datalist id='datalistOptions'>
              <option value='Projects' id='0' />
              <option value='Portfolio' id='1' />
              <option value='Photos' id='2' />
              <option value='Log-in' id='3' />
            </datalist>
            <h1>Get the rest of the story</h1>
            <Button id='btn-inf2'>
              <a href='#down'>
                <img src={arrow} />
              </a>
            </Button>
          </div>
        </div>
      </div>
      <div className='box'>
        <h3>
          I love to travel and discover new things, so for your attention I
          present excerpts from my life
        </h3>
        <div className='prom-img'>
          <Cards
            img={airplane}
            title='Like flying'
            text="I'm fly on a plane more than 12 times in different countries "
          />
          <Cards
            img={boatWater}
            title='Like swimming'
            text='Only onece I ride on boat'
          />
          <Cards
            img={car}
            title='Like driving'
            text='I have driver licence, and a lot of times I drive on my car'
          />
        </div>
      </div>
      <div className='Context'>
        <h1 id='down'>Story</h1>
        <div className='block1'>
          <h1>
            In college I started learning html+css+Js. It became interesting to
            me and I delved into this course. Also at work, I developed a
            website in React JS.
          </h1>
          <img src={storygif} />
        </div>
        <div className='block2'>
          <img src={StoryImg2} />
          <h1>
            Later I was added to the project for creating mobile applications
            and I took part in it a little. You can see examples of my work in
            the
            <a href='/gallery'>
              <b> gallery</b>
            </a>
            .
          </h1>
        </div>
      </div>
      <div className='Footer'>
        <div className='Social'>
          <h1>Subscribe for me and check new product announcements.</h1>
          <a href='/' className='Social-item' target='_blank'>
            <div className='Social-item-context'>
              <h2>Linked-IN</h2>
              <img src={gmail} />
              <h3>Follow me</h3>
            </div>
          </a>
          <a
            href='https://github.com/Zoro-JS2/'
            className='Social-item'
            target='_blank'
          >
            <div className='Social-item-context'>
              <h2>Git-Hub</h2>
              <img src={github} />
              <h3>Follow me</h3>
            </div>
          </a>
          <a
            href='https://drive.google.com/drive/u/0/my-drive'
            className='Social-item'
            target='_blank'
          >
            <div className='Social-item-context'>
              <h2>Google Drive</h2>
              <img src={gmail} />
              <h3>Follow me</h3>
            </div>
          </a>
        </div>
        <form onSubmit={handle_click} name='user'>
          <div class='mb-3'>
            <label for='exampleFormControlInput1' class='form-label'>
              Email address
            </label>
            <input
              type='email'
              class='form-control'
              id='exampleFormControlInput1'
              placeholder='name@example.com'
            />
          </div>
          <div class='mb-3'>
            <label for='exampleFormControlTextarea1' class='form-label'>
              you can write some text for inform me
            </label>
            <textarea
              class='form-control'
              id='FormControlTextarea1'
              rows='3'
              name='body'
            ></textarea>
          </div>
          <div class='mb-3'>
            <label for='formFileMultiple' class='form-label'>
              Multiple files input example
            </label>
            <input
              class='form-control'
              type='file'
              id='formFileMultiple'
              multiple
            />
          </div>
          <button
            class='btn btn-success'
            className='Accept_btn'
            type='submit'
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOver}
          >
            <a href='mailto:dema2000g@gmail.com?subject=Feedback'>Submit</a>
          </button>
        </form>
      </div>
    </div>
  );
}
export default Navigationheader;
