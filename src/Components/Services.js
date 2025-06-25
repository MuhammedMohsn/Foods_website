import React, { Fragment, useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Data } from "../Data/servicesData";
function Services() {
  let [index, setIndex] = useState(0);
  let [filteredData, setFilteredData] = useState(Data[0]);
  // to show specific service data when clicking service filter button and change in index
  useEffect(() => {
    setFilteredData(Data[index]);
  }, [index]);
  return (
    <Fragment>
      <div className="services">
        <Container>
          <h1 className="text-center ">Services</h1>
        </Container>
        <Container>
          {/*service buttons */}
          <Row className="mb-4 w-75 mx-auto">
            <Col xs={12} sm={12} md={6} lg={3} className="mb-3">
              <button
                className={`w-100`}
                onClick={() => {
                  setIndex(0);
                }}
              >
                Receipe Analysis
              </button>
            </Col>
            <Col xs={12} sm={12} md={6} lg={3} className="mb-3">
              <button
                className={`w-100`}
                onClick={() => {
                  setIndex(1);
                }}
              >
                Receipe Managment
              </button>
            </Col>
            <Col xs={12} sm={12} md={6} lg={3} className="mb-3">
              <button
                className={`w-100`}
                onClick={() => {
                  setIndex(2);
                }}
              >
                Meal Planning
              </button>
            </Col>
            <Col xs={12} sm={12} md={6} lg={3} className="mb-3">
              <button
                className={` w-100`}
                onClick={() => {
                  setIndex(3);
                }}
              >
                Shopable Receipes
              </button>
            </Col>
          </Row>
          <Row>
            <Col
              xs={12}
              sm={12}
              md={5}
              className="d-flex align-items-center justify-content-center"
            >
              <img
                src={filteredData.img}
                className="h-75 w-75 service_img"
                alt="......."
              />
            </Col>
            <Col
              xs={12}
              sm={12}
              md={7}
              className="d-flex align-items-center justify-content-center flex-column"
            >
              <h2 className="text-center">{filteredData.title}</h2>
              <p>{filteredData.content}</p>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
}

export default Services;
