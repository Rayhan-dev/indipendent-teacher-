import { Button } from "bootstrap";
import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  
  return (
    <div className="col-md-4">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={service.img} />
        <Card.Body>
          <Card.Title>{service.name}</Card.Title>
          <Card.Text>
            {service.description}
          </Card.Text>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;
