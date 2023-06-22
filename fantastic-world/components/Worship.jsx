import React, { useState } from 'react';
import './worship.css';
import Navbar from './Navbar';

export default function Worship() {
  const [currentPage, setCurrentPage] = useState(0);
  const [fullScreenImage, setFullScreenImage] = useState(null);
  const itemsPerPage = 3;

  const worshipData = [
    {
      id: 1,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVsOaVAOen2d_Stl8Tv7p7ex787tZYSrT64A&usqp=CAU',
      title: 'worship Title 1',
    },
    {
      id: 2,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu8pPahdwqF98-dS3VGUfIWuxIhuNuP7dlgg&usqp=CAU',
      title: 'worship Title 2',
    },
    {
      id: 3,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1zst6BIkDlfq2bv9BOQwKowAImldvd4GI5w&usqp=CAU',
      title: 'worship Title 3',
    },
    {
      id: 4,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyGjvP-ZK6X9KfRruDpV6G0X962OlaRC0Q8w&usqp=CAU',
      title: 'worship Title 4',
    },
    {
      id: 5,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx2qBUZ-x2RhHWyZIRMZCRl5Qq1w6KvP8Zgg&usqp=CAU',
      title: 'worship Title 5',
    },
    {
      id: 6,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8a6dlGUBjmRgbG2S_czW58prgWWY34ejRybfiPS_d5wOIIyrh6i-29Xsc9-_f9wOye9o&usqp=CAU',
      title: 'worship Title 6',
    },
    {
      id: 7,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXZ0WVVarcItsKQ2u-CZA2S_k1U-VQCkXRgbSzvhU5gIzQjm6G6NVjhjAmgD7cweOEyy0&usqp=CAU',
      title: 'worship Title 7',
    },
    {
      id: 8,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3RuowkvonYYIpq-5CDd3QlymczhvXYm4lzxyJw4tXjNBuBjzPaR5wgAn9zmYNivD7e6I&usqp=CAU',
      title: 'worship Title 8',
    },
    {
      id: 9,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHVfoqWvRJR1JjmIR95CkFkd9m6prrHqEJzQ&usqp=CAU',
      title: 'worship Title 9',
    },
  ];

  const handleNext = () => {
    setCurrentPage((prevPage) => (prevPage === Math.ceil(worshipData.length / itemsPerPage) - 1 ? 0 : prevPage + 1));
  };

  const openFullScreenImage = (imageUrl) => {
    setFullScreenImage(imageUrl);
  };

  const startIndex = currentPage * itemsPerPage;
  const visibleItems = worshipData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="worship-container">
      <h1 className="worship-heading">Pooja Samagri</h1>
      <p className='worship-description'>A paragraph is defined as
       “a group of sentences or a single sentence that forms a unit”.
        Length and appearance do not determine whether a section in a paper is a paragraph.
         For instance, in some styles of writing, particularly journalistic styles,
       a paragraph can be just one sentence long.</p>
      <div className="worship-slider">
        <div className="worship-cards">
          {visibleItems.map((item) => (
            <div className="worship-card" key={item.id}>
              <img
                src={item.image}
                alt={item.title}
                className="worship-image"
                onClick={() => openFullScreenImage(item.image)}
              />
              <h2 className="worship-title">{item.title}</h2>
            </div>
          ))}
        </div>
      </div>
      <button className="next-button" onClick={handleNext}>Next</button>
      {fullScreenImage && (
        <div className="full-screen-overlay" onClick={() => setFullScreenImage(null)}>
          <img src={fullScreenImage} alt="Full-Screen worship" className="full-screen-image" />
        </div>
      )}
    </div>
  );
}
