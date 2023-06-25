import React, { useEffect, useState } from 'react';
import './other.css';
import { useNavigate } from 'react-router-dom';
import { api } from '../src/App';

export default function Other() {
  const [currentPage, setCurrentPage] = useState(0);
  const [fullScreenImage, setFullScreenImage] = useState(null);
  const [otherData, setOtherData] = useState([]);
  const itemsPerPage = 3;
  const navigate = useNavigate();

  useEffect(()=>{
    api.get('/product/orher')
    .then((res)=>setOtherData(res.data.data))
    .catch(err=>alert(err.response.data.message))
  },[]);

  const handleNext = () => {
    setCurrentPage((prevPage) => (prevPage === Math.ceil(otherData.length / itemsPerPage) - 1 ? 0 : prevPage + 1));
  };

  const openFullScreenImage = (imageUrl) => {
    setFullScreenImage(imageUrl);
  };

  const startIndex = currentPage * itemsPerPage;
  const visibleItems = otherData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="other-container">
      <h1 className="other-heading">Other Items</h1>
      <p className='other-description'>A paragraph is defined as
       “a group of sentences or a single sentence that forms a unit”.
        Length and appearance do not determine whether a section in a paper is a paragraph.
         For instance, in some styles of writing, particularly journalistic styles,
       a paragraph can be just one sentence long.</p>
      <div className="other-slider">
        <div className="other-cards">
          {visibleItems.map((item) => (
            <div className="other-card" key={item.id}>
              <img
                src={item.image}
                alt={item.title}
                className="other-image"
                onClick={() => openFullScreenImage(item.image)}
              />
              <h2 className="other-title">{item.title}</h2>
            </div>
          ))}
        </div>
        <div>
      <button className="next-button" onClick={handleNext}>Next</button>
      <button className="next-button" onClick={()=>navigate('/category')}>Categories</button>
      </div>
      </div>
      {fullScreenImage && (
        <div className="full-screen-overlay" onClick={() => setFullScreenImage(null)}>
          <img src={fullScreenImage} alt="Full-Screen other" className="full-screen-image" />
        </div>
      )}
    </div>
  );
}

