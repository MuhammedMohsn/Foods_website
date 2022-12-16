import React, { Fragment, useState, useEffect, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {useNavigate} from 'react-router-dom'
import { useParams } from "react-router-dom";
import { productsContext } from "../Context/ProductsContext";
import CategoryComponent from "../Components/CategoryComponent";
function Category() {
  let { popularReceipes,setReceipeType,receipeType} = useContext(productsContext);
  let navigate=useNavigate()
  let { categoryName } = useParams();
  let [categoryProducts, setCategoryProducts] = useState([]);
  let filteredData = popularReceipes.filter((product) => {
    return product.cuisines.includes(categoryName);
  });
  // this effect used to display products by filtering popluarReceipes according to change in categoryname
  useEffect(() => {
    setCategoryProducts(filteredData);
  }, [categoryName]);
    // to set type with popular after the component is mounted
  useEffect(() => {
    localStorage.setItem('type', JSON.stringify(receipeType))
  },[receipeType])
  return (
    <Fragment>
      <div className="popular_receipes">
      <div className="about_landing" >
      <h2>{categoryName} Foods Recipes</h2>
      <h3>Explore Our {categoryName} Food Recipes
      </h3></div>
      <br/>
      <CategoryComponent/>
        <Container>
        <Row>
            {categoryProducts.map((product) => {
              let { title, image,id } = product;
              return (
                <Col
                  xs={12}
                  sm={12}
                  md={4}
                  lg={4}
                  key={Math.random()}
                  style={{ padding: "30px" }}
                  className="d-flex align-items-center justify-content-center flex-column"
                >
                  <img src={image} alt="...." className="swiper_img" />
                  <h6 className="text-center">{title}</h6>
                  <button className="view_details_btn" onClick={()=>{navigate(`/foods/${id}`);setReceipeType("popular")}}>View Details</button>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </Fragment>
  );
}

export default Category;
