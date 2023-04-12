import React, {useState} from 'react'
import './Pricing.css'
import {tick} from '../../assets'
import StripeCheckout from 'react-stripe-checkout';


const Pricing = () => {
  
  const [product, setProduct] = useState({
    name: 'LotusFocus Subscription',
    price: 1,
  });

  const [token, setToken] = useState(null);

  const handleToken = (token) => {
    console.log(token);
    setToken(token);
  };

  const handleSubscription = (price) => {
    setProduct({ ...product, price });
  };

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
            <StripeCheckout
                stripeKey="pk_test_51MwBmCCG7m6MlhJbXzKR63tdMlHk7qbmVUpGUkKCizOV7mfe20HWMbAtUxD1Tf8vhLmeDrCaRTcxEJQTBPKPha7L00Sx7XPhFc"
                token={handleToken}
                amount="249"
                name={product.name}
                description="Zen subscription plan"
            >
                <button onClick={() => handleSubscription(249)}>Subscribe Now</button>
            </StripeCheckout>
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
            <StripeCheckout
                stripeKey="pk_test_51MwBmCCG7m6MlhJbXzKR63tdMlHk7qbmVUpGUkKCizOV7mfe20HWMbAtUxD1Tf8vhLmeDrCaRTcxEJQTBPKPha7L00Sx7XPhFc"
                token={handleToken}
                amount="849"
                name={product.name}
                description="Terra subscription plan"
            >
                <button onClick={() => handleSubscription(849)}>Subscribe Now</button>
            </StripeCheckout>
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
            <StripeCheckout
                stripeKey="pk_test_51MwBmCCG7m6MlhJbXzKR63tdMlHk7qbmVUpGUkKCizOV7mfe20HWMbAtUxD1Tf8vhLmeDrCaRTcxEJQTBPKPha7L00Sx7XPhFc"
                token={handleToken}
                amount="1999"
                name={product.name}
                description="Gaia subscription plan"
            >
                <button onClick={() => handleSubscription(1999)}>Subscribe Now</button>
            </StripeCheckout>
        </div>
    </div>
  )
}

export default Pricing