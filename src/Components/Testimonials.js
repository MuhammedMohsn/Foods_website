import React, { Fragment } from 'react'
import { TestimonialsData } from '../Data/TestimonialsData'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// this component used in home page
function Testimonials() {
  return (
    <Fragment>
      <div className="Testimonials_container">
        <Container className="h-100">
          <div className="w-100 h-75 d-flex align-items-center justify-content-center">
            <Row className="w-100 h-100 d-flex align-items-center justify-content-between">
              <h2 className="text-danger h-25 d-flex align-items-center ">
                Testimonials
              </h2>
              {TestimonialsData.map((item) => {
                let { content, img, name, job } = item
                return (
                  <Col
                    key={Math.random()}
                    xs={10}
                    sm={10}
                    md={3}
                    lg={3}
                    className="h-75 mb-3"
                    style={{ backgroundColor: 'white' }}
                  >
                    <p style={{ color: 'gray' }}>{content}</p>
                    <div className="h-50 d-flex align-items-center justify-content-between">
                      <img
                        src={img}
                        alt={name}
                        style={{
                          borderRadius: '50%',
                          height: '90px',
                          width: '90px',
                        }}
                      />
                      <div className="w-50 info">
                        <h4>{name}</h4>
                        <p>{job}</p>
                      </div>
                    </div>
                  </Col>
                )
              })}
            </Row>
          </div>
        </Container>
      </div>
    </Fragment>
  )
}

export default Testimonials
