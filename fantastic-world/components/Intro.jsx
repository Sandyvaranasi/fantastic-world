import React, { useEffect, useState } from "react";
import "./intro.css";
import "./homepage.css";
import { useNavigate } from "react-router-dom";
import { api } from "../src/App";

export default function Intro() {
  const navigate = useNavigate();
  const [offerDetails, setOfferDetails] = useState({});

  useEffect(() => {
    api
      .get("/offer")
      .then((res) => {
        setOfferDetails(res.data.data);
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  }, []);

  let base64String;
  if (offerDetails.image) {
            if(localStorage.getItem(offerDetails.title)){
              base64String = localStorage.getItem(offerDetails.title)
            }else{
              base64String = btoa(
                String.fromCharCode(...new Uint8Array(offerDetails.image.data))
              );
              localStorage.setItem(offerDetails.title,base64String)
            }
  }

  return (
    <div className="intro-container">
      <h1>Welcome to Fantastic World</h1>
      <p>Discover exquisite material sold with passion and precision.</p>
      <div className="intro-actions">
        <button className="btn" onClick={() => navigate("/category")}>
          Explore Collections
        </button>
        <a className="contact-link" onClick={() => navigate("/contact")}>
          Contact Us
        </a>
      </div>
      <h2 className="special-offers">Today's Special Offer !!!</h2>
      <div className="product-details">
        <h3 className="product-title">{offerDetails.title}</h3>
        <div className="product-info">
          <img
            className="product-image"
            src={`data:image/png;base64,${base64String}`}
            alt="Offer Image"
          />
          <div className="details-container">
            <div className="price-container">
              <p className="price">Daily price: {offerDetails.price}</p>
              <h4 className="offer-price">
                Today's Offer Price: {offerDetails.offer}
              </h4>
              <h5 className="hurry-up">Hurry Up!!! Limited Time Offer</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="about-section">
        <h2>About Fantastic World</h2>
        <p>
          Fantastic World is a retail establishment that offers a wide range of
          products to cater to various customer needs. It aims to provide a
          convenient one-stop shopping experience by combining different product
          categories under one roof.
        </p>
      </div>
    </div>
  );
}
