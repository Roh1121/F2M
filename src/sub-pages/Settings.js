import React, { useState } from "react";
import "./Setting.css";

const Settings = () => {
  const [email, setEmail] = useState("user@example.com");
  const [language, setLanguage] = useState("English");

  const handleSave = () => {
    alert("Settings saved!");
  };

  return (
    <div className="settings-container">
      <h2>Settings</h2>
      <form className="settings-form">
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Language:
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option>English</option>
            <option>Telugu</option>
            <option>Hindi</option>
            <option>kannada</option>
            <option>Tamil</option>
            <option>Malyalam</option>
          </select>
        </label>
        <button type="button" onClick={handleSave}>
          Save
        </button>
      </form>
    </div>
  );
};

export default Settings;

