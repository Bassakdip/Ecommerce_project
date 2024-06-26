import React, { useContext } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import CartContext from "../../Context/CartContext";
export default function ProductPage({ product }) {
  const ctx = useContext(CartContext);
  const AddItemHandler = (e) => {
    e.preventDefault();
    ctx.addItem({ ...product, amount: 1 });
  };
  return (
    <Container fluid="md" style={{ marginTop: "5rem" }}>
      <Row>
        <Col lg="5" sm="5">
          <Card className="d-flex p-2">
            <Card.Img variant="top" src={product.image} alt={product.title} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Subtitle>
                <span>${product.price}</span>
              </Card.Subtitle>
            </Card.Body>
            <Button className="addTocart" onClick={AddItemHandler}>
              Add to cart
            </Button>
          </Card>
        </Col>
        <Col xs="7">
          <Row className="p-1">
            <Col className="p-1 m-1 ">
              <h1>Reviews By our customers</h1>
            </Col>
            <Col xs="12">
              <h4 style={{ color: "green" }}>Aakash</h4>
            </Col>
            <Col className="mb-2">good product must buy</Col>
            <Col xs="12">
              <h4 style={{ color: "green" }}>Raghav</h4>
            </Col>
            <Col className="mb-2 ">good product is ok</Col>
            <Col xs="12">
              <h4 style={{ color: "green" }}>Neel</h4>
            </Col>
            <Col>good quality</Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}