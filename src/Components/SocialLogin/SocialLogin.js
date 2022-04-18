import { Button } from "bootstrap";
import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const SocialLogin = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const handleSignInWithGoogle = () => {
        signInWithGoogle();
  }
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
    if (user) {
      navigate(from, { replace: true });
  }
  let erorrElement;
  if (error) {
    erorrElement= (
      <div>
        <p className="text-danger">Error: {error.message}</p>
      </div>
    );
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
      {erorrElement}
    </div>
  );
};

export default SocialLogin;
