import React, { Fragment, useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { productsContext } from '../Context/ProductsContext'
import { Col, Row, Container } from 'react-bootstrap'
function Food() {
  let { food_id } = useParams()
  let [loading, setLoading] = useState(true)
  let { popularReceipes, setPopularReceipes,dessertReceipes,setDessertReceipes,vegetarianReceipes,setVegetarianReceipes } =useContext(productsContext)
  let [food, setFood] = useState({})
  // the below states used to show specific info about food
  let [ingredients, setIngredients] = useState(true)
  let [information, setInformation] = useState(false)
  let [preparation, setPreparation] = useState(false)
  // activetype state used for adding active class to element
  let [activeType,setActiveType] = useState("")
  let filter = (id) => {
    if (id === 'ingredients') {
      setActiveType("ingredients")
      setIngredients(true)
      setInformation(false)
      setPreparation(false)
    } else if (id === 'preparation') {
      setActiveType("preparation")
      setIngredients(false)
      setInformation(false)
      setPreparation(true)
    } else if (id === 'information') {
      setActiveType("information")
      setIngredients(false)
      setInformation(true)
      setPreparation(false)
    }
  }
  // this effect for getting different product_types from localStorage
  useEffect(() => {
    if (localStorage.getItem('popular_products')) {
      setPopularReceipes(JSON.parse(localStorage.getItem("popular_receipes")))}
    if (localStorage.getItem('vegetarian_products')) {
        setVegetarianReceipes(JSON.parse(localStorage.getItem("vegetarian_receipes")))}
    if (localStorage.getItem('dessert_products')) {
        setDessertReceipes(JSON.parse(localStorage.getItem("dessert_receipes")))}}, [])
  // this effect to specify we will filter from which receipes(products)
  useEffect(() => {
    let target_food;
    if(localStorage.getItem("type")){
      let recipeType=JSON.parse(localStorage.getItem("type"))
      if(recipeType==="popular"){
           target_food = popularReceipes.find((food) => {
               return food.id === parseInt(food_id)
      })
      }
      else if (recipeType==="dessert"){
      target_food = dessertReceipes.find((food) => {
        return food.id === parseInt(food_id)
      })
      }
      else{
      target_food = vegetarianReceipes.find((food) => {
        return food.id === parseInt(food_id)})}
    }
    setFood(target_food)
    setLoading(false)
  }, [food_id])

  if (loading) {
    return <div>loading..............</div>
  }
  if (food) {
    let { title, image, extendedIngredients, instructions, summary } = food
    return (
      <Fragment>
        <div className="meal">
          <Container className="h-100">
            <Row className="h-100 w-100">
              <Col xs={12} sm={12} md={6} lg={6} className="h-100 mb-3">
                <h4 className="w-100">{title}</h4>
                <img src={image} className="h-75 w-100" alt="......." />
              </Col>
              <Col xs={12} sm={12} md={6} lg={6} className="ps-3 h-100">
                <div className="meal_info mb-3 d-flex align-items-center justify-content-between h-25 w-100">
                  <button
                    id="ingredients"
                    onClick={(e) => {
                      filter(e.target.id)
                    }}
                    className={` h-50 filter_btn ${activeType==="ingredients"?"active":""} `}
                  >
                    Ingredients
                  </button>
                  <button
                    id="preparation"
                    onClick={(e) => {
                      filter(e.target.id)
                    }}
                    className={` h-50 filter_btn ${activeType==="preparation"?"active":""} `}
                  >
                    Preparation
                  </button>
                  <button
                    id="information"
                    onClick={(e) => {
                      filter(e.target.id)
                    }}
                    className={` h-50 filter_btn ${activeType==="information"?"active":""} `}>
                    information
                  </button>
                </div>
                <div className="details ">
                  {ingredients && (
                    <ul style={{ paddingLeft: '30px', paddingTop: '10px' }}>
                      {extendedIngredients.map((item) => {
                        let { originalName } = item
                        return (
                          <li key={Math.random()} className="mb-3">
                            {originalName}
                          </li>
                        )
                      })}
                    </ul>
                  )}
                  {preparation && <div dangerouslySetInnerHTML={{"__html": instructions}}/>}
                  {information && <div dangerouslySetInnerHTML={{"__html": summary}}/>}
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Fragment>
    )
  }
  return <div>waiting.........</div>
}

export default Food
