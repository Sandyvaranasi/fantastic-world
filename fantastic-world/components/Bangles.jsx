import React, { useState } from 'react';
import './bangle.css';
import Navbar from './Navbar';

export default function Bangles() {
  const [currentPage, setCurrentPage] = useState(0);
  const [fullScreenImage, setFullScreenImage] = useState(null);
  const itemsPerPage = 3;

  const bangleData = [
    {
      id: 1,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVsOaVAOen2d_Stl8Tv7p7ex787tZYSrT64A&usqp=CAU',
      title: 'bangle Title 1',
    },
    {
      id: 2,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu8pPahdwqF98-dS3VGUfIWuxIhuNuP7dlgg&usqp=CAU',
      title: 'bangle Title 2',
    },
    {
      id: 3,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1zst6BIkDlfq2bv9BOQwKowAImldvd4GI5w&usqp=CAU',
      title: 'bangle Title 3',
    },
    {
      id: 4,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyGjvP-ZK6X9KfRruDpV6G0X962OlaRC0Q8w&usqp=CAU',
      title: 'bangle Title 4',
    },
    {
      id: 5,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx2qBUZ-x2RhHWyZIRMZCRl5Qq1w6KvP8Zgg&usqp=CAU',
      title: 'bangle Title 5',
    },
    {
      id: 6,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8a6dlGUBjmRgbG2S_czW58prgWWY34ejRybfiPS_d5wOIIyrh6i-29Xsc9-_f9wOye9o&usqp=CAU',
      title: 'bangle Title 6',
    },
    {
      id: 7,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXZ0WVVarcItsKQ2u-CZA2S_k1U-VQCkXRgbSzvhU5gIzQjm6G6NVjhjAmgD7cweOEyy0&usqp=CAU',
      title: 'bangle Title 7',
    },
    {
      id: 8,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3RuowkvonYYIpq-5CDd3QlymczhvXYm4lzxyJw4tXjNBuBjzPaR5wgAn9zmYNivD7e6I&usqp=CAU',
      title: 'bangle Title 8',
    },
    {
      id: 9,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHVfoqWvRJR1JjmIR95CkFkd9m6prrHqEJzQ&usqp=CAU',
      title: 'bangle Title 9',
    },
  ];

  const handleNext = () => {
    setCurrentPage((prevPage) => (prevPage === Math.ceil(bangleData.length / itemsPerPage) - 1 ? 0 : prevPage + 1));
  };

  const openFullScreenImage = (imageUrl) => {
    setFullScreenImage(imageUrl);
  };

  const startIndex = currentPage * itemsPerPage;
  const visibleItems = bangleData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="bangle-container">
      <h1 className="bangle-heading">Bangles</h1>
      <p className='bangle-description'>A paragraph is defined as
       “a group of sentences or a single sentence that forms a unit”.
        Length and appearance do not determine whether a section in a paper is a paragraph.
         For instance, in some styles of writing, particularly journalistic styles,
       a paragraph can be just one sentence long.</p>
      <div className="bangle-slider">
        <div className="bangle-cards">
          {visibleItems.map((item) => (
            <div className="bangle-card" key={item.id}>
              <img
                src={item.image}
                alt={item.title}
                className="bangle-image"
                onClick={() => openFullScreenImage(item.image)}
              />
              <h2 className="bangle-title">{item.title}</h2>
            </div>
          ))}
        </div>
        <div className="scroll-arrow" onClick={handleNext}></div>
      </div>
      {fullScreenImage && (
        <div className="full-screen-overlay" onClick={() => setFullScreenImage(null)}>
          <img src={fullScreenImage} alt="Full-Screen bangle" className="full-screen-image" />
        </div>
      )}
    </div>
  );
}

