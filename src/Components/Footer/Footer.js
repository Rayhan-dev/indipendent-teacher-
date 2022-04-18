import React from "react";
import { Link } from "react-router-dom";
import './Footer.css'

const Footer = () => {
  return (
    <div className="my- bg-dark text-white py-3">
      <div>
        <h1>Study Buddy</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 my-auto">
            <h3>Important Links</h3>
            <Link className="link-item" to={'/blog'}>Blogs</Link>
            <Link className="link-item" to={'/login'}>login</Link>
          </div>
          <div className="col-md-6 my-auto">
            <p>All right reserved by Rayhan </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
