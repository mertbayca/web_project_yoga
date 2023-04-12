import React from "react";
import './TCard.css'

const TestimonialCard = ({ name, image, message }) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-image">
        <img src={image} alt={name} />
      </div>
      <div className="testimonial-content">
        <p className="testimonial-message">{message}</p>
        <p className="testimonial-name">{name}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;