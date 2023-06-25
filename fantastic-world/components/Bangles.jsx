import React, { useEffect, useState } from 'react';
import './bangle.css';
import { useNavigate } from 'react-router-dom';
import { api } from '../src/App';

export default function Bangles() {
  const [currentPage, setCurrentPage] = useState(0);
  const [fullScreenImage, setFullScreenImage] = useState(null);
  const [bangleData, setBangleData] = useState([]);
  const itemsPerPage = 3;
  const navigate = useNavigate();

  useEffect(()=>{
    api.get('/product/bangle',)
    .then(res=> setBangleData(res.data.data))
    .catch(err=>alert(err.response.data.message))
  },[]);

  const handleNext = (e) => {
    e.preventDefault();
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
      <p className='bangle-description'>A paragraph is defined as "a group of sentences or a single sentence that forms a unit". Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long.</p>
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
      </div>
      <div>
      <button className="next-button" onClick={handleNext}>Next</button>
      <button className="next-button" onClick={()=>navigate('/category')}>Categories</button>
      </div>
      {fullScreenImage && (
        <div className="full-screen-overlay" onClick={() => setFullScreenImage(null)}>
          <img src={fullScreenImage} alt="Full-Screen bangle" className="full-screen-image" />
        </div>
      )}
    </div>
  );
}

