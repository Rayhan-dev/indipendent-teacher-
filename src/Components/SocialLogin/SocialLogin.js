import { Button } from "bootstrap";
import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Navigate, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const SocialLogin = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    const handleSignInWithGoogle = () => {
        signInWithGoogle();
    }
    if (user) {
        navigate('/')
    }
  return (
    <div>
          <button className="btn btn-primary" onClick={handleSignInWithGoogle}>
        <img
          className="mx-3"
          style={{ width: "40px" }}
          src="/images/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
          alt=""
        />
        <span>log In with Google</span>
      </button>
    </div>
  );
};

export default SocialLogin;
