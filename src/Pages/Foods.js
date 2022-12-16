import React, { Fragment, useState } from 'react'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'
import CategoryComponent from '../Components/CategoryComponent'
import Allfoods from '../Components/Allfoods'
function Foods() {
  let [searchInput, setSearchInput] = useState('')
  return (
    <Fragment>
      <div className="Foods_landing">
        <h2>All Foods Recipes </h2>
        <h3>Search And Explore Our Food Recipes </h3>
      </div>
      <div className="explore_our_foods">
        <Container>
          <h2 className="text-center h-25">Explore Our Foods</h2>
          <p className="h-75 mx-auto w-75">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
            purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat
            tellus. Far far away, behind the word mountains, far from the
            countries Vokalia and Consonantia, there live the blind texts.
            Separated they live in Bookmarksgrove
          </p>
        </Container>
      </div>
      <div className="search">
        <Container className="h-100">
          <form
            action=""
            method="get"
            className="w-75 h-50 mx-auto d-flex align-items-center justify-content-start"
          >
            <Link to="#">
              <FaSearch />
            </Link>
            <input
              type="search"
              value={searchInput}
              onChange={(e) => {
                setSearchInput(e.target.value)
              }}
              className="w-75 h-100"
              placeholder="Hungry to ..."
            />
          </form>
        </Container>
      </div>
      <CategoryComponent />
      <Allfoods searchInput={searchInput} />
    </Fragment>
  )
}

export default Foods
