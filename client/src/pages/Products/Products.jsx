import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import List from '../.././components/List/List'
import { motion } from 'framer-motion'
import useFetch from '../../hooks/useFetch'

const Products = () => {
  const catId = parseInt(useParams().id)
  const [maxPrice, setMaxPrice] = useState(1000)
  const [sort, setSort] = useState(null)
  const [selectedSubCats, setSelectedSubCats] = useState([])

  function template({ rotate, x }) {
    return `rotate(${rotate}) translateX(${x})`
  }

  const { data, loading, error } = useFetch(
    `/sub-categories?/[filters][categories][id][$eq]=${catId}`
  )

  const handleChange = (e) => {
    const value = e.target.value
    const isChecked = e.target.checked

    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    )
  }

  return (
    <motion.div
      transformTemplate={template}
      animate={{ rotate: 360 }}
      style={{ rotate: 0, x: '0' }}
      className="products"
    >
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          {data?.map((item) => (
            <div
              key={item.id}
              className="inputItem"
            >
              <input
                type="checkbox"
                value={item.id}
                id={item.id}
                onChange={handleChange}
              />
              <label htmlFor={item.id}>{item?.attributes.title}</label>
            </div>
          ))}
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
          subCats={selectedSubCats}
        />
      </div>
    </motion.div>
  )
}

export default Products
