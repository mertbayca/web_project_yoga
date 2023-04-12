import React from 'react'
import yogirl from '../../assets/yogirl.png'
import leaves from '../../assets/leaves.png'
import './Header.css'

const Header = () => {
  return (
    <div className="h_bg">
      <div className="h_container">
        <div className="h_shape">
          <div className="h_shape_ball" />
          <div className="h_shape_line" />
        </div>
        <div className="h_title">
          <h1>Find inner peace at home:<span> your sanctuary.</span></h1>
          <p>LotusFocus is a yoga app designed to help you create your own personal yoga sanctuary at home. 
            With access to over 400 video lessons covering a wide range of yoga practices, including yoga flows 
            and meditation techniques, you can customize your practice to fit your unique lifestyle. In addition 
            to the video lessons, LotusFocus also provides resources such as meditation music, relaxing tea recipes, 
            room design tips for comfort and yoga, and incense recommendations to enhance your practice. Our mission is to empower you to make your home 
            a place of peace and tranquility, where you can find balance and rejuvenation in the midst of a busy life.</p>
            <h4>Want a free trial? <span>Enter your email below and get <br/> 2 free videos + 1 relaxing tea recipe!</span></h4>
          <div className="h_input"> 
            <input type="email" placeholder="Your Email Address"/>
            <button type="button">Get Free Trial</button>
          </div>
        </div>
        <div className="h_images">
          <img src={yogirl} alt="yoga girl"/>
          <div className="h_img_leaves">
            <img src={leaves} alt="leaves"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header