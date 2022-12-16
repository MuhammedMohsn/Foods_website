import React, { Fragment, useState, useEffect,useContext } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Container from 'react-bootstrap/Container'
import { URL, apiKey } from '../API'
import Get_food_data from '../API'
import {useNavigate} from "react-router-dom"
import {productsContext} from '../Context/ProductsContext'
// this component used in home page
function VegetarianReceipes() {
  let navigate= useNavigate()
  let [loading, setLoading] = useState(true)
  let {vegetarianReceipes,setVegetarianReceipes,setReceipeType,receipeType}=useContext(productsContext)
  // to get vegetarianProducts from API
  useEffect(() => {
    Get_food_data(URL, apiKey, 'vegetarian')
      .then((data) => {
        let { recipes } = data
        setLoading(false)
        setVegetarianReceipes(recipes)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [setVegetarianReceipes])
  // to set the vegetarian receipes in localStorage because when navigating to different page , state is destroyed
  // to allow us use this state to find food that related to id 
  useEffect(() => {
    localStorage.setItem('vegetarian_receipes', JSON.stringify(vegetarianReceipes));
  },[vegetarianReceipes])
  // to put receipetype in localStorage and use it for specify we filter according to which products
  useEffect(() => {
    localStorage.setItem('type', JSON.stringify(receipeType));},[receipeType])
  if (loading) {
    return <div>loading..............</div>
  }
  return (
    <Fragment>
      <div className="vegetarian_receipes">
        <Container>
          <h1 className="text-center">Vegetarian Receipes</h1>
          <Swiper
            spaceBetween={50}
            slidesPerView={4}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            {vegetarianReceipes.map((product) => {
              let { title, image,id } = product
              return (
                <SwiperSlide
                  key={Math.random()}
                  style={{ padding: '30px' }}
                  className="d-flex align-items-center justify-content-center flex-column"
                >
                  <img src={image} alt="...." className="swiper_img" />
                  <h6 className="text-center">{title}</h6>
                  <button className="view_details_btn" onClick={()=>{setReceipeType("vegetarian");navigate(`/foods/${id}`);}}>View Details</button>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </Container>
      </div>
    </Fragment>
  )
}

export default VegetarianReceipes
