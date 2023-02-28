import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { motion } from 'framer-motion'

const Cart = () => {
  const data = [
    {
      name: 'a',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi reiciendis accusantium illum aperiam porro quam similique libero vero voluptatibus nulla, necessitatibus fuga iusto tempore aliquid eos autem maxime sunt? Repellendus?',
      img: 'https://pixlr.com/images/index/remove-bg.webp',
      price: 123,
    },
    {
      name: 'b',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi reiciendis accusantium illum aperiam porro quam similique libero vero voluptatibus nulla, necessitatibus fuga iusto tempore aliquid eos autem maxime sunt? Repellendus?',
      img: 'https://pixlr.com/images/index/remove-bg.webp',
      price: 123,
    },
    {
      name: 'c',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi reiciendis accusantium illum aperiam porro quam similique libero vero voluptatibus nulla, necessitatibus fuga iusto tempore aliquid eos autem maxime sunt? Repellendus?',
      img: 'https://pixlr.com/images/index/remove-bg.webp',
      price: 123,
    },
    {
      name: 'd',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi reiciendis accusantium illum aperiam porro quam similique libero vero voluptatibus nulla, necessitatibus fuga iusto tempore aliquid eos autem maxime sunt? Repellendus?',
      img: 'https://pixlr.com/images/index/remove-bg.webp',
      price: 123,
    },
  ]

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      className="cart"
    >
      <h2>Products in your cart</h2>
      {data?.map((item) => (
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
            <div className="price">1 x {item.price}</div>
          </div>
          <DeleteOutlineIcon className="delete" />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$123</span>
      </div>
      <button>Proced to checkout</button>
      <span className="reset">Reset Cart</span>
    </motion.div>
  )
}

export default Cart
