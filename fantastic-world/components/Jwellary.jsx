import React, { useEffect, useState } from "react";
import "./jwellary.css";
import { useNavigate } from "react-router-dom";
import { api } from "../src/App";

export default function Jewelry() {
  const [currentPage, setCurrentPage] = useState(0);
  const [fullScreenImage, setFullScreenImage] = useState(null);
  const [jewelryData, setJewelryData] = useState([]);
  const itemsPerPage = 3;
  const navigate = useNavigate();

  useEffect(() => {
    api
      .get("/product/jewelry")
      .then((res) => setJewelryData(res.data.data))
      .catch((err) => alert(err.response.data.message));
  }, []);

  const handleNext = () => {
    setCurrentPage((prevPage) =>
      prevPage === Math.ceil(jewelryData.length / itemsPerPage) - 1
        ? 0
        : prevPage + 1
    );
  };

  const openFullScreenImage = (imageUrl) => {
    setFullScreenImage(imageUrl);
  };

  const startIndex = currentPage * itemsPerPage;
  const visibleItems = jewelryData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="jewelry-container">
      <h1 className="jewelry-heading">Jewelries</h1>
      <p className="jewelry-description">
        Jewelry has been historically used as a form of currency, wealth
        storage, and status symbol. Overall, jewelry represents a blend of
        artistry, craftsmanship, and personal expression. It holds cultural,
        emotional, and aesthetic significance, making it a cherished and
        enduring form of adornment throughout history and across different
        societies.
      </p>
      <div className="jewelry-slider">
        <div className="jewelry-cards">
          {visibleItems.map((item) => {
            const base64String = btoa(
              String.fromCharCode(...new Uint8Array(item.image.data))
            );

            return (
              <div className="jewelry-card" key={item.id}>
                <img
                  src={`data:image/png;base64,${base64String}`}
                  alt={item.title}
                  className="jewelry-image"
                  onClick={() =>
                    openFullScreenImage(`data:image/png;base64,${base64String}`)
                  }
                />
                <h2 className="jewelry-title">{item.title}</h2>
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
            alt="Full-Screen jewelry"
            className="full-screen-image"
          />
        </div>
      )}
    </div>
  );
}
