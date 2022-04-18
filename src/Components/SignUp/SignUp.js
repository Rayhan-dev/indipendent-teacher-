import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
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
    navigate("/home")
  };
  // if (error) {
  //     <div>
  //       <p>Error: {error.message}</p>
  //     </div>
  //   ;
  // }
  // if (loading) {
  //   return (
  //     <div class="spinner-border" role="status">
  //       <span class="sr-only"></span>
  //     </div>
  //   );
  // }
  return (
    <div className="container my-5">
      <Form onSubmit={handleFormSubmit} className="w-50 mx-auto text-start">
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
          onClick={() => createUserWithEmailAndPassword(email, password)}
          variant="primary"
          type="submit"
        >
          Submit
        </Button>
      </Form>
      <p>
        Have an account ?{" "}
        <Link to="/login" className="text-primary" onClick={navigateSignIn}>
          Login
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
