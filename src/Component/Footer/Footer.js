import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div  className="footer-container">
            <div>
            <Link className="btn-footer" to= '/home'>Hone</Link>
            <Link className="btn-footer" to >Privacy</Link>
            <Link className="btn-footer" to>Site Terms</Link>
            <Link className="btn-footer" to>Contact Us</Link>
            </div>
           <div className="copyrigth">
           <p>Copyrigth © 2021 School Library</p>
           </div>
        </div>
    );
};

export default Footer;