import React from "react";
import Banner from "../Banner/Banner";
import ServiceSection from "../ServiceSection/ServiceSection";
import Testimonials from "../Tesimonials/Testimonials";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <ServiceSection></ServiceSection>
      <Testimonials></Testimonials>
    </div>
  );
};

export default HomePage;
