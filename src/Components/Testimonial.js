import React from "react";
import ProfilePic from "../Assets/bubu.jpeg";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
          From the moment I landed on their food page, I knew I was in for a
          treat! The variety of dishes offered is simply astounding, and each
          one is a masterpiece of flavor. The attention to detail in
          presentation and taste is unparalleled. Whether it's a quick bite or a
          leisurely meal, this page has become my go-to destination for culinary
          inspiration. I can confidently say that their commitment to excellence
          has made every dining experience truly unforgettable.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="img" />
        <p>
          Welcome to our food landing page, where taste meets excellence! Dive
          into a culinary journey like no other, where each dish is crafted with
          passion and precision. From savory starters to delectable desserts,
          our menu promises to tantalize your taste buds and leave you craving
          for more. Join us in savoring the flavors of perfection, where every
          bite is a celebration of culinary artistry. Discover why our guests
          rate us as a top destination for unforgettable dining experiences!
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>BhabaniShankar</h2>
      </div>
    </div>
  );
};

export default Testimonial;
