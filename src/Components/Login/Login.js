import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import SocialLogin from "../SocialLogin/SocialLogin";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  let navigate = useNavigate();
  const navigateRegister = () => {
    navigate("/register");
  };
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user , loading,error] =
    useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, ResetError] = useSendPasswordResetEmail(
      auth
    );
  let from = location.state?.from?.pathname || "/";
  
 
  let loginError;
  if (error) {
    loginError= (
      <div>
        <p className="text-danger">Error: {error.message}</p>
      </div>
    );
  }
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
  const handleResetPass = () => {
    sendPasswordResetEmail(email);
    toast("Sending Email !")
  }
  if (user) {
    navigate(from, { replace: true });
  }

  return (
    <div className="container my-5" style={{minHeight:"65vh"}}>
      <Form onSubmit={handleFormSubmit} className="w-50 mx-auto text-start my-5">
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
      {loginError}
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
      <p>
        Forgot Password? <b>Reset your Password Now</b> {" "}
        <button
          style={{
            display: "block",
            backgroundColor: "transparent",
            border:"none"
          }}
          to="/register"
          className="text-primary mx-auto"
          onClick={handleResetPass}
          
        >
          Reset Password
        </button>
      </p>
      
      <SocialLogin></SocialLogin>
      <ToastContainer />
    </div>
  );
};

export default Login;
