import React from 'react';
import "./Testimonial.css";
const testimonials = [
  {
    id: 1,
    rating: 5,
    Name: 'John',
    text: 'Excellent service! The product exceeded my expectations.'
  },
  {
    id: 2,
    rating: 4,
    Name: 'John',
    text: 'Very satisfied with the quality and delivery speed.'
  },
  {
    id: 3,
    rating: 5,
    Name: 'John',
    text: 'Outstanding customer support and communication.'
  },
  {
    id: 4,
    rating: 3,
    Name: 'John',
    text: 'Good product, but there is room for improvement.'
  },
  {
    id: 5,
    rating: 5,
    Name: 'John',
    text: 'I love this company! Will definitely order again.'
  },
];

const Testimonial = () => {
  return (
    <div className="testimonial-container">
      <h2>Customer Testimonials</h2>
      <div className="testimonials">
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className="testimonial">
            <div className="rating">
              {[...Array(testimonial.rating)].map((_, index) => (
                <span key={index} className="star">&#9733;</span>
              ))}
            </div>
            <p>{testimonial.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
