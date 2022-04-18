import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const navigate = useNavigate();
  const navigateToServiceDetails = (service) => {
    navigate(`/service/${service.name}`);
  };
  return (
    <div className="col-md-4 my-3">
      <CardGroup>
        <Card>
          <Card.Img variant="top" src={service.img} />
          <Card.Body>
            <Card.Title>{service.name}</Card.Title>
            <Card.Text>{service.description}</Card.Text>
            <Card.Title className="text-success">
              {service.price} BDT
            </Card.Title>
          </Card.Body>
          <Card.Link
            onClick={() => navigateToServiceDetails(service)}
            className="btn btn-primary"
          >
            Take the course
          </Card.Link>
        </Card>
      </CardGroup>
    </div>
  );
};

export default Service;
