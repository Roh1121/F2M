import React, { useState } from "react";
import "./Profile.css";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    name: "Rohini A",
    email: "rohini123@gmail.com",
    phone: "9884673882",
    location: "Hyderabad",
    address: "Kukatpally Hyderabad",
    language: "English, Hindi, Telugu",
  });

  const [tempUser, setTempUser] = useState({ ...user });

  const handleEditToggle = () => {
    if (isEditing) {
      setUser({ ...tempUser });
    }
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTempUser({ ...tempUser, [name]: value });
  };

  return (
    <div className="profile-container">
      <h1>Your Profile</h1>
      <div className="profile-card">
        <div className="profile-image">
          <img src="./images/pro.jpg" alt="Profile" />
        </div>
        <div className="profile-info">
          {isEditing ? (
            <form>
              <div className="form-group">
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={tempUser.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={tempUser.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Phone:</label>
                <input
                  type="text"
                  name="phone"
                  value={tempUser.phone}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Location:</label>
                <input
                  type="text"
                  name="location"
                  value={tempUser.location}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Address:</label>
                <input
                  type="text"
                  name="address"
                  value={tempUser.address}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Language:</label>
                <input
                  type="text"
                  name="language"
                  value={tempUser.language}
                  onChange={handleInputChange}
                />
              </div>
            </form>
          ) : (
            <>
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Phone:</strong> {user.phone}</p>
              <p><strong>Location:</strong> {user.location}</p>
              <p><strong>Address:</strong> {user.address}</p>
              <p><strong>Language:</strong> {user.language}</p>
            </>
          )}
          <button className="edit-button" onClick={handleEditToggle}>
            {isEditing ? "Save Changes" : "Edit Profile"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
