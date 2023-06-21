import React from 'react';
import { useSpring, animated } from 'react-spring';
import './intro.css';
import {useNavigate} from 'react-router-dom';

export default function Intro() {
  const navigate = useNavigate()
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
      <animated.div className="about-section" style={aboutAnimation}>
        <animated.h2>About Fantastic World</animated.h2>
        <animated.p>
          Fantastic World is a renowned jewelry store offering a wide range of stunning pieces to enhance your style and elegance.
        </animated.p>
      </animated.div>
    </div>
  );
}
