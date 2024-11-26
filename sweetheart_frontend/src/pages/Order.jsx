import React from 'react';
import { useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import api from '../services/api';
import { toast } from 'react-hot-toast';
import './Order.css';

const Order = () => {
    const location = useLocation();
    const { cart } = location.state || [];
    const { register, handleSubmit } = useForm();

    const totalPrice = cart.reduce((sum, product) => sum + product.price, 0);

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
                toast.error('Hubo un problema al realizar el pedido');
            });
    };

    return (
        <div className="order-page">
            <div className='order-container'>
            <h1>Realizar Pedido</h1>
            <div className="order-summary">
                <h2>Resumen del Pedido</h2>
                <ul>
                    {cart.map((product) => (
                        <li key={product.id}>
                            <span>{product.name}</span> - ${product.price} ({product.portions} porciones)
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
                <button type="submit">Confirmar Pedido</button>
            </form>
            </div>
            
        </div>
    );
};

export default Order;
