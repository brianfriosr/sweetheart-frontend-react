import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import ingredientes from '../assets/ingredientes.jpg';
import sabores from '../assets/sabores.jpg';
import entrega from '../assets/entrega.jpg';

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <h1>¡Bienvenido a Sweet Heart!</h1>
                    <p>Descubre nuestros deliciosos postres hechos con amor, ideales para cualquier ocasión.</p>
                    <Link to="/products" className="cta-button">Ver Menú</Link>
                </div>
            </section>

            {/* Destacados */}
            <section className="highlights">
                <h2>¿Por qué elegirnos?</h2>
                <div className="highlight-grid">
                    <div className="highlight-item">
                        <img src={ingredientes} alt="Ingredientes frescos" />
                        <h3>Ingredientes Frescos</h3>
                        <p>Utilizamos los mejores ingredientes para garantizar un sabor único.</p>
                    </div>
                    <div className="highlight-item">
                        <img src={sabores} alt="Sabores únicos" />
                        <h3>Sabores Únicos</h3>
                        <p>Creamos combinaciones que deleitan hasta el paladar más exigente.</p>
                    </div>
                    <div className="highlight-item">
                        <img src={entrega} alt="Entrega rápida" />
                        <h3>Entrega Rápida</h3>
                        <p>Recibe tus postres favoritos en la puerta de tu casa.</p>
                    </div>
                </div>
            </section>

            {/* Testimonios */}
            <section className="testimonials">
                <h2>Lo que dicen nuestros clientes</h2>
                <div className="testimonial-grid">
                    <div className="testimonial-item">
                        <p>"Los mejores postres que he probado. ¡Increíble servicio!"</p>
                        <span>- Laura M.</span>
                    </div>
                    <div className="testimonial-item">
                        <p>"Siempre son mi elección para cumpleaños y eventos especiales."</p>
                        <span>- Andrés C.</span>
                    </div>
                    <div className="testimonial-item">
                        <p>"Me encanta la facilidad de hacer pedidos en línea. ¡Súper recomendados!"</p>
                        <span>- Paula R.</span>
                    </div>
                </div>
            </section>

            {/* Llamado a la Acción */}
            <section className="cta-section">
                <h2>Haz tu pedido ahora</h2>
                <p>Es fácil, rápido y delicioso. ¡Haz clic abajo para explorar nuestro menú y pedir tus favoritos!</p>
                <Link to="/products" className="cta-button">Ver Menú</Link>
            </section>
        </div>
    );
};

export default Home;
