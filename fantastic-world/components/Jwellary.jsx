  import React, { useEffect, useState } from 'react';
import './jwellary.css';
import { useNavigate } from 'react-router-dom';
import { api } from '../src/App';

export default function Jewelry() {
  const [currentPage, setCurrentPage] = useState(0);
  const [fullScreenImage, setFullScreenImage] = useState(null);
  const [jewelryData, setJewelryData] = useState([]);
  const itemsPerPage = 3;
  const navigate = useNavigate();

  useEffect(()=>{
    api.get('/product/jewelry')
    .then((res)=>setJewelryData(res.data.data))
    .catch(err=>alert(err.response.data.message))
  },[]);
  
  const handleNext = () => {
    setCurrentPage((prevPage) => (prevPage === Math.ceil(jewelryData.length / itemsPerPage) - 1 ? 0 : prevPage + 1));
  };

  const openFullScreenImage = (imageUrl) => {
    setFullScreenImage(imageUrl);
  };

  const startIndex = currentPage * itemsPerPage;
  const visibleItems = jewelryData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="jewelry-container">
      <h1 className="jewelry-heading">Jewelries</h1>
      <p className='jewelry-description'>A paragraph is defined as "a group of sentences or a single sentence that forms a unit". Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long.</p>
      <div className="jewelry-slider">
        <div className="jewelry-cards">
          {visibleItems.map((item) => (
            <div className="jewelry-card" key={item.id}>
              <img
                src={item.image}
                alt={item.title}
                className="jewelry-image"
                onClick={() => openFullScreenImage(item.image)}
              />
              <h2 className="jewelry-title">{item.title}</h2>
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
          <img src={fullScreenImage} alt="Full-Screen jewelry" className="full-screen-image" />
        </div>
      )}
    </div>
  );
}
