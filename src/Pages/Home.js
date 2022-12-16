import React, { Fragment } from 'react'
import HomeSlide from '../Components/homeSlider'
import Services from '../Components/Services'
import PopularReceipes from '../Components/PopularReceipes'
import VegetarianReceipes from '../Components/VegetarianReceipes'
import DessertReceeipes from '../Components/DessertReceipes'
import Quote from '../Components/Quote'
import Testimonials from '../Components/Testimonials'
function Home() {
  return (
    <Fragment>
      <HomeSlide />
      <br />
      <Services />
      <PopularReceipes />
      <VegetarianReceipes />
      <DessertReceeipes />
      <Quote />
      <Testimonials />
      <br />
    </Fragment>
  )
}

export default Home
