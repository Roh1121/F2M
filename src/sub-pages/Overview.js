import React from "react";
import "./Overview.css";

const Overview = () => {
  return (
    <div className="overview-container">
      <h2>Overview</h2>
      <p>Welcome to the dashboard! Here you’ll find a summary of your activities and statistics.</p>
      <div className="overview-stats">
        <div className="overview-card">
          <h3>Revenue</h3>
          <p>Rs 6,50,000</p>
        </div>
        <div className="overview-card">
          <h3>Orders</h3>
          <p>1,730</p>
        </div>
        <div className="overview-card">
          <h3>New Users</h3>
          <p>412</p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
