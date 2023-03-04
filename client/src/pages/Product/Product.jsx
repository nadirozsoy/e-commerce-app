import React, { useState } from 'react'
import { motion } from 'framer-motion'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import BalanceOutlinedIcon from '@mui/icons-material/BalanceOutlined'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'

const Product = () => {
  const id = useParams().id
  const [selectedImg, setSelectedImg] = useState('img')
  const [quantity, setQuantity] = useState(1)

  const variants = {
    open: { opacity: 1, x: [600, 0, 0] },
    closed: { opacity: 1, x: [600, 0, 0] },
  }
  const [isOpen, setIsOpen] = useState(false)

  const { data, loading, error } = useFetch(`/products/${id}?populate=*`)

  return (
    <div className="product">
      {error ? (
        'Something went wrong!'
      ) : loading ? (
        'loading'
      ) : (
        <>
          {' '}
          <div className="left">
            <div className="images">
              <img
                src={
                  process.env.REACT_APP_API_URL.split('/api').join('') +
                  data?.attributes?.img?.data?.attributes?.url
                }
                alt=""
                onClick={() => {
                  setSelectedImg('img')
                  setIsOpen((isOpen) => !isOpen)
                }}
              />
              <img
                src={
                  process.env.REACT_APP_API_URL.split('/api').join('') +
                  data?.attributes?.img2?.data?.attributes?.url
                }
                alt=""
                onClick={() => {
                  setSelectedImg('img2')
                  setIsOpen((isOpen) => !isOpen)
                }}
              />
            </div>
            <div className="mainImg">
              <motion.img
                animate={isOpen ? 'open' : 'closed'}
                variants={variants}
                src={
                  process.env.REACT_APP_API_URL.split('/api').join('') +
                  data?.attributes?.[selectedImg].data?.attributes?.url
                }
                alt=""
              />
            </div>
          </div>
          <div className="right">
            <h2>{data?.attributes?.title}</h2>
            <span className="price">${data?.attributes?.price}</span>
            <p>{data?.attributes?.desc}</p>
            <div className="quantity">
              <button
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? prev : prev - 1))
                }
              >
                -
              </button>
              {quantity}
              <button onClick={() => setQuantity((post) => post + 1)}>+</button>
            </div>
            <button className="add">
              <AddShoppingCartIcon /> Add to cart
            </button>
            <div className="links">
              <div className="item">
                <FavoriteBorderOutlinedIcon /> Add to wish list
              </div>
              <div className="item">
                <BalanceOutlinedIcon /> Add to compare
              </div>
            </div>
            <div className="info">
              <span>Vendor : Special</span>
              <span>
                Product Type : &nbsp;
                {data?.attributes?.sub_categories?.data?.[0]?.attributes?.title}
              </span>
              <span>Tag : T-Shirt, Women, Top</span>
            </div>
            <hr />
            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Product
