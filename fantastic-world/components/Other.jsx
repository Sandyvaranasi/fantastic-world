import React, { useEffect, useState } from "react";
import "./other.css";
import { useNavigate } from "react-router-dom";
import { api } from "../src/App";

export default function Other() {
  const [currentPage, setCurrentPage] = useState(0);
  const [fullScreenImage, setFullScreenImage] = useState(null);
  const [otherData, setOtherData] = useState([]);
  const itemsPerPage = 3;
  const navigate = useNavigate();

  useEffect(() => {
    api
      .get("/product/orher")
      .then((res) => setOtherData(res.data.data))
      .catch((err) => alert(err.response.data.message));
  }, []);

  const handleNext = () => {
    setCurrentPage((prevPage) =>
      prevPage === Math.ceil(otherData.length / itemsPerPage) - 1
        ? 0
        : prevPage + 1
    );
  };

  const openFullScreenImage = (imageUrl) => {
    setFullScreenImage(imageUrl);
  };

  const startIndex = currentPage * itemsPerPage;
  const visibleItems = otherData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="other-container">
      <h1 className="other-heading">Other Items</h1>
      <p className="other-description">
        "Transform your house into a home with our diverse range of household
        items. Discover practical solutions and stylish decor pieces that
        elevate your living space. From kitchen essentials to bathroom
        accessories, organization solutions to home decor accents, we have
        everything you need to create a functional and inviting environment. Our
        high-quality products are designed to simplify your daily routines and
        enhance the aesthetics of your home. Whether you're looking for sleek
        and modern designs or timeless classics, we offer a wide selection to
        suit your style and preferences. Make your house a reflection of your
        personality and enjoy the comforts of a well-equipped home."
      </p>
      <div className="other-slider">
        <div className="other-cards">
          {visibleItems.map((item) => {
            const base64String = btoa(
              String.fromCharCode(...new Uint8Array(item.image.data))
            );

            return (
              <div className="other-card" key={item.id}>
                <img
                  src={`data:image/png;base64,${base64String}`}
                  alt={item.title}
                  className="other-image"
                  onClick={() =>
                    openFullScreenImage(`data:image/png;base64,${base64String}`)
                  }
                />
                <h2 className="other-title">{item.title}</h2>
              </div>
            );
          })}
        </div>
        <div>
          <button className="next-button" onClick={handleNext}>
            Next
          </button>
          <button className="next-button" onClick={() => navigate("/category")}>
            Categories
          </button>
        </div>
      </div>
      {fullScreenImage && (
        <div
          className="full-screen-overlay"
          onClick={() => setFullScreenImage(null)}
        >
          <img
            src={fullScreenImage}
            alt="Full-Screen other"
            className="full-screen-image"
          />
        </div>
      )}
    </div>
  );
}
