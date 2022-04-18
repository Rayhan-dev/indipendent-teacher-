import React from "react";
import { useParams } from "react-router-dom";

const ServiceCheckOut = () => {
    const { serviceName } = useParams();
    return (
    <div style={{minHeight:'75vh'}} className="container">
      <h1>Selected product</h1>
        <h2>this is checkout route for product : <span className="text-primary"> {serviceName}</span></h2>
    </div>
  );
};

export default ServiceCheckOut;
