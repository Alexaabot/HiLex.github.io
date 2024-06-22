import React from 'react';

const Product = ({ product }) => {
    return (
        <div className="product-card">
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>{product.price} USD</p>
            <button>Añadir al carrito</button>
        </div>
    );
};

export default Product;
