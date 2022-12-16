import React, { Fragment } from "react";
import { Col, Row, Container } from "react-bootstrap";
function Contact() {
  return (
    <Fragment>
      <div className="contact">
        <div className="about_landing mb-4">
          <h2>Don't be shy.</h2>
        </div>
        <div className="contact_form mb-3">
          <Container className="h-100 d-flex align-items-center justify-content-center">
            <form className="h-100 w-75 ">
              <Row className="h-100 w-100">
                <Col xs={12} sm={12} md={6} lg={6} className="mb-3">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-100 h-25 mb-1"
                  />
                  <input
                    type="text"
                    placeholder="Your Phone"
                    className="w-100 h-25 mb-1"
                  />
                  <input
                    type="mail"
                    placeholder="Your E-mail"
                    className="w-100 h-25 mb-1"
                  />
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-100 h-25 mb-1"
                  />
                </Col>
                <Col xs={12} sm={12} md={6} lg={6}>
                  <textarea className="w-100 h-75" placeholder="message" />
                  <div className="w-100 h-25 d-flex align-items-center justify-content-center">
                    <button type="submit" className="w-100 h-75 send_btn">
                      Send
                    </button>
                  </div>
                </Col>
              </Row>
            </form>
          </Container>
        </div>
      </div>
    </Fragment>
  );
}

export default Contact;
