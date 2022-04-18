import React from "react";
import "./Foorter.css";

const Foorter = () => {
  return (
    <div className="my- bg-dark text-white py-3">
      <div>
        <h1>Study Buddy</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 my-auto">
            <h3>Important Links</h3>
            <a href="#services">Services</a>
            <a href="blogs">Blogs</a>
            <a href="login">login</a>
          </div>
          <div className="col-md-6 my-auto">
            <p>All right reserved by Rayhan </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Foorter;
