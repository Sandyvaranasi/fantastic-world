import React from 'react';
import { useNavigate } from 'react-router-dom';
import './category.css';

const categories = [
  {
    title: 'Offer',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyGjvP-ZK6X9KfRruDpV6G0X962OlaRC0Q8w&usqp=CAU',
    path: '/offer',
  },
  {
    title: 'Jewellery',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx2qBUZ-x2RhHWyZIRMZCRl5Qq1w6KvP8Zgg&usqp=CAU',
    path: '/jwellary',
  },
  {
    title: 'Bangles',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8a6dlGUBjmRgbG2S_czW58prgWWY34ejRybfiPS_d5wOIIyrh6i-29Xsc9-_f9wOye9o&usqp=CAU',
    path: '/bangle',
  },
  {
    title: 'Worship',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXZ0WVVarcItsKQ2u-CZA2S_k1U-VQCkXRgbSzvhU5gIzQjm6G6NVjhjAmgD7cweOEyy0&usqp=CAU',
    path: '/worship',
  },
  {
    title: 'Stationary',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHVfoqWvRJR1JjmIR95CkFkd9m6prrHqEJzQ&usqp=CAU',
    path: '/stationary',
  },
  {
    title: 'Gift',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3RuowkvonYYIpq-5CDd3QlymczhvXYm4lzxyJw4tXjNBuBjzPaR5wgAn9zmYNivD7e6I&usqp=CAU',
    path: '/gift',
  },
];

function Category() {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <div className="category-container">
      {categories.map((category) => (
        <div className="category-card" key={category.path} onClick={() => handleClick(category.path)}>
          <img src={category.image} alt={category.title} />
          <h3>{category.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default Category;
