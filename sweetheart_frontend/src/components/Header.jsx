import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/sweetheart_logo_1.jpg';

const Header = () => {
    return (
        <header>
            <div className="logo-container">
                <img src={logo} alt="Sweet Heart Logo" className="logo" />
                <h1>Sweetheart</h1>
            </div>
            <nav>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/products">Menú</Link></li>
                    <li><Link to="/about">Nosotros</Link></li>
                    <li><Link to="/contact">Contacto</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
