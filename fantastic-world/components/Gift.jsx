import React, { useEffect, useState } from "react";
import "./gift.css";
import { useNavigate } from "react-router-dom";
import { api } from "../src/App";

export default function Gift() {
  const [currentPage, setCurrentPage] = useState(0);
  const [fullScreenImage, setFullScreenImage] = useState(null);
  const [giftData, setGiftData] = useState([]);
  const itemsPerPage = 3;
  const navigate = useNavigate();

  useEffect(() => {
    api
      .get("/product/gift")
      .then((res) => setGiftData(res.data.data))
      .catch((err) => alert(err.response.data.message));
  }, []);

  const handleNext = () => {
    setCurrentPage((prevPage) =>
      prevPage === Math.ceil(giftData.length / itemsPerPage) - 1
        ? 0
        : prevPage + 1
    );
  };

  const openFullScreenImage = (imageUrl) => {
    setFullScreenImage(imageUrl);
  };

  const startIndex = currentPage * itemsPerPage;
  const visibleItems = giftData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="gift-container">
      <h1 className="gift-heading">Gift Items</h1>
      <p className="gift-description">
        A paragraph is defined as "a group of sentences or a single sentence
        that forms a unit". Length and appearance do not determine whether a
        section in a paper is a paragraph. For instance, in some styles of
        writing, particularly journalistic styles, a paragraph can be just one
        sentence long.
      </p>
      <div className="gift-slider">
        <div className="gift-cards">
          {visibleItems.map((item) => {
            const base64String = btoa(
              String.fromCharCode(...new Uint8Array(item.image.data))
            );

            return (
              <div className="gift-card" key={item.id}>
                <img
                  src={`data:image/png;base64,${base64String}`}
                  alt={item.title}
                  className="gift-image"
                  onClick={() =>
                    openFullScreenImage(`data:image/png;base64,${base64String}`)
                  }
                />
                <h2 className="gift-title">{item.title}</h2>
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
            alt="Full-Screen gift"
            className="full-screen-image"
          />
        </div>
      )}
    </div>
  );
}
