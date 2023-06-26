import React, { useState, useEffect } from 'react';
import './product.css';
import { api } from '../src/App';
import { useNavigate } from 'react-router-dom';

export default function Product() {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState(''); // State for selection tag
  const navigate = useNavigate('');

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

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create FormData object to send the data
    const formData = new FormData();
    formData.append('title', title);
    formData.append('image', image);
    formData.append('category', category);

    const token = localStorage.getItem('token');
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
    };

    // Make a POST request to the backend using Axios
    api.post('/api/products', formData,config)
      .then((response) => {
        console.log(response.data); // Handle the response as needed
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="product-container">
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            placeholder="Enter the product title"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image</label>
          <input
            type="file"
            id="image"
            onChange={handleImageChange}
            accept="image/*"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            value={category}
            onChange={handleCategoryChange}
            required
          >
            <option value="">Select a category</option>
            <option value="category1">Category 1</option>
            <option value="category2">Category 2</option>
            <option value="category3">Category 3</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
