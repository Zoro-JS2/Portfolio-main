import React from "react";
import { useState, useEffect } from "react";
import AccountImg from "../Images/iconProfile.jpg";
import "../../Style.css";
function Security() {
  const initialValues = { username: "Admin", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
      alert("Log-in is successfully!");
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };
  return (
    <div className='container'>
      <p className='Log-in_title'>LOG-IN</p>
      <div className='userdata'>
        {Object.keys(formErrors).length === 0 && isSubmit ? (
          <div className='message_success'>Successfull</div>
        ) : (
          <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
        )}
      </div>

      <form onSubmit={handleSubmit}>
        <h1>Account Settings</h1>
        <img src={AccountImg} className='account_img' />
        <div className='ui divider'></div>
        <div className='ui_form'>
          <div className='field'>
            <label>Username</label>
            <input
              type='text'
              name='username'
              placeholder='Username'
              value={initialValues.username}
              onChange={handleChange}
              disabled
            />
          </div>
          <p>{formErrors.username}</p>
          <div className='field'>
            <label>Emai___: </label>
            <input
              type='text'
              name='email'
              placeholder='Email'
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>
          <div className='field'>
            <label>Password</label>
            <input
              type='password'
              name='password'
              placeholder='Password'
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.password}</p>
          <button className='fluid ui button blue' id='submit'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Security;
