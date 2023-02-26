import React, { useState } from 'react'
import WestOutlinedIcon from '@mui/icons-material/WestOutlined'
import EastOutlinedIcon from '@mui/icons-material/EastOutlined'

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const data = [
    'https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600',
  ]

  const handleClick = (way) => {
    way === 'prevSlide'
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < 2 ? currentSlide + 1 : 0)
  }

  return (
    <div className="slider">
      <div
        className="container"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <img
          src={data[0]}
          alt="img-1"
        />
        <img
          src={data[1]}
          alt="img-2"
        />
        <img
          src={data[2]}
          alt="img-3"
        />
      </div>
      <div className="icons">
        <div
          className="icon"
          onClick={() => handleClick('prevSlide')}
        >
          <WestOutlinedIcon />
        </div>
        <div
          className="icon"
          onClick={() => handleClick()}
        >
          <EastOutlinedIcon />
        </div>
      </div>
    </div>
  )
}

export default Slider
