import React, { useEffect, useState } from "react";
import "./bangle.css";
import { useNavigate } from "react-router-dom";
import { api } from "../src/App";

export default function Bangles() {
  const [currentPage, setCurrentPage] = useState(0);
  const [fullScreenImage, setFullScreenImage] = useState(null);
  const [bangleData, setBangleData] = useState([]);
  const itemsPerPage = 3;
  const navigate = useNavigate();

  useEffect(() => {
    api
      .get("/product/bangle")
      .then((res) => setBangleData(res.data.data))
      .catch((err) => alert(err.response.data.message));
  }, []);

  const handleNext = (e) => {
    e.preventDefault();
    setCurrentPage((prevPage) =>
      prevPage === Math.ceil(bangleData.length / itemsPerPage) - 1
        ? 0
        : prevPage + 1
    );
  };

  const openFullScreenImage = (imageUrl) => {
    setFullScreenImage(imageUrl);
  };
  const startIndex = currentPage * itemsPerPage;
  const visibleItems = bangleData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="bangle-container">
      <h1 className="bangle-heading">Bangles</h1>
      <p className="bangle-description">
        "Enhance your style with our exquisite bangles. Crafted with precision
        and passion, our collection offers a variety of designs to suit your
        taste. From traditional to modern, our bangles add a touch of elegance
        to any outfit. Discover the perfect accessory to elevate your look.
        Visit our shop and indulge in the timeless charm of our bangles."
      </p>
      <div className="bangle-slider">
        <div className="bangle-cards">
          {visibleItems.map((item) => {
            let base64String;
            if (localStorage.getItem(item.title)) {
              base64String = localStorage.getItem(item.title);
            } else {
              base64String = btoa(
                String.fromCharCode(...new Uint8Array(item.image.data))
              );
              localStorage.setItem(item.title, base64String);
            }
            return (
              <div className="bangle-card" key={item.id}>
                <img
                  src={`data:image/png;base64, ${base64String}`}
                  alt={item.title}
                  className="bangle-image"
                  onClick={() =>
                    openFullScreenImage(`data:image/png;base64,${base64String}`)
                  }
                />
                <h2 className="bangle-title">{item.title}</h2>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <button className="next-button" onClick={handleNext}>
          Next
        </button>
        <button className="next-button" onClick={() => navigate("/category")}>
          Categories
        </button>
      </div>
      {fullScreenImage && (
        <div
          className="full-screen-overlay"
          onClick={() => setFullScreenImage(null)}
        >
          <img
            src={fullScreenImage}
            alt="Full-Screen bangle"
            className="full-screen-image"
          />
        </div>
      )}
    </div>
  );
}
