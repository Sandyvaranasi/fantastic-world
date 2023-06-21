import React from 'react';
import { useNavigate } from 'react-router-dom';
import './category.css';

const categories = [
  {
    title: 'Offer',
    image: 'https://img.freepik.com/free-vector/special-offer-modern-sale-banner-template_1017-20667.jpg?size=626&ext=jpg&ga=GA1.2.1011469892.1680872086&semt=ais',
    path: '/offer',
  },
  {
    title: 'Jewellery',
    image: 'https://img.freepik.com/free-photo/gold-necklace-with-word-love-it_1340-42879.jpg?w=360&t=st=1687339644~exp=1687340244~hmac=bbcd5dd8021735ed04cf974b0033012c78dad2ee68c486ef2a5c1aca05ce53ae',
    path: '/jwellary',
  },
  {
    title: 'Bangles',
    image: 'https://img.freepik.com/free-photo/young-indian-woman-wearing-sari_23-2149400905.jpg?size=626&ext=jpg&ga=GA1.1.1011469892.1680872086&semt=sph',
    path: '/bangle',
  },
  {
    title: 'Worship',
    image: 'https://img.freepik.com/free-photo/diwali-festival-lights-tradition_23-2148688457.jpg?w=360&t=st=1687339774~exp=1687340374~hmac=357027822217c58e6cc30e8542b2b27549cbfc2f28063ae590b86e66ba35e28d',
    path: '/worship',
  },
  {
    title: 'Stationary',
    image: 'https://img.freepik.com/free-photo/school-tools-with-calculator_1101-345.jpg?size=626&ext=jpg&ga=GA1.1.1011469892.1680872086&semt=sph',
    path: '/stationary',
  },
  {
    title: 'Gift',
    image: 'https://img.freepik.com/free-photo/christmas-decoration-gift-boxes-grey-surface_176420-11801.jpg?size=626&ext=jpg&ga=GA1.1.1011469892.1680872086&semt=sph',
    path: '/gift',
  },
  {
    title: 'Other',
    image: 'https://img.freepik.com/premium-photo/cleaning-tools-chemicals-basket-wooden-table-against-gray-background_93675-123751.jpg?size=626&ext=jpg&ga=GA1.1.1011469892.1680872086&semt=ais',
    path: '/other',
  }
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
