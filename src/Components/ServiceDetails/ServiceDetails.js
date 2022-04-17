import React from "react";
import { Button, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ServiceDetails = () => {
    const { serviceId } = useParams();
    return (
    <div className="container">
      <h1>Selected product</h1>
            <h2>this is checkout root for product : {serviceId }</h2>
    </div>
  );
};

export default ServiceDetails;
