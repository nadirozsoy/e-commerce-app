import React from "react"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import SearchIcon from '@mui/icons-material/Search'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import { Link } from "react-router-dom"


const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="wrapper">
                <div className="left">
                    <div className="item">
                        <img src="/img/en.png" alt="flag" />
                        <KeyboardArrowDownIcon />
                    </div>
                    <div className="item">
                        <Link className='link' to="/products/1">USD</Link>
                        <KeyboardArrowDownIcon />
                    </div>
                    <div className="item">
                        <Link className='link' to="/products/2">Men</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to="/products/3">Women</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to="/products/4">Children</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to="/products/5">Accersories</Link>
                    </div>
                </div>
                <div className="center">
                    <Link className='link' to="/">RODISTORE</Link>
                </div>
                <div className="right">
                    <div className="item">
                        <Link className='link' to="/products/6">Homepage</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to="/products/7">About</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to="/products/8">Contact</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to="/products/9">Stores</Link>
                    </div>
                    <div className="icons">
                        <SearchIcon />
                        <PersonOutlineIcon />
                        <FavoriteBorderIcon />
                        <div className="cardIcon">
                            <ShoppingCartOutlinedIcon />
                            <span>0</span>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Navbar
