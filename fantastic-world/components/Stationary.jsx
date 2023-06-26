import React, { useEffect, useState } from "react";
import "./stationary.css";
import { useNavigate } from "react-router-dom";
import { api } from "../src/App";

export default function Stationary() {
  const [currentPage, setCurrentPage] = useState(0);
  const [fullScreenImage, setFullScreenImage] = useState(null);
  const [stationaryData, setStationaryData] = useState([]);
  const itemsPerPage = 3;
  const navigate = useNavigate();

  useEffect(() => {
    api
      .get("/product/stationary")
      .then((res) => setStationaryData(res.data.data))
      .catch((err) => alert(err.response.data.message));
  }, []);

  const handleNext = () => {
    setCurrentPage((prevPage) =>
      prevPage === Math.ceil(stationaryData.length / itemsPerPage) - 1
        ? 0
        : prevPage + 1
    );
  };

  const openFullScreenImage = (imageUrl) => {
    setFullScreenImage(imageUrl);
  };

  const startIndex = currentPage * itemsPerPage;
  const visibleItems = stationaryData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="stationary-container">
      <h1 className="stationary-heading">Stationaries</h1>
      <p className="stationary-description">
        A paragraph is defined as “a group of sentences or a single sentence
        that forms a unit”. Length and appearance do not determine whether a
        section in a paper is a paragraph. For instance, in some styles of
        writing, particularly journalistic styles, a paragraph can be just one
        sentence long.
      </p>
      <div className="stationary-slider">
        <div className="stationary-cards">
          {visibleItems.map((item) => {
            const base64String = btoa(
              String.fromCharCode(...new Uint8Array(item.image.data))
            );

            return (
              <div className="stationary-card" key={item.id}>
                <img
                  src={`data:image/png;base64,${base64String}`}
                  alt={item.title}
                  className="stationary-image"
                  onClick={() =>
                    openFullScreenImage(`data:image/png;base64,${base64String}`)
                  }
                />
                <h2 className="stationary-title">{item.title}</h2>
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
            alt="Full-Screen stationary"
            className="full-screen-image"
          />
        </div>
      )}
    </div>
  );
}
