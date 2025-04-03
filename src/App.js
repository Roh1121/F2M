import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ImageSlider from "./components/slider";
import Product from "./components/Product";
import Footer from "./components/Footer";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import Overview from "./sub-pages/Overview";
import Orders from "./sub-pages/Orders";
import Analytics from "./sub-pages/Analytics";
import Settings from "./sub-pages/Settings";
import MainDashboardContent from "./sub-pages/Maindashcontent";
import PrivacyPolicy from "./pages/Privacy";
import Productdetails from "./pages/Productdetails";

import "./App.css";

const App = () => {
  return (
    <Router>
      <div id="page-container">
        <main>
          <Routes>
            <Route path="/" element={<><Home /><ImageSlider /></>} />
            <Route path="/product" element={<><Home /><Product /></>} />
            <Route path="/product/:id" element={<Productdetails />} />
            <Route path="/about" element={<><Home /><About /></>} />
            <Route path="/contact" element={<><Home /><Contact /></>} />
            <Route path="/profile" element={<><Home /><Profile /></>} />
            <Route path="/privacy" element={<><Home /><PrivacyPolicy /></>} />
            <Route path="/sign-in" element={<><Home /><ImageSlider /><SignUp /></>} />
            <Route path="/login" element={<><Home /><ImageSlider /><Login /></>} />

            {/* Dashboard Nested Routes */}
            <Route path="/dashboard/*" element={<><Home /><Dashboard /></>}>
              <Route index element={<MainDashboardContent />} />
              <Route path="overview" element={<Overview />} />
              <Route path="orders" element={<Orders />} />
              <Route path="analytics" element={<Analytics />} />
              <Route path="settings" element={<Settings />} />
            </Route>
          </Routes>
        </main>
        <Footer /> {/* Footer is OUTSIDE Routes */}
      </div>
    </Router>
  );
};

export default App;
