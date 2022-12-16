import img1_slider from '../assets/header1.jpg'
import img2_slider from '../assets/header2.jpg'
import img3_slider from '../assets/header3.jpg'
import React, { Fragment } from 'react'
// this component used in home page
function homeSlider() {
  return (
    <Fragment>
      <div
        id="carouselExampleIndicators"
        style={{ height: '500px' }}
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner h-100 w-100">
          <div className="carousel-item active h-100 w-100">
            <img
              src={img1_slider}
              className="d-block w-100 img-fluid"
              alt="..."
            />
            <div
              className="carousel-caption d-flex flex-column justify-content-center align-items-center"
              style={{ height: '100%', width: '100%' }}
            >
              <h1>The More Good Foods The Better</h1>
              <p className="w-50">
                We're always developing new recipes and creating new products to
                share with you.
              </p>
            </div>
          </div>
          <div className="carousel-item h-100">
            <img src={img2_slider} className="d-block w-100" alt="..." />
            <div
              className="carousel-caption d-flex  flex-column  align-items-center justify-content-center flex-column"
              style={{ height: '100%', width: '100%' }}
            >
              <h1>DIPS WORTH DIVING INTO.</h1>
              <p className="w-50">
                Always made with highest quality ingredients for the freshest
                flavor for dips that will keep you coming back for more.
              </p>
            </div>
          </div>
          <div className="carousel-item h-100">
            <img src={img3_slider} className="d-block w-100" alt="..." />
            <div
              className="carousel-caption d-flex flex-column  align-items-center justify-content-center"
              style={{ height: '100%', width: '100%' }}
            >
              <h1>GOOD TASTE MADE SIMPLE</h1>
              <p className="w-50">
                Fresh, high-quality ingredients are combined to create a blend
                of Hass avocados, tomatoes, onions, garlic, and fresh lime
                juice. made pure and simple.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev "
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next "
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </Fragment>
  )
}
export default homeSlider
