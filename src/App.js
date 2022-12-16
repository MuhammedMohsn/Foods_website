import './App.css'
import React, { Fragment, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter,HashRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Foods from './Pages/Foods'
import Category from './Pages/Category'
import Contact from './Pages/Contact'
import NavbarComponent from './Components/Navbar_Component'
import Footer from './Components/Footer'
import Food from './Pages/Food'
import { productsContext } from './Context/ProductsContext'
function App() {
  // define global states
  // the first 3 states to get data related to type of food
  let [popularReceipes, setPopularReceipes] = useState([])
  let [vegetarianReceipes, setVegetarianReceipes] = useState([])
  let [dessertReceipes, setDessertReceipes] = useState([])
  // type state used for filtering from popular or dessert or vegetarian
  let [receipeType,setReceipeType]=useState("popular")
  return (
    <Fragment>
      <productsContext.Provider
        value={{
          receipeType,
          setReceipeType,
          popularReceipes,
          setPopularReceipes,
          vegetarianReceipes,
          setVegetarianReceipes,
          dessertReceipes,
          setDessertReceipes,
        }}
      >
        <HashRouter>
          <NavbarComponent />
          <br />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:categoryName" element={<Category />} />
            <Route path="/about" element={<About />} />
            <Route path="/foods" element={<Foods />} />
            <Route path="/foods/:food_id" element={<Food />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </HashRouter>
      </productsContext.Provider>
    </Fragment>
  )
}

export default App
