import { Link } from 'react-router-dom'
import React from 'react'

const Card = ({ item }) => {
  return (
    <Link to={`/product/${item.id}`}>
      <div className="card">
        <div className="image">
          {item.isNew && <span>New Season</span>}
          <img
            src=""
            alt=""
            className="mainImg"
          />
          <img
            src=""
            alt=""
            className="secondImg"
          />
          <h2>{item.title}</h2>
          <div className="prices">
            <h3>${item.oldPrice}</h3>
            <h3>${item.price}</h3>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Card
