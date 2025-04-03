import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
// import missionImage from "./images/mission.jpg"; // Example image
// import vision from "./images/vision.jpg"; // Example image
// import featureImage from "./images/features.jpg"; // Example image

const About = () => {
  const aboutData = {
    title: "Welcome to F2M",
    description:
      "F2M is a revolutionary platform designed to connect farmers and vendors directly, eliminating middlemen and ensuring fair trade.",
    mission: "Our mission is to create a transparent, fair, and efficient marketplace for agricultural produce.",
    vision:
      "We aim to empower farmers by providing them with a digital marketplace where they can sell their products at fair prices. Vendors can also access fresh, high-quality produce directly from trusted farmers.",
    features: [
      { title: "Transparent Pricing", description: "No middlemen, no hidden costs." },
      { title: "Easy Communication", description: "Direct interaction between farmers and vendors." },
      { title: "Sustainable Practices", description: "Encouraging eco-friendly farming methods." },
      { title: "Technology Integration", description: "Cutting-edge tools to boost productivity." },
    ],
  };

  return (
    <div className="about-container">
      {/* Hero Section */}
      <div className="hero-section">
        <h1>{aboutData.title}</h1>
        <p>{aboutData.description}</p>
        <button className="explore-button">Explore More</button>
      </div>

      {/* Mission Section */}
      <div className="about-section">
        <div className="text-container">
          <h2>Our Mission</h2>
          <p>{aboutData.mission}</p>
        </div>
        <div className="image-container">
          <img src="./images/mission.jpeg" alt="Our Mission" />
        </div>
      </div>

      {/* Vision Section */}
      <div className="about-section reverse">
        <div className="text-container">
          <h2>Our Vision</h2>
          <p>{aboutData.vision}</p>
        </div>
        <div className="image-container">
          <img src="./images/vision.png" alt="Our Vision" />
        </div>
      </div>

      {/* Features Section */}
      <div className="about-features">
        <h2>Key Features</h2>
        <div className="features-grid">
          {aboutData.features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="cta-section">
        <img src="./images/features.png" alt="Join Us" />
        <div className="cta-content">
          <h2>Join F2M Today!</h2>
          <p>Whether you're a farmer or buyer, F2M offers tools to grow your business.</p>
          <Link to="/Sign in">
          <button className="cta-button" >Sign Up Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
