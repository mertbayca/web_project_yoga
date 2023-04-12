import React from 'react'
import './Pricing.css'
import {tick} from '../../assets'
import StripeCheckout from 'react-stripe-checkout'


const Pricing = () => {
  return (
    <div id="pricing" className="price_container">
        <div className="price_zen_gaia">
            <h2>Zen</h2>
            <h6>For beginners who are dipping their toes in yoga.</h6>
            <h1>$2.49/month</h1>
            <ul>
                <li><img src={tick} />Access to over 100 video lessons.</li>
                <li><img src={tick} />Authentic relaxing tea recipes every week!</li>
                <li><img src={tick} />3 hours of meditation music.</li>
                <li><img src={tick} />Be involved in the LotusFocus community!</li>
            </ul>
        </div>
        <div className="price_terra">
            <h2>Terra</h2>
            <h6>For committed yogis.</h6>
            <h1>$8.49/month</h1>
            <ul>
                <li><img src={tick} />Access to all video lessons.</li>
                <li><img src={tick} />Authentic relaxing tea recipes every week!</li>
                <li><img src={tick} />Unlimited meditation music.</li>
                <li><img src={tick} />Be involved in the LotusFocus community!</li>
                <li><img src={tick} />Room design tips and tricks for your yoga space.</li>
                <li><img src={tick} />Personalized incense recommendations.</li>
                <li><img src={tick} />Stress tracker by LotusFocus.</li>
                <li><img src={tick} />Exclusive access to 1 masterclass of your choosing.</li>
            </ul>
        </div>
        <div className="price_zen_gaia">
            <h2>Gaia</h2>
            <h6>For expert yogis, or yogis who want to be experts.</h6>
            <h1>$19.99/month</h1>
            <ul>
                <li><img src={tick} />Everything from previous packages.</li>
                <li><img src={tick} />Exclusive access to every masterclass on LotusFocus.</li>
                <li><img src={tick} />Personalized coaching sessions.</li>
                <li><img src={tick} />Advanced tracking tools and support from experts.</li>
            </ul>
        </div>
    </div>
  )
}

export default Pricing