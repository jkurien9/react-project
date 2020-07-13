import React from 'react';

const ProductCard = ({ product }) => (
                     
        <div className="sale-item">
        <article className={product.cost, product.type}>
            <img src={product.image} alt={product.alt} />
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <h2>{product.price}</h2>
            <h3>{product.available}</h3>
            <button className="btn">Add To Cart</button>
            </article>
        </div>
   
);

export default ProductCard; 