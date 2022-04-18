import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
  const [sendEmailVerification, sending, varificationError] = useSendEmailVerification(auth);
  const handleSignUp = () => {  
    createUserWithEmailAndPassword(email, password);
      sendEmailVerification();
      alert('Sent email');
  }
  let navigate = useNavigate();
  const navigateSignIn = () => {
    navigate("/login");
  };
  const getName = (event) => {
    console.log(event.target.value);
  };
  const getEmail = (event) => {
    setEmail(event.target.value);
  };
  const getPass = (event) => {
    setPassword(event.target.value);
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    navigate("/");
  };
  let errorElement;
  if (error) {
    errorElement = (
      <div>
        <p className="text-danger">Error: {error.message}</p>
      </div>
    );
  }
  let varifyError;
  if (varificationError) {
    varifyError = (
      <div>
        <p className="text-danger">Error: {varificationError.message}</p>
      </div>
    );
  }
  return (
    <div className="container my-5" style={{minHeight:"65vh"}}>
      <Form onSubmit={handleFormSubmit} className="w-50 mx-auto text-start my-5">
        <h1 className="my-4">Please Sign Up</h1>
        <Form.Group className="mb-3">
          <Form.Control onBlur={getName} type="text" placeholder="Your Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            onBlur={getEmail}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            onBlur={getPass}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Button
          onClick={ handleSignUp }
          variant="primary"
          type="submit"
        >
          sign up
        </Button>
      </Form>
      <p>
        Have an account ?{" "}
        <Link to="/login" className="text-primary" onClick={navigateSignIn}>
          Login
        </Link>
      </p>
      {errorElement}
      {varifyError}
    </div>
  );
};

export default SignUp;
