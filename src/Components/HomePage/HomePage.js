import React from "react";
import Banner from "../Banner/Banner";
import Foorter from "../Footer/Foorter";
import ServiceSection from "../ServiceSection/ServiceSection";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <ServiceSection></ServiceSection>
      <Foorter></Foorter>
    </div>
  );
};

export default HomePage;
