import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2>Dashboard</h2>
        <nav className="sidebar-nav">
          <Link to="overview" className="nav-item">Overview</Link>
          <Link to="analytics" className="nav-item">Analytics</Link>
          <Link to="orders" className="nav-item">Orders</Link>
          <Link to="settings" className="nav-item">Settings</Link>
        </nav>
      </aside>

      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
