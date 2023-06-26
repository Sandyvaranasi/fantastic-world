import React from 'react';
import { useNavigate } from 'react-router-dom';
import './admin.css';

export default function Admin() {
  const navigate = useNavigate();

  return (
    <div className="admin-container">
      <h1 className="admin-welcome">
        Welcome Admin! Thank you for selecting us.
        </h1>
        <h1 className="admin-welcome">
         Please provide your feedback, if any, to:{' '}
        <a href="mailto:youremail@example.com">tripathisn5363@gmail.com</a>
      </h1>
      <div className="admin-buttons">
        <button className="admin-button" onClick={() => navigate('/product')}>
          Add Product
        </button>
        <button className="admin-button" onClick={() => navigate('/offer')}>
          Change Offer
        </button>
      </div>
    </div>
  );
}
