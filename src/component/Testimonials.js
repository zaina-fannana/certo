import React from "react";
import ReviewCard from "./ReviewCard";
import "../styles/Testimonials.css";
import CNBC from "../assets/CNBC.png";
import NewYork from "../assets/NewYork.png";
import figure from "../assets/figure.png";
import Reader from "../assets/Reader.png";
import ZDNet from "../assets/ZDNet.png";
import Wired from "../assets/Wired.png";

const Testimonials = () => {
  const reviews = [
    {
      text: "Does exactly what it says. Clear to read and understand. This is now the second iPhone we’ve used it on and would certainly recommend this app.",
      author: "colinandmandy94",
      rating: 5,
    },
    {
      text: "Love the ease and efficiency. Awesome app. Very informative and insightful if wanting to know more about your device. The added breach check is a great bonus. Sweet tool. Love it highly recommend.",
      author: "Jennifer Black",
      rating: 5,
    },
    {
      text: "This app is good if you need to identify certain vulnerabilities on your iPhone. If you have any issues, their customer service was quite helpful and responsive.",
      author: "Phillip Colligan",
      rating: 5,
    },
  ];

  return (
    <section className="testimonials">
      <h2>Loved by thousands of iPhone and Android users alike</h2>
      <div className="reviews">
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            text={review.text}
            author={review.author}
            rating={review.rating}
          />
        ))}
      </div>
      <div className="featured">
        <h3>Featured in:</h3>
        <div className="logos">
          <img src={CNBC} alt="CNBC" className="CNBC-image" />
          <img src={NewYork} alt="NewYork" className="NewYork-image" />
          <img src={figure} alt="figure" className="figure-image" />
          <img src={Reader} alt="Reader" className="Reader-image" />
          <img src={ZDNet} alt="ZDNet" className="ZDNet-image" />
          <img src={Wired} alt="Wired" className="Wired-image" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
