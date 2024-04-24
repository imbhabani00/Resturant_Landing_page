import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Food Is An Important Part Of A Balanced Diet
        </h1>
        <p className="primary-text">
  Our extensive range of dishes caters to every palate, from savory to sweet. Indulge in our signature creations crafted with the finest ingredients sourced locally and globally. Whether you're craving a hearty meal or a light snack, we have something to satisfy your appetite.
</p>
<p className="primary-text">
  Dive into a world of flavor and discover the perfect balance of taste and nutrition. Our menu is designed to provide you with not just a meal, but an experience that delights the senses and nourishes the body. Join us on a culinary journey where every bite tells a story of passion and quality.
</p>

        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
