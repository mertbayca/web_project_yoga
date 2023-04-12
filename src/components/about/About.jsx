import React from 'react'
import './About.css'

const About = () => {
  return (
    <div id="About" className="a_bg">
        <div className="a_box">
            <div className="a_box-text">
                <h2>LotusFocus is here to help you make your home your yoga sanctuary.</h2>
                <p>LotusFocus provides you with the tools and resources you need to create a <span className="gaia">daily yoga practice</span> that fits your 
                    unique lifestyle. <br/>With LotusFocus you can practice anytime, anywhere, and choose from a 
                    variety of styles and durations that suit your mood and schedule. Plus, you can <span className="terra">track your progress, set goals, 
                    and connect with a community</span> of like-minded individuals who share your passion for wellness.
                </p>
            </div>
        </div>
        <div className="a_box">
            <div className="a_box-text">
                <h2>Access over 400 video lessons.</h2>
                <p>By downloading the LotusFocus app,
                    you'll gain access to over 400 video lessons covering a wide range of yoga practices, 
                    including <span className="gaia">yoga flows, meditation techniques, breathing exercises, and more.</span> <br/> Of course, 
                    LotusFocus also offers a variety of other resources to enhance your yoga practice at 
                    home; including <span className="terra">meditation music</span> to help you find inner peace and focus during your practice, and <span className="terra">relaxing 
                    tea recipes</span> to sip on afterwards. It also <span className="terra">provides room design tips</span> to create a comfortable and 
                    inspiring space for your yoga practice, and <span className="terra">incense recommendations</span> to further enhance your sensory experience.
                </p>
            </div>
        </div>
    </div>
  )
}

export default About