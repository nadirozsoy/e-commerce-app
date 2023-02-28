import React, { useEffect, useRef, useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import SearchIcon from '@mui/icons-material/Search'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import { Link } from 'react-router-dom'
import Cart from '../Cart/Cart'
import Typed from 'typed.js'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const [shake, setShake] = useState(false)

  const animate = () => {
    // Button begins to shake
    setShake(true)

    // Buttons stops to shake after 2 seconds
    setTimeout(() => setShake(false), 500)
  }

  const el = useRef(null)
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['RARESTORE'], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 150,
      backSpeed: 150,
      backDelay: 150,
      smartBackspace: true,
      loop: true,
      showCursor: false,
    })

    // Destropying
    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="linkItem">
            <div className="item">
              <img
                src="/img/en.png"
                alt="flag"
              />
              <KeyboardArrowDownIcon />
            </div>
            <div className="item">
              <Link
                className="link"
                to="/products/1"
              >
                USD
              </Link>
              <KeyboardArrowDownIcon />
            </div>
          </div>
          <div className="item">
            <Link
              className="link"
              to="/products/2"
            >
              Men
            </Link>
          </div>
          <div className="item">
            <Link
              className="link"
              to="/products/3"
            >
              Women
            </Link>
          </div>
          <div className="item">
            <Link
              className="link"
              to="/products/4"
            >
              Children
            </Link>
          </div>
          <div className="item">
            <Link
              className="link"
              to="/products/5"
            >
              Accersories
            </Link>
          </div>
        </div>
        <div className="center">
          <Link
            className="link"
            to="/"
            ref={el}
          ></Link>
        </div>
        <div className="right">
          <div className="linkItem">
            <div className="item">
              <Link
                className="link"
                to="/products/6"
              >
                Homepage
              </Link>
            </div>
            <div className="item">
              <Link
                className="link"
                to="/products/7"
              >
                About
              </Link>
            </div>
            <div className="item">
              <Link
                className="link"
                to="/products/8"
              >
                Contact
              </Link>
            </div>
            <div className="item">
              <Link
                className="link"
                to="/products/9"
              >
                Stores
              </Link>
            </div>
          </div>
          <div className="icons">
            <SearchIcon />
            <PersonOutlineIcon />
            <FavoriteBorderIcon />
            <div
              className={shake ? `cardIcon shake` : 'cardIcon'}
              onClick={() => {
                setOpen((open) => !open)
                animate()
              }}
            >
              <ShoppingCartOutlinedIcon />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  )
}

export default Navbar
