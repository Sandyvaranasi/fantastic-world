import React, { useEffect, useState } from "react";
import "./offer.css";
import { useNavigate } from "react-router-dom";
import { api } from "../src/App";

export default function Offer() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [price, setPrice] = useState("");
  const [offer, setOffer] = useState("");
  const navigate = useNavigate("");

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      alert("Login first");
      navigate("/password");
    }
  }, [localStorage.getItem("token")]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleOfferChange = (e) => {
    setOffer(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("offerImage", image);
    formData.append("price", price);
    formData.append("offer", offer);

    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    };

    api
      .post("/offer", formData, config)
      .then(() => {
        setTitle("");
        setImage(null);
        setPrice("");
        setOffer("");
        alert("Offer changed successfully");
      })

      .catch((error) => {
        if (
          error.response.data.message == "jwt expired" ||
          error.response.data.message == "jwt malformed" ||
          error.response.data.message == "invalid signature"
        ) {
          localStorage.clear();
        }
        alert(error.response.data.message);
      });
  };

  return (
    <div className="offer-container">
      <h1 className="offer-heading">Add Offer</h1>
      <form onSubmit={handleSubmit} className="offer-form">
        <div className="form-group">
          <label htmlFor="title" className="form-label">
            Title:
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="image" className="form-label">
            Image:
          </label>
          <input
            type="file"
            id="image"
            onChange={handleImageChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="price" className="form-label">
            Price:
          </label>
          <input
            type="text"
            id="price"
            value={price}
            onChange={handlePriceChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="offer" className="form-label">
            Offer:
          </label>
          <input
            type="text"
            id="offer"
            value={offer}
            onChange={handleOfferChange}
            className="form-input"
            required
          />
        </div>
        <button type="submit" className="form-button">
          Submit
        </button>
      </form>
    </div>
  );
}
