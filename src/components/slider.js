import React from "react";
import "./slider.css";

const Slider = () => {
  return (
    <div> {/* Added this wrapper div to fix the error */}
      {/* Video Section */}
      <div className="video-container">
        <video autoPlay loop muted playsInline className="background-video">
          <source src="./images/Promo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay"></div>
      </div>
      </div>
  );
};

export default Slider;
