import React from 'react'

const Products = () => {
  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          <input
            type="checkbox"
            value={1}
            id=""
          />
          <label htmlFor="checkbox">hat</label>
          <input
            type="checkbox"
            name=""
            id=""
          />
          <label htmlFor="checkbox">t-shirt</label>
        </div>
        <div className="filterItem">
          <h2>Filter by price</h2>
          <input
            type="range"
            name=""
            id=""
          />
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
        </div>
      </div>
      <div className="right"></div>
    </div>
  )
}

export default Products
