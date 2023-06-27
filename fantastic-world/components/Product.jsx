import React, { useState, useEffect } from "react";
import "./product.css";
import { api } from "../src/App";
import { useNavigate } from "react-router-dom";

export default function Product() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState(""); // State for selection tag
  const navigate = useNavigate("");



  useEffect(() => {
    if (!localStorage.getItem("token")) {
      alert("Login first");
      navigate("/password");
    }
  }, [localStorage.getItem('token')]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 100 * 1024) {
      setImage(file);
    } else {
      alert("Image size should be less than or equal to 100KB.");
      setImage(null)
    }
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create FormData object to send the data
    const formData = new FormData();
    formData.append("title", title);
    formData.append("productImage", image);

    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    };

    // Make a POST request to the backend using Axios
    api
      .post(`/product/${category}`, formData, config)
      .then(() => {
        alert("Product added successfully");
        setTitle("");
        setImage(null);
        setCategory("");
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
            <option value="stationary">Stationary</option>
            <option value="gift">Gift</option>
            <option value="worship">Worship</option>
            <option value="bangle">Bangle</option>
            <option value="jewellery">Jewellary</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
