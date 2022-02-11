import React from "react";
import { Card, Col, Row } from "react-bootstrap";
const Cards = ({ categoria }) => {
  /* <h1>{JSON.stringify(categoria)}</h1> */
  console.log(categoria);
  return (
    <div>
      <Row lg={2}>
      <Col className="m-auto">
        <Card bg="dark" style={{ width: "40rem" }} className=" mt-4">
          <Card.Img variant="top" src={categoria.url} alt="imagen" style={{ height: "400px" }}/>
          <Card.Body>
            <Card.Title>{categoria.title}</Card.Title>
          </Card.Body>
        </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Cards;
