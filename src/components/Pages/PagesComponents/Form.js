import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import "../../style/Form.css";
import Button from "react-bootstrap/Button";
export default function Forma() {
  const [isSubmit, setIsSubmit] = useState(false);
  const handleSubmit = (e) => {
    alert("Success");
    e.preventDefault();
    setIsSubmit(true);
  };
  return (
    <Form className='form'>
      <h1>FeedBack</h1>
      <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
        <Form.Label>Email address</Form.Label>
        <Form.Control type='email' placeholder='name@example.com' />
      </Form.Group>
      <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
        <Form.Label>Textarea</Form.Label>
        <Form.Control as='textarea' rows={4} placeholder='Input some text...' />
      </Form.Group>
      <Button variant='success' onClick={handleSubmit}>
        Success
      </Button>
    </Form>
  );
}
