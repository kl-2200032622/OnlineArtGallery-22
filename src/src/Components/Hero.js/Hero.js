import React from 'react'
import './Hero.css'
import arrow_icon from '../Assests/arrow.png'
import hero_image from '../Assests/hero_image.jpg'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
          <div>
              <h2>Welcome to RD Gallery, where art and creativity come to life in the digital realm. </h2>
               
          </div>
          <div className='hero-latest-btn'>
            <div>Latest Collection</div>
            <img src={arrow_icon} alt="" />
          </div>
        </div>
        <div className='hero-right'>
          <img src={hero_image} alt="" />
        </div>
    </div>
  )
}

export default Hero;