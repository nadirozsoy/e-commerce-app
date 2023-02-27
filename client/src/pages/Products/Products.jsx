import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import List from '../.././components/List/List'

const Products = () => {
  const catId = parseInt(useParams().id)
  console.log(catId)
  const [maxPrice, setMaxPrice] = useState(1000)
  const [sort, setSort] = useState(null)

  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          <div className="inputItem">
            <input
              type="checkbox"
              value={1}
              id="1"
            />
            <label htmlFor="1">Shoes</label>
          </div>
          <div className="inputItem">
            <input
              type="checkbox"
              value={1}
              id="1"
            />
            <label htmlFor="1">Skirts</label>
          </div>
          <div className="inputItem">
            <input
              type="checkbox"
              value={1}
              id="1"
            />
            <label htmlFor="1">Coats</label>
          </div>
        </div>
        <div className="filterItem">
          <h2>Filter by price</h2>
          <div className="inputItem">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input
              type="radio"
              name="price"
              id="asc"
              value="asc"
              onChange={(e) => setSort('asc')}
            />
            <label htmlFor="asc">Price (Lowest First)</label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              name="price"
              id="desc"
              value="desc"
              onChange={(e) => setSort('desc')}
            />
            <label htmlFor="desc">Price (Highest First)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
          className="catImg"
        />
        <List
          catId={catId}
          maxPrice={maxPrice}
          sort={sort}
        />
      </div>
    </div>
  )
}

export default Products
