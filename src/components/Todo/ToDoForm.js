import React, { useState, useEffect, useRef } from "react";
import "../style/ToDo.css";
import imgbtn from "../Images/card-list.svg";
function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");
  const [counter, setCounter] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    if (input === "") {
      alert("Please enter any text");
    }
    setCounter(counter + 1);
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 255),
      text: input,
    });

    setInput("");
  };
  const [hidden, setHidden] = useState(true);
  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      {props.edit ? (
        <>
          <input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-input edit'
          />
          <button onClick={handleSubmit} className='todo-button edit'>
            Update
          </button>
        </>
      ) : (
        <>
          <div>
            {!hidden ? (
              <p className='todo-hidden'>
                1 One click to task = Done task <br />2 Double click to task =
                Edit task
              </p>
            ) : null}
            <a
              onClick={() => setHidden((s) => !s)}
              className='todo-instructionText'
            >
              Instruction
            </a>
          </div>
          <input
            placeholder='Add your new ToDo'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
            ref={inputRef}
            disabled={input.length >= 255}
          />

          <button
            onClick={handleSubmit}
            className='todo-button'
            title='Add Item'
          >
            <img src={imgbtn} className='todo-btn-img' />
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
