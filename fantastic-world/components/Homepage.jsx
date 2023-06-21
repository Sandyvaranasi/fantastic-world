import React from 'react';
import './homepage.css';

export default function Homepage() {
  return (
    <div className="container">
      <h2 className="special-offers">Today's Special Offer !!!</h2>
      <div className="product-details">
        <h3 className="product-title">Golden worked kada</h3>
        <div className="product-info">
          <img
            className="product-image"
            src="https://5.imimg.com/data5/AU/MT/GJ/SELLER-84633020/ladies-gold-kada-500x500.jpg"
            alt="Kada image"
          />
          <div className="details-container">
            <div className="price-container">
              <p className="price">Daily price: ₹150/pair</p>
              <h4 className="offer-price">Today's Offer Price: ₹100/pair</h4>
              <h5 className="hurry-up">Hurry Up!!! Limited Time Offer</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
