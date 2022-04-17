import { Button } from "bootstrap";
import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  return (
    <div className="col-md-4 my-3">
      {/* <Card>
        <Card.Img variant="top" src={service.img} />
        <Card.Body>
          <Card.Title>{service.name}</Card.Title>
          <Card.Text className="text-area" >
            {service.description}
          </Card.Text>
          <Card.Title>{service.price} BDT</Card.Title>
          <a href="#" className="btn btn-primary align-text-bottom">Go somewhere</a>
        </Card.Body>
      </Card> */}
      <CardGroup>
        <Card>
          <Card.Img variant="top" src={service.img} />
          <Card.Body>
            <Card.Title>{service.name}</Card.Title>
            <Card.Text>
              {service.description}
            </Card.Text>
            <Card.Title className="text-success">{service.price} BDT</Card.Title>
          </Card.Body>
          <a className="btn btn-primary">Take the course</a>
        </Card>
      </CardGroup>
    </div>
  );
};

export default Service;
