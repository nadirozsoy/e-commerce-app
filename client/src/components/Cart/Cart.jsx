import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem, resetCart } from '../../redux/cartReducer'

const Cart = () => {
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }

  const products = useSelector((state) => state.cart.products)

  const dispatch = useDispatch()

  const totalPrice = () => {
    let total = 0
    products.forEach((item) => {
      total += item.quantity * item.price
    })
    return total.toFixed(2)
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      className="cart"
    >
      <h2>Products in your cart</h2>
      {products?.map((item) => (
        <div
          key={item.id}
          className="item"
        >
          <img
            src={item.img}
            alt=""
          />
          <div className="details">
            <h3>{item.title}title</h3>
            <p>{item.desc.substring(0, 100)}</p>
            <div className="price">
              {item.quantity} x {item.price}
            </div>
          </div>
          <DeleteOutlineIcon
            className="delete"
            onClick={() => dispatch(removeItem(item.id))}
          />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>${totalPrice()}</span>
      </div>
      <button>Proced to checkout</button>
      <span
        className="reset"
        onClick={() => dispatch(resetCart())}
      >
        Reset Cart
      </span>
    </motion.div>
  )
}

export default Cart
