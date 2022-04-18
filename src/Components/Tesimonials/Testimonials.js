import React, { useEffect, useState } from "react";
import Testimonial from "../Testimonial/Testimonial";

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    fetch("testimonial.json")
      .then((res) => res.json())
          .then((data) => setTestimonials(data));
  }, []);
  return (
    <div className="container">
      <h1 className="text-primary py-5">What my previous Subscribers say!</h1>

      <div className="row pb-5">
        {testimonials.map((testimonial) => (
          <Testimonial testimonial={testimonial}></Testimonial>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
