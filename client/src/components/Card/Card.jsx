import { Link } from 'react-router-dom'
import React from 'react'
import { motion } from 'framer-motion'

const Card = ({ item }) => {
  console.log(item)
  return (
    <Link
      to={`/product/${item.id}`}
      className="link"
    >
      <div className="card">
        <div className="image">
          {item?.attributes.isNew && <span>New Season</span>}
          <img
            src={
              process.env.REACT_APP_API_URL.split('/api').join('') +
              item.attributes?.img?.data?.attributes?.url
            }
            alt=""
            className="mainImg"
          />
          <motion.img
            whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.9 }}
            src={
              process.env.REACT_APP_API_URL.split('/api').join('') +
              item.attributes?.img2?.data?.attributes?.url
            }
            alt=""
            className="secondImg"
          />
        </div>
        <h2>{item?.attributes.title}</h2>
        <div className="prices">
          <h3>${item.oldPrice || item?.attributes.price + 20}</h3>
          <h3>${item?.attributes.price}</h3>
        </div>
      </div>
    </Link>
  )
}

export default Card
