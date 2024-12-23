import React from "react";
import ReviewCard from "./ReviewCard";
import "../styles/Testimonials.css";

const Testimonials = () => {
  const reviews = [
    {
      text: "35 years in Cybersecurity. This App is Safe, Effective, and Extremely Informative. Beginner through Expert Users can benefit.",
      author: "BeaunTeK, App Store",
      rating: 5,
    },
    {
      text: "Very happy with Certo's app. I found it easy enough to use. It doesn't slow my phone down or show ads like other apps. Would definitely recommend it.",
      author: "Evelyn K, Sitejabber",
      rating: 5,
    },
    {
      text: "Best malware detection and removal you can find. I've been using this for about a year and would recommend it to anyone.",
      author: "Clayton Horn, Play Store",
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
          <img src="/logos/cnbc.png" alt="CNBC" />
          <img src="/logos/newyorkpost.png" alt="New York Post" />
          <img src="/logos/ft.png" alt="Financial Times" />
          <img src="/logos/readersdigest.png" alt="Reader's Digest" />
          <img src="/logos/zdnet.png" alt="ZDNet" />
          <img src="/logos/wired.png" alt="Wired" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
