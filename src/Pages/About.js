import React, { Fragment } from 'react'
import Container from 'react-bootstrap/Container'
import aboutImg from '../assets/about.jpg'
function About() {
  return (
    <Fragment>
      <div className="about_landing">
        <h2>About Us</h2>
        <h3>Get To Know Us</h3>
      </div>
      <div className="mission pt-4">
        <Container>
          <h2>Our Mission</h2>
          <p>
            Foodera will be the first food management system that combines
            dining out, eating store-bought food, and cooking at home to help
            you find and organize the restaurants, products, and recipes that
            fit your diet and can help you reach your nutrition goals.
          </p>
          <img src={aboutImg} alt=".." />
        </Container>
      </div>
    </Fragment>
  )
}

export default About
