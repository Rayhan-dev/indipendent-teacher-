import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Login = () => {
  let navigate = useNavigate();
  const navigateRegister = () => {
    navigate("/register");
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  
  const getEmail = (event) => {
    setEmail(event.target.value);
  };
  const getPass = (event) => {
    setPassword(event.target.value);
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="container my-5">
      <Form onSubmit={handleFormSubmit} className="w-50 mx-auto text-start">
        <h1 className="my-4">Please Login</h1>
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
          onClick={() => signInWithEmailAndPassword(email, password)}
          variant="primary"
          type="submit"
        >
          Login
        </Button>
      </Form>
      <p>
        New to <b>Study-Buddy</b> ?{" "}
        <Link
          to="/register"
          className="text-primary"
          onClick={navigateRegister}
        >
          Register Now
        </Link>
      </p>
    </div>
  );
};

export default Login;
