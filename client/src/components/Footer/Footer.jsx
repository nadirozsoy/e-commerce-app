import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h2>Categories</h2>
          <Link className="link-2">Women</Link>
          <Link className="link-2">Man</Link>
          <Link className="link-2">Shoes</Link>
          <Link className="link-2">Accersories</Link>
          <Link className="link-2">New Arrivals</Link>
        </div>
        <div className="item">
          <h2>Links</h2>
          <Link className="link-2">FAQ</Link>
          <Link className="link-2">Pages</Link>
          <Link className="link-2">Stores</Link>
          <Link className="link-2">Compare</Link>
          <Link className="link-2">Cookies</Link>
        </div>
        <div className="item">
          <h2>About</h2>
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab velit
            veniam quis. Perferendis laborum esse, beatae ad repellat labore
            velit ab vel cumque assumenda? Beatae sit voluptatum optio qui
            fugiat.
          </span>
        </div>
        <div className="item">
          <h2>Contact</h2>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, sed
            magni. In at accusamus modi officia doloribus facere similique
            ratione laboriosam libero porro tempora dolore debitis consequuntur
            explicabo, adipisci recusandae?
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <div className="logo">Rarestore</div>
          <div className="copyright">
            &copy; Copyright 2023.All Rights Reserved
          </div>
        </div>
        <div className="right">
          <img
            src="/img/payment.png"
            alt="payment"
          />
        </div>
      </div>
    </div>
  )
}

export default Footer
