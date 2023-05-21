import React, { useState } from 'react';
import { Link } from 'react-router-dom';



const Cart = (props) => {
    const { cart, clearCart } = props;
    //console.log("cart", cart);
    let quantity = 0;
    let shipping = 0;
    let total = 0;

    for (const carts of cart) {
        quantity = quantity + carts.quantity;
        total = total + carts.price * carts.quantity;

        shipping = shipping + carts.shipping

    }

    const tax = (total * 0.1).toFixed(2);
    const grandTotal = total + shipping + parseFloat(tax);

    return (
        <div>
            <h6>Order Summary</h6>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h5>Grand Total: ${grandTotal}</h5>
            <button onClick={clearCart} className='btn btn-sm btn-outline-success text-white 
            border-white mt-3 mb-3'>Clear Cart</button><br />

            <button className='mt-2 btn btn-sm btn-outline-success text-white 
            border-white'><Link className='text-white text-decoration-none' to="/orderreview">Review Order</Link></button>


        </div>
    );
};

export default Cart;
