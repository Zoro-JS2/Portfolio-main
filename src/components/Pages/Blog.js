import React, { useState } from "react";
import "../../Style.css";
const Blog = () => {
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
    alert(name + "Done");
    // console.log({ name });

    event.preventDefault();
  }
  return (
    <div className='container_Blog'>
      <h1>Please input your data</h1>
      <form onSubmit={handle_click} name='user'>
        <input
          name='username'
          onChange={handle_change}
          type='text'
          placeholder='Username?'
          value={name}
        />
        <input
          name='email'
          onChange={handle_change}
          type='text'
          placeholder='test@gmail.com'
          value={email}
          disabled={true}
        />
        <button
          class='btn btn-primary'
          type='submit'
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOver}
        >
          Button
        </button>
      </form>
      <h1>Your name:{h1_Text}</h1>
      <h1>Email: {email}</h1>
    </div>
  );
};

export default Blog;
