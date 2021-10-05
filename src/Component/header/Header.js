import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="header-container">
                <h1> Knowledge Development Center</h1>
                <Link className="menu" to = "/home">Home</Link>
                <Link className="menu" to = "/service">Service</Link>
                <Link className="menu" to = "/about">About</Link>
                <Link className="menu" to = "/show">Show Up</Link>
            </div>
            <div>
            </div>
        </div>
    );
};

export default Header;