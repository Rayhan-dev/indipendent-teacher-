import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const Login = () => {
  let navigate = useNavigate();
  const navigateRegister = () => {
    navigate("/register");
  };
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user , loading] =
    useSignInWithEmailAndPassword(auth);
  let from = location.state?.from?.pathname || "/";
 

  // if (error) {
  //   return (
  //     <div>
  //       <p>Error: {error.message}</p>
  //     </div>
  //   );
  // }
  if (loading) {
    <LoadingSpinner></LoadingSpinner>
  }

  const getEmail = (event) => {
    setEmail(event.target.value);
  };
  const getPass = (event) => {
    setPassword(event.target.value);
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };
  if (user) {
    navigate(from, { replace: true });
  }

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

        <Button variant="primary" type="submit">
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
