import React from "react";
import "../styles/ReviewCard.css";

const ReviewCard = ({ text, author, rating }) => {
  return (
    <div className="review-card">
      <div className="rating">
        {"★".repeat(rating)}
        {"☆".repeat(5 - rating)}
      </div>
      <p className="text">{text}</p>
      <p className="author">{author}</p>
    </div>
  );
};

export default ReviewCard;
