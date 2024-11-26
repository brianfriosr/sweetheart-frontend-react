import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import './Products.css';

const Product = ({ product, onAddToCart }) => {
    const [selectedOption, setSelectedOption] = useState('default');
    const [price, setPrice] = useState(product.price);
    const [portions, setPortions] = useState(0);

    const handleOptionChange = (event) => {
        const option = event.target.value;
        setSelectedOption(option);

        // Actualiza el precio y las porciones según la opción seleccionada
        switch (option) {
            case 'small':
                setPrice(product.price);
                setPortions(6);
                break;
            case 'medium':
                setPrice(product.price + 10000);
                setPortions(10);
                break;
            case 'large':
                setPrice(product.price + 20000);
                setPortions(15);
                break;
            case 'extralarge':
                setPrice(product.price + 30000);
                setPortions(20);
                break;
            default:
                setPrice(product.price);
                setPortions(0);
                break;
        }
    };

    const handleAddToCart = () => {
        if (selectedOption === 'default') {
            toast.error('Por favor, selecciona un tamaño.');
            //alert('Por favor, selecciona un tamaño.');
            return;
        }
        onAddToCart({
            id: product.id,
            name: product.name,
            price,
            portions,
        });
        toast.success(`${product.name} ha sido agregado al pedido.`);
        // alert(`${product.name} ha sido agregado al carrito.`);
    };

    return (
        <div className="product">
            <img src={product.image_url} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>Precio: ${price}</p>
            <label htmlFor={`size-${product.id}`}>Elige un tamaño:</label>
            <select
                id={`size-${product.id}`}
                value={selectedOption}
                onChange={handleOptionChange}
                className="dropdown"
            >
                <option value="default">Selecciona una opción</option>
                <option value="small">6 Porciones</option>
                <option value="medium">10 Porciones</option>
                <option value="large">15 Porciones</option>
                <option value="extralarge">20 Porciones</option>
            </select>
            <button className="order-button" onClick={handleAddToCart}>
                Agregar
            </button>
        </div>
    );
};

export default Product;
