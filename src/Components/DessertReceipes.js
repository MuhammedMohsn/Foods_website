import React, { Fragment, useState, useEffect, useContext } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Container from 'react-bootstrap/Container'
import { useNavigate } from 'react-router-dom'
import { URL, apiKey } from '../API'
import Get_food_data from '../API'
import { productsContext } from '../Context/ProductsContext'
// this component used in home page
function DessertReceeipes() {
  let { dessertReceipes, setDessertReceipes,receipeType,setReceipeType} = useContext(productsContext)
  let navigate = useNavigate()
  let [loading, setLoading] = useState(true)
  // for getting dessertProducts from API
  useEffect(() => {
    Get_food_data(URL, apiKey, 'dessert')
      .then((data) => {
        let { recipes } = data
        setLoading(false)
        setDessertReceipes(recipes)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [setDessertReceipes])
  // to set the dessert receipes in localStorage because when navigating to different page , state is destroyed
  // to allow us use this state to find food that related to id 
  useEffect(() => {
    localStorage.setItem('dessert_receipes', JSON.stringify(dessertReceipes));
  },[dessertReceipes])
  // to put receipetype in localStorage and use it for specify we filter according to which products
  useEffect(() => {
    localStorage.setItem('type', JSON.stringify(receipeType));},[receipeType])

  if (loading) {
    return <div>loading..............</div>
  }
  return (
    <Fragment>
      <div className="popular_receipes">
        <Container>
          <h1 className="text-center">Dessert Receipes</h1>
          <Swiper
            spaceBetween={50}
            scrollbar={{ draggable: true }}
            slidesPerView={4}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {dessertReceipes.map((product) => {
              let { title, image, id } = product
              return (
                <SwiperSlide
                  key={Math.random()}
                  style={{ padding: '30px' }}
                  className="d-flex align-items-center justify-content-center flex-column"
                >
                  <img src={image} alt="...." className="swiper_img" />
                  <h6 className="text-center">{title}</h6>
                  <button
                    className="view_details_btn"
                    onClick={() => {
                      setReceipeType("dessert")
                      navigate(`/foods/${id}`);
                    }}
                  >
                    View Details
                  </button>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </Container>
      </div>
    </Fragment>
  )
}
export default DessertReceeipes
