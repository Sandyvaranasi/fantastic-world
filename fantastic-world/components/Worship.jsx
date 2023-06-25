import React, { useEffect, useState } from 'react';
import './worship.css';
import { useNavigate } from 'react-router-dom';
import { api } from '../src/App';

export default function Worship() {
  const [currentPage, setCurrentPage] = useState(0);
  const [fullScreenImage, setFullScreenImage] = useState(null);
  const [worshipData, setWorshipData] = useState([]);
  const itemsPerPage = 3;
  const navigate = useNavigate();

  useEffect(()=>{
    api.get('/product/worship')
    .then((res)=>setWorshipData(res.data.data))
    .catch(err=>alert(err.response.data.message))
  },[]);

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
      <div>
      <button className="next-button" onClick={handleNext}>Next</button>
      <button className="next-button" onClick={()=>navigate('/category')}>Categories</button>
      </div>
      {fullScreenImage && (
        <div className="full-screen-overlay" onClick={() => setFullScreenImage(null)}>
          <img src={fullScreenImage} alt="Full-Screen worship" className="full-screen-image" />
        </div>
      )}
    </div>
  );
}
