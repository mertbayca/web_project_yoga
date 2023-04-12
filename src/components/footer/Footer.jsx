import React from 'react'
import {linkedin} from '../../assets'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer_bg">
        <div className="left-side">
            <p>LotusFocus</p>
            <p>A Project by Mert Bayça</p>
        </div>
        <div className="right-side">
            <p>All rights reserved.</p>
            <a href="https://www.linkedin.com/in/mert-bayca/"><img src={linkedin} alt="LinkedIn"/>  LinkedIn</a>
        </div>
    </div>
  )
}

export default Footer