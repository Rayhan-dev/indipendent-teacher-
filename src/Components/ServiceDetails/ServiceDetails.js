import React from "react";
import { Button} from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const ServiceDetails = () => {
    const { serviceId } = useParams();
    return (
    <div className="container">
      <h1>Selected product</h1>
        <h2>this is checkout root for product : {serviceId}</h2>
        <Link to={"/checkout"}><Button className="btn btn-primary">Proceed to Checkout</Button></Link>
    </div>
  );
};

export default ServiceDetails;
