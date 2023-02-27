import React from 'react'
import { Link } from 'react-router-dom'

const Categories = () => {
  return (
    <div className="categories">
      <div className="item">
        <img
          src="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <Link
          className="link button-link"
          to="/products/1"
        >
          Sale
        </Link>
      </div>
      <div className="item">
        <img
          src="https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <Link
          className="link button-link"
          to="/products/1"
        >
          New Season
        </Link>
      </div>
      <div className="item">
        <img
          src="https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <Link
          className="link button-link"
          to="/products/1"
        >
          Men
        </Link>
      </div>
      <div className="item">
        <img
          src="https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <Link
          className="link button-link"
          to="/products/1"
        >
          Accersories
        </Link>
      </div>
      <div className="item">
        <img
          src="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <Link
          className="link button-link"
          to="/products/1"
        >
          Women
        </Link>
      </div>
      <div className="item">
        <img
          src="https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <Link
          className="link button-link"
          to="/products/1"
        >
          Shoes
        </Link>
      </div>
    </div>
  )
}

export default Categories
