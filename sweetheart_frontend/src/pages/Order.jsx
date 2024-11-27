import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import api from '../services/api';
import { toast } from 'react-hot-toast';
import Swal from 'sweetalert2'
import './Order.css';

const Order = () => {
    const location = useLocation();
    const initialCart = location.state?.cart || [];
    const [cart, setCart] = useState(initialCart);
    const { register, handleSubmit } = useForm();

    const totalPrice = cart.reduce((sum, product) => sum + product.price, 0);

    // Función para eliminar un producto del carrito
    const handleRemoveProduct = (productId) => {
        const updatedCart = cart.filter((product) => product.id !== productId);
        setCart(updatedCart);
        toast.success('Producto eliminado del pedido');
    };

    const onSubmit = (data) => {
        const orderData = {
            name: data.name,
            email: data.email,
            address: data.address,
            phone: data.phone,
            product_ids: cart.map((product) => product.id),
            total_price: totalPrice,
        };

        api.post('/orders/', orderData)
            .then(() => {
                toast.success('Pedido realizado con éxito');
            })
            .catch((error) => {
                console.error('Error al realizar el pedido:', error.response?.data || error.message);
                Swal.fire({
                    title: '¡Error!',
                    text: 'Hubo un problema al realizar el pedido',
                    icon: 'error',
                    confirmButtonText: 'OK'
                  })
                //toast.error('Hubo un problema al realizar el pedido');
            });
    };

    return (
        <div className="order-page">
            <div className="order-container">
                <h1>Realizar Pedido</h1>
                {cart.length > 0 ? (
                    <>
                        <div className="order-summary">
                            <h2>Resumen del Pedido</h2>
                            <ul>
                                {cart.map((product) => (
                                    <li key={product.id} className="order-item">
                                        <span>{product.name} - ${product.price} ({product.portions} porciones)</span>
                                        <button
                                            className="remove-button"
                                            onClick={() => handleRemoveProduct(product.id)}
                                        >
                                            Eliminar
                                        </button>
                                    </li>
                                ))}
                            </ul>
                            <h3>Total: ${totalPrice}</h3>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} className="order-form">
                            <h2>Información del Cliente</h2>
                            <label>Nombre del Cliente:</label>
                            <input {...register('name', { required: true })} />
                            <label>Email:</label>
                            <input type="email" {...register('email', { required: true })} />
                            <label>Dirección:</label>
                            <input {...register('address', { required: true })} />
                            <label>Teléfono:</label>
                            <input {...register('phone', { required: true })} />
                            <button type="submit" className="confirm-button">Confirmar Pedido</button>
                        </form>
                    </>
                ) : (
                    <p className="no-products">No hay productos en el pedido.</p>
                )}
            </div>
        </div>
    );
};

export default Order;
