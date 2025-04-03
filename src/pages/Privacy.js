import React from "react";
import "./Privacy.css";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <div className="hero-section">
        <div className="hero-text">
          <h1>Privacy Policy</h1>
          <p>Your trust is our priority. Learn how we protect your data.</p>
        </div>
      </div>
      <div className="privacy-policy-content">
        <section>
          <h2>Introduction</h2>
          <p>
            Welcome to F2M! We value the privacy of our farmers, buyers, and sellers. This policy outlines how we collect, use, and safeguard your information while enabling you to access better markets and grow your business.
          </p>
        </section>

        <section>
          <h2>What Information Do We Collect?</h2>
          <ul>
            <li><strong>Personal Information:</strong> Your name, email, phone number, and address for personalized services.</li>
            <li><strong>Farm Data:</strong> Information about your crops, products, and farming techniques to optimize market opportunities.</li>
            <li><strong>Transaction Data:</strong> Records of sales, purchases, and payments.</li>
            <li><strong>Location Data:</strong> Helps match you with local buyers and sellers.</li>
          </ul>
        </section>

        <section>
          <h2>How Does F2M Use Your Data?</h2>
          <p>
            We aim to empower farmers by:
          </p>
          <ul>
            <li>Connecting you with nearby buyers for direct market access.</li>
            <li>Providing crop and price analytics to help you make informed decisions.</li>
            <li>Sending updates on farming tips, weather conditions, and government schemes.</li>
          </ul>
        </section>

        <section>
          <h2>Data Security for Farmers</h2>
          <p>
            Your data is stored securely, and only authorized personnel can access it. We never sell your data to third parties. For extra security, all transactions and communications are encrypted.
          </p>
        </section>

        <section>
          <h2>Your Rights</h2>
          <ul>
            <li>Request to view or update your information anytime.</li>
            <li>Opt-out of promotional communications.</li>
            <li>Delete your account and data when you stop using F2M.</li>
          </ul>
        </section>

        <section>
          <h2>How to Contact Us</h2>
          <p>
            Need assistance? Reach out to us via:
          </p>
          <ul>
            <li><strong>Email:</strong> <a href="mailto:support@F2M.com">support@F2M.com</a></li>
            <li><strong>Phone:</strong> +91 984759****</li>
            <li><strong>WhatsApp:</strong> +91 8985675****</li>
          </ul>
        </section>

        <section>
          <h2>Feedback</h2>
          <p>
            We constantly improve our platform. Share your suggestions or feedback at <a href="mailto:feedback@F2M.com">feedback@F2M.com</a>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
