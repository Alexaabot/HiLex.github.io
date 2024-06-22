import React, { useState, useEffect } from 'react';
import Product from './Product';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Aquí deberías hacer una llamada a una API para obtener los productos
        // Para este ejemplo, usaremos datos ficticios
        const mockProducts = [
            { id: 1, name: 'Taza Personalizada', description: 'Taza de 11oz con tu diseño', price: 10, imageUrl: 'https://via.placeholder.com/150' },
            { id: 2, name: 'Camiseta Personalizada', description: 'Camiseta con tu diseño', price: 20, imageUrl: 'https://via.placeholder.com/150' },
            { id: 3, name: 'Zapatillas Personalizadas', description: 'Zapatillas con tu diseño', price: 30, imageUrl: 'https://via.placeholder.com/150' },
        ];
        setProducts(mockProducts);
    }, []);

    return (
        <section id="products">
            <h2>Nuestros Productos</h2>
            <div className="product-list">
                {products.map(product => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
};

export default ProductList;
