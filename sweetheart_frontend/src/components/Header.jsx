import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/LOGO_IMAGENES/LOGO-SWEET-HEART-04.png';

const Header = () => {
    return (
        <header className="header">
            <div className="header-content">
                {/* Logo y título como enlaces */}
                <Link to="/" className="header-link">
                    <img src={logo} alt="Sweet Heart Logo" className="logo" />
                    <h1>Sweet Heart</h1>
                </Link>
            </div>
            <nav>
                <ul className="nav-links">
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/products">Catálogo</Link></li>
                    <li><Link to="/about">Nosotros</Link></li>
                    <li><Link to="/contact">Contacto</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;

