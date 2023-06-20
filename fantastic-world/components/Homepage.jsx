import React from 'react';
import './homepage.css';

export default function Homepage() {
  return (
    <div className="container">
      <p className="offer-description">
        We sell a range of products from stationary to pooja items, general garments, gifts, and many more. Visit the
        store now.
      </p>
      <h2 className="special-offers">Today's Special Offer !!!</h2>
      <div className="product-details">
        <h3 className="product-title">Golden worked kada</h3>
        <div className="product-info">
          <img
            className="product-image"
            src="https://5.imimg.com/data5/AU/MT/GJ/SELLER-84633020/ladies-gold-kada-500x500.jpg"
            alt="Kada image"
          />
          <div className="details-container">
            <p className="product-description">Before you can begin to determine what the composition of a particular paragraph will be,
             you must first decide on an argument and a working thesis statement for your paper.
              What is the most important idea that you are trying to convey to your reader?
               The information in each paragraph must be related to that idea. In other words,
                your paragraphs should remind your reader that there is a recurrent relationship between your thesis
                 and the information in each paragraph. A working thesis functions like a seed from which your paper,
                  and your ideas, will grow. The whole process is an organic one—a natural progression from a seed to
                   a full-blown paper where there are direct, familial relationships between all of the ideas in the paper.
                   </p>
            <div className="price-container">
              <p className="price">Daily price: ₹150/pair</p>
              <h4 className="offer-price">Today's Offer Price: ₹100/pair</h4>
              <h5 className="hurry-up">Hurry Up!!! Limited Time Offer</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
