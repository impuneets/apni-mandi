// Navbar.js

import React from 'react';
import '../styles/navbar.css'

const Navbar = () => {
    return (
        <nav>
            <div className="navbar">
                <h1>Price-Tally</h1>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
