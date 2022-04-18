import React from "react";
import { Button, Card } from "react-bootstrap";

const Testimonial = ({testimonial}) => {
  return (
    <div className="col-md-4 mx-auto">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={testimonial.img} />
        <Card.Body>
                  <Card.Title>{ testimonial.name }</Card.Title>
          <Card.Text>
                      {
                          testimonial.description
                    }
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Testimonial;
