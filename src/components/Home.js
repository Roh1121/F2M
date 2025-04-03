import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Header = () => {
    const [showNav, setShowNav] = useState(false);

    const toggleNavItems = () => {
        setShowNav(!showNav);
    };

    const closeNavItems = () => {
        setShowNav(false);
    };

    return (
        <div>
            <header className="header">
                <div className="logo">
                    <img src="./images/logo.png" alt="logo" />
                </div>
                <div className="hamburger" onClick={toggleNavItems}>
                    <span className={`bar ${showNav ? 'active' : ''}`}></span>
                    <span className={`bar ${showNav ? 'active' : ''}`}></span>
                    <span className={`bar ${showNav ? 'active' : ''}`}></span>
                </div>
                <nav className={`nav-links ${showNav ? 'active' : ''}`}>
                    <Link to="/" onClick={closeNavItems}>Home</Link>
                    <Link to="/Product" onClick={closeNavItems}>Product</Link>
                    <Link to="/contact" onClick={closeNavItems}>Contact</Link>
                    <Link to="/About" onClick={closeNavItems}>About</Link>
                    <div className="search-container">
                        <input type="text" placeholder="Search..." className="search-bar" />
                        <button className="search-button">Search</button>
                    </div>
                    <div className="auth-links">
                        <Link to="/Sign in" className="auth-link" onClick={closeNavItems}>Sign Up</Link>
                        <Link to="/login" className="auth-link" onClick={closeNavItems}>Login</Link>
                    </div>
                    <div className="profile-icons">
                        <Link to="/Profile" onClick={closeNavItems}>
                            <img src="./images/p.png" alt="Profile" className="icon" />
                        </Link>
                        <Link to="/Dashboard" onClick={closeNavItems}>
                            <img src="./images/dash.jpg" alt="Dashboard" className="icon" />
                        </Link>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Header;