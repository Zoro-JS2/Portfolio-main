import React from "react";
import { useState, useEffect } from "react";
//css
import "../style/Projects.css";

import Laughtimg from "../Images/emoji-laughing.svg";
import Calculator from "./PagesComponents/Calculator";
function Projects() {
  const [counter, setCount] = useState(0);
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [h1_Text, setHeading] = useState("");
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
    setHeading(name);
    setemail(email);
    alert("Hello " + name);
    // console.log({ name });

    event.preventDefault();
  }
  //Sorting
  let numbers1 = [4, 2, 5, 1, 3];
  let numbers2 = [4, 2, 5, 1, 3];
  numbers2.sort(compareNumbers);
  function compareNumbers(a, b) {
    return a - b;
  }
  const [hidden, setHidden] = useState(true);

  return (
    <div className='Projects_container'>
      <h1>
        Hello, here you can see my project and my knowledge with <b>React.js</b>
        <br />
        <i>
          Sorry for my CSS <img src={Laughtimg} id='laught-img' />
        </i>
      </h1>
      <div className='Projects_place'>
        <div className='Project_cards'>
          <div class='card'>
            <h5 class='card-header'>Sorting</h5>
            <div class='card-body'>
              <p class='card-text'>Unsort massive: {numbers1.join(",")}</p>
              <p class='card-text'>Sorted massive: {numbers2.join(",")}</p>
            </div>
          </div>
          <div class='card'>
            <h5 class='card-header'>Counter</h5>
            <div class='card-body'>
              <h5 class='card-title'>You have {counter}</h5>
              <p class='card-text'>Нou can add and subtract</p>
            </div>
            <div className='btn-Group_counter'>
              <button onClick={() => setCount(counter - 1)}>-1</button>
              <button onClick={() => setCount(counter + 1)}>+1</button>
            </div>
          </div>
          <div class='card'>
            <h5 class='card-header'>Hello Alert</h5>
            <div class='card-body'>
              <h5 class='card-title'>Input your name</h5>
              <form onSubmit={handle_click} name='user'>
                <input
                  className='inp_name'
                  name='username'
                  onChange={handle_change}
                  type='text'
                  placeholder='Username?'
                  value={name}
                />
                <button
                  className='Accept_btn'
                  type='submit'
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOver}
                >
                  Accept
                </button>
              </form>
            </div>
          </div>
          <div class='card'>
            <h5 class='card-header'>To-Do App</h5>
            <div class='card-body'>
              <h5 class='card-title'>App for create some todo</h5>
              <p class='card-text'>
                You can create activity, edit cards and remove
              </p>
              <a href='/todo' class='btn btn-primary'>
                To-Do
              </a>
            </div>
          </div>
          <div class='card'>
            <h5 class='card-header'>Calculator</h5>
            <div class='card-body'>
              <Calculator />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
