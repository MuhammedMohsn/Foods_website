import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
// this component used in foods page
// buttons to filter foods
function CategoryComponent() {
  return (
    <div className="categories">
      <Container className="d-flex justify-content-center">
        {" "}
        <Row className="mb-4 w-75 ">
          <Col xs={12} sm={12} md={6} lg={3} className="mb-3">
            <NavLink to="/category/Italian" className={`w-100`}>
              <button className={`w-100`}>Italian</button>
            </NavLink>
          </Col>
          <Col xs={12} sm={12} md={6} lg={3} className="mb-3">
            <NavLink to="/category/Chinese" className={`w-100`}>
              <button className={`w-100`}>Chinese</button>
            </NavLink>
          </Col>
          <Col xs={12} sm={12} md={6} lg={3} className="mb-3">
            <NavLink to="/category/American" className={`w-100`}>
              <button className={`w-100`}>American</button>
            </NavLink>
          </Col>
          <Col xs={12} sm={12} md={6} lg={3} className="mb-3">
            <NavLink to="/category/African" className={`w-100`}>
              <button className={`w-100`}>African</button>
            </NavLink>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CategoryComponent;
