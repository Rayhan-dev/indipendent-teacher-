import React from "react";
import { Button, Form } from "react-bootstrap";

const Login = () => {
  const getEmail = (event) => {
    console.log(event.target.value);
  };
  const getPass = (event) => {
    console.log(event.target.value);
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="container my-5">
      <Form onSubmit={handleFormSubmit} className="w-50 mx-auto text-start">
        <h1 className="my-4">Please Sign In</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            onBlur={getEmail}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control onBlur={getPass} type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
