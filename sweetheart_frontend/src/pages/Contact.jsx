import React from 'react';
import { useForm } from 'react-hook-form';
import './Contact.css';

const Contact = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        alert(`¡Gracias ${data.name}! Nos pondremos en contacto contigo pronto.`);
        reset();
    };

    return (
        <div className="contact-page">
            <section className="contact-container">
                <h1>Contáctanos</h1>
                <p>¿Tienes alguna pregunta o necesitas ayuda con tu pedido? Estamos aquí para ti.</p>
                <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
                    <label htmlFor="name">Nombre:</label>
                    <input
                        id="name"
                        type="text"
                        {...register('name', { required: true })}
                        placeholder="Tu nombre"
                    />

                    <label htmlFor="email">Correo Electrónico:</label>
                    <input
                        id="email"
                        type="email"
                        {...register('email', { required: true })}
                        placeholder="Tu correo electrónico"
                    />

                    <label htmlFor="tel">Teléfono:</label>
                    <input
                        id="phone"
                        type="tel"
                        {...register('phone', { required: true })}
                        placeholder="Tu número telefónico"
                    />

                    <label htmlFor="message">Mensaje:</label>
                    <textarea
                        id="message"
                        {...register('message', { required: true })}
                        placeholder="Escribe tu mensaje"
                    ></textarea>

                    <button type="submit">Enviar</button>
                </form>
            </section>
        </div>
    );
};

export default Contact;
