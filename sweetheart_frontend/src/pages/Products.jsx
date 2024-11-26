import React, { useEffect, useState } from 'react';
import api from '../services/api';
import './Products.css';
import Product from './Product';
import { useNavigate } from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        api.get('/products/')
            .then((response) => {
                setProducts(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setLoading(false);
            });
    }, []);

    const handleAddToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
    };

    const handleCheckout = () => {
        navigate('/order', { state: { cart } });
    };

    if (loading) return <p>Cargando productos...</p>;

    return (
        <section className="menu">
            <h2>Nuestro Menú</h2>
            <div className="product-grid">
                {products.map((product) => (
                    <Product key={product.id} product={product} onAddToCart={handleAddToCart} />
                ))}
            </div>
            {cart.length > 0 && (
                <button onClick={handleCheckout} className="checkout-button">
                    Ir a Realizar Pedido ({cart.length} productos)
                </button>
            )}
        </section>
    );
};

export default Products;
