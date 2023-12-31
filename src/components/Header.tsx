import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => (
    <header>
        <nav>
            <ul>
                <li><Link to="/home">Home</Link></li>
                {/* <li><Link to="/products">Products</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li> */}
            </ul>
        </nav>
    </header>
);

export default Header;
