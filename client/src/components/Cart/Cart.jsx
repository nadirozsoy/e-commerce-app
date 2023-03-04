import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem, resetCart } from '../../redux/cartReducer'
import { makeRequest } from '../../makeRequest'
import { loadStripe } from '@stripe/stripe-js'

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

  const stripePromise = loadStripe(
    'pk_test_51MhwfhA2B1ElnZKfFmtF0glVpbJJbw8S5k3e4PhsaMtmG9GiLsdAhMIia85T65zh0i0QoyG7NeIQYvK5zeDpGdt700WTUyG4ej'
  )

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise
      const res = await makeRequest.post('/orders', {
        products,
      })
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      })
    } catch (err) {
      console.log(err)
    }
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
      <button onClick={handlePayment}>Proced to checkout</button>
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
