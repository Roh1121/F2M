import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
                    <div className="footer-links">
                <Link to="/Privacy">Privacy Policy</Link>
                <a href="/careers">Careers</a>
            </div>
            <div className="copyright">
                &copy; {new Date().getFullYear()} F2M. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;