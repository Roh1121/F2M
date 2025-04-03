import React from "react";
import "./Analytics.css";

const Analytics = () => {
  return (
    <div className="analytics-container">
      <h2>Analytics</h2>
      <p>Track your performance with these metrics.</p>
      <div className="charts">
        <div className="chart">Sales Chart</div>
        <div className="chart">User Growth Chart</div>
      </div>
    </div>
  );
};

export default Analytics;
