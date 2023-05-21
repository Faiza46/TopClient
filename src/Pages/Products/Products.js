import React from 'react';
import './Product.css'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Products = ({ product, handleAddToCart }) => {
    const { name, img, seller, price, ratings } = product;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <p className="product-name">{name}</p>
                <p className="price">Price: {price} $</p>
                <p className="seller">Seller: {seller}</p>
                <p className="rating">Rating: {ratings}</p>

            </div>
            <button onClick={() => handleAddToCart(product)} className="btn-cart"><FontAwesomeIcon icon={faShoppingCart} />
                <span className='ms-3'>Add to cart</span></button>

        </div>
    );
};

export default Products;