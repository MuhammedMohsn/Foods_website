import React, { Fragment, useState, useEffect, useContext } from 'react'
import { productsContext } from '../Context/ProductsContext'
import { Container, Row, Col } from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import get_food_data, { URL, apiKey } from '../API'
// this component used in foods page
// this component to show foods based on input search
function Allfoods({ searchInput }) {
  let [loading, setLoading] = useState(true)
  let navigate= useNavigate()
  let { popularReceipes, setPopularReceipes,setReceipeType,receipeType } = useContext(productsContext)
  // to get filteredProducts according to inputSearch
  let filteredProducts = popularReceipes.filter((product) => {
    return product.title.toLowerCase().includes(searchInput.toLowerCase())
  })
  // this effect for getting popularReceipes from API
  useEffect(() => {
   let getData=setTimeout(()=>{
    get_food_data(URL, apiKey,"")
    .then((data) => {
      let { recipes } = data
      setLoading(false)
      setPopularReceipes(recipes)
      setReceipeType("popular")
    })
    .catch((err) => {
      console.log(err)
    })
   },0)
   return ()=>{clearTimeout(getData)}
  }, [setPopularReceipes])
  // to set type with popular after the component is mounted and data fetched
  useEffect(() => {
    localStorage.setItem('type', JSON.stringify(receipeType))
  },[receipeType])
  if (loading) {
    return <div>loading..............</div>
  }
  return (
    <Fragment>
      <div className="popular_receipes">
        <Container>
          <h1 className="text-center">All Foods</h1>
          <Row>
            {filteredProducts
              ? filteredProducts.map((product) => {
                  let { title, image,id } = product
                  return (
                    <Col
                      xs={12}
                      sm={12}
                      md={4}
                      lg={3}
                      key={Math.random()}
                      style={{ padding: '30px' }}
                      className="d-flex align-items-center justify-content-center flex-column"
                    >
                      <img src={image} alt="...." className="swiper_img" />
                      <h6 className="text-center">{title}</h6>
                      <button className="view_details_btn" onClick={()=>{navigate(`/foods/${id}`);setReceipeType("popular")}}>View Details</button>
                    </Col>
                  )
                })
              : popularReceipes.map((product) => {
                  let { title, image ,id} = product
                  return (
                    <Col
                      xs={12}
                      sm={12}
                      md={4}
                      lg={3}
                      key={Math.random()}
                      style={{ padding: '30px' }}
                      className="d-flex align-items-center justify-content-center flex-column"
                    >
                      <img src={image} alt="...." className="swiper_img" />
                      <h6 className="text-center">{title}</h6>
                      <button className="view_details_btn" onClick={()=>{navigate(`/foods/${id}`)}}>View Details</button>
                    </Col>
                  )
                })}
          </Row>
        </Container>
      </div>
    </Fragment>
  )
}

export default Allfoods
