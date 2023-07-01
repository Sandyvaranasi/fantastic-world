import React, { useEffect, useState } from "react";
import "./worship.css";
import { useNavigate } from "react-router-dom";
import { api } from "../src/App";

export default function Worship() {
  const [currentPage, setCurrentPage] = useState(0);
  const [fullScreenImage, setFullScreenImage] = useState(null);
  const [worshipData, setWorshipData] = useState([]);
  const itemsPerPage = 3;
  const navigate = useNavigate();

  useEffect(() => {
    api
      .get("/product/worship")
      .then((res) => setWorshipData(res.data.data))
      .catch((err) => alert(err.response.data.message));
  }, []);

  const handleNext = () => {
    setCurrentPage((prevPage) =>
      prevPage === Math.ceil(worshipData.length / itemsPerPage) - 1
        ? 0
        : prevPage + 1
    );
  };

  const openFullScreenImage = (imageUrl) => {
    setFullScreenImage(imageUrl);
  };

  const startIndex = currentPage * itemsPerPage;
  const visibleItems = worshipData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="worship-container">
      <h1 className="worship-heading">Pooja Samagri</h1>
      <p className="worship-description">
        "Experience divine bliss and spiritual harmony with our exquisite
        collection of pooja samagri. From sacred incense and fragrant oils to
        beautiful diyas and traditional pooja accessories, we offer a wide range
        of products to enhance your spiritual rituals. Each item is carefully
        selected to ensure purity and authenticity, allowing you to create a
        sacred ambiance for your prayers and ceremonies. Embrace the sacred
        traditions and invoke blessings with our premium pooja samagri. Let the
        divine energy flow through your home as you embark on a journey of
        devotion and enlightenment."
      </p>
      <div className="worship-slider">
        <div className="worship-cards">
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
              <div className="worship-card" key={item.id}>
                <img
                  src={`data:image/png;base64,${base64String}`}
                  alt={item.title}
                  className="worship-image"
                  onClick={() =>
                    openFullScreenImage(`data:image/png;base64,${base64String}`)
                  }
                />
                <h2 className="worship-title">{item.title}</h2>
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
            alt="Full-Screen worship"
            className="full-screen-image"
          />
        </div>
      )}
    </div>
  );
}
