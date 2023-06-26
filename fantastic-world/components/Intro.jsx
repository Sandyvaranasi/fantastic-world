import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './intro.css';
import './homepage.css';
import {useNavigate} from 'react-router-dom';
import { api } from '../src/App';

export default function Intro() {
  const navigate = useNavigate()
  const [offerDetails, setOfferDetails] = useState({});

  useEffect(()=>{
    api.get('/offer')
    .then(res=> {
      console.log();
      setOfferDetails(res.data)
    })
    .catch(error=>{
      console.log(error);
      alert(error.response.data.message)});
  },[])

  
  let base64String;
  if(offerDetails.image){
     base64String = btoa(
      String.fromCharCode(...new Uint8Array(offerDetails.image.data))
    )
  }



  const introAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  const aboutAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 500,
    config: { duration: 1000 },
  });

  return (
    <div className="intro-container">
      <animated.h1 style={introAnimation}>Welcome to Fantastic World</animated.h1>
      <animated.p style={introAnimation}>Discover exquisite jewelry crafted with passion and precision.</animated.p>
      <div className="intro-actions">
        <button className="btn" onClick={()=>navigate('/category')}>Explore Collections</button>
        <a className="contact-link" onClick={()=>navigate('/contact')}>Contact Us</a>
      </div>
        <animated.h2 className="special-offers">Today's Special Offer !!!</animated.h2>
      <animated.div className="product-details">
        <animated.h3 className="product-title">{offerDetails.title}</animated.h3>
        <animated.div className="product-info">
          <animated.img
            className="product-image"
            src= {`data:image/png;base64,${base64String}`}
            alt="Kada image"
          />
          <animated.div className="details-container">
            <animated.div className="price-container">
              <animated.p className="price">Daily price: {offerDetails.price}</animated.p>
              <animated.h4 className="offer-price">Today's Offer Price: {offerDetails.offer}</animated.h4>
              <animated.h5 className="hurry-up">Hurry Up!!! Limited Time Offer</animated.h5>
            </animated.div>
          </animated.div>
        </animated.div>
      </animated.div>
      <animated.div className="about-section" style={aboutAnimation}>
        <animated.h2>About Fantastic World</animated.h2>
        <animated.p>
          Fantastic World is a renowned jewelry store offering a wide range of stunning pieces to enhance your style and elegance.
        </animated.p>
        </animated.div>
    </div>
  );
}
  