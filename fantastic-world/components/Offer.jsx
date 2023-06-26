import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './offer.css';
import { useNavigate } from 'react-router-dom';

export default function Offer() {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);
  const [price, setPrice] = useState('');
  const [offer, setOffer] = useState('');
  const navigate = useNavigate('')

  useEffect(()=>{
    if(!localStorage.getItem('token')){
        alert('Login first')
        navigate('/password')
    }
  },[])

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('offerImage', image);
      formData.append('price', price);
      formData.append('offer', offer);

      const token = localStorage.getItem('token');
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.post('/api/offer', formData, config);
      console.log(response.data);

      // Reset form values
      setTitle('');
      setImage(null);
      setPrice('');
      setOffer('');
    } catch (error) {
      console.error(error);
    }
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
