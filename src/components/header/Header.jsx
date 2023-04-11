import React from 'react'
import '../../assets/backg.png';
import './Header.css'

const Header = () => {
  return (
    <div className="h_bg">

        <div className="h_title">
            <div className="h_shape">
              <div className="h_shape_ball" />
              <div className="h_shape_line" />
            </div>
            <h1>Find inner peace at home:<span> your sanctuary.</span></h1>
        </div>
    </div>
  )
}

export default Header