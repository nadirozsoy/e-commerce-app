import React, { useState } from 'react'
import { motion } from 'framer-motion'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import BalanceOutlinedIcon from '@mui/icons-material/BalanceOutlined'

const Product = () => {
  const images = [
    'https://pixlr.com/images/index/remove-bg.webp',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwSlCWQ7ya9lo_nzm5UN6HMeiLjyUWBID6Nxq0d1hoxLR3Ta17amTCjkvJ-23KVX4Fa-w&usqp=CAU',
  ]
  const [selectedImg, setSelectedImg] = useState(0)
  const [quantity, setQuantity] = useState(1)

  const variants = {
    open: { opacity: 1, x: [600, 0, 0] },
    closed: { opacity: 1, x: [600, 0, 0] },
  }
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img
            src={images[0]}
            alt="img-1"
            onClick={() => {
              setSelectedImg(0)
              setIsOpen((isOpen) => !isOpen)
            }}
          />
          <img
            src={images[1]}
            alt="img-2"
            onClick={() => {
              setSelectedImg(1)
              setIsOpen((isOpen) => !isOpen)
            }}
          />
        </div>
        <div className="mainImg">
          <motion.img
            animate={isOpen ? 'open' : 'closed'}
            variants={variants}
            src={images[selectedImg]}
            alt=""
          />
        </div>
      </div>
      <div className="right">
        <h2>title</h2>
        <span className="price">$199</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab velit aut
          nihil explicabo a amet quibusdam. Sunt numquam iure tempore vel velit
          quia harum esse recusandae molestiae suscipit dicta perferendis iusto
          mollitia, excepturi quas commodi animi voluptatem voluptatibus aliquam
          rerum.
        </p>
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
          <span>Vendor: Polo</span>
          <span>Product Type: T-Shirt</span>
          <span>Tag: T-Shirt, Women, Top</span>
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
    </div>
  )
}

export default Product
