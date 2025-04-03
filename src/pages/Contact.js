import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log("Form Submitted", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>Have any questions or feedback? We'd love to hear from you!</p>

      <div className="contact-grid">
        {/* Contact Form */}
        <div className="form-container">
          {submitted && <p className="success-message">Thank you! We'll get back to you soon.</p>}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="info-container">
          <h2>Our Contact Details</h2>
          <p><strong>Address:</strong>Rohini's sr residency</p>
          <p><strong>Email:</strong> rkn21@gmail.com</p>
          <p><strong>Phone:</strong> 95343*****</p>
          <h2>Follow Us</h2>
          <div className="social-icons">
            <button className="social-icon">🌐</button>
            <button className="social-icon">📘</button>
            <button className="social-icon">🐦</button>
            <button className="social-icon">📸</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
