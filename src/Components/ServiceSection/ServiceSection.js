import React, { useEffect, useState } from "react";
import Service from "../Service/Service";

const ServiceSection = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("seviceData.json")
      .then((res) => res.json())
          .then((data) => setServices(data));
  }, []);
  return (
    <div id="services" className="container">
      <h1 className="text-primary py-5">Services</h1>

      <div className="row pb-5">
        {services.map((service) => (
          <Service service={service}></Service>
           
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;
