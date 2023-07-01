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
        "Find the perfect gift for every occasion at our shop. Our gift items
        are carefully curated to bring joy and delight to your loved ones. From
        unique home decor pieces to personalized treasures, we have something
        for everyone. Celebrate special moments with our thoughtfully selected
        gifts that convey your love and appreciation. Make memories
        unforgettable with our exceptional gift collection."
      </p>
      <div className="gift-slider">
        <div className="gift-cards">
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
