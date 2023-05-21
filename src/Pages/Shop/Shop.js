import React, { useState } from 'react';
import Products from '../Products/Products';
import './Shop.css'
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
//import { ListGroup } from 'react-bootstrap';




const Shop = () => {

    const products = useLoaderData();
    const [cart, setCarts] = useState([]);

    console.log(products);
    // const [products, setProducts] = useState([]);
    // useEffect(() => {
    //     fetch('products.json')
    //         .then(res => res.json())
    //         .then(data => setProducts(data))
    // }, [])

    const handleAddToCart = (selectedProduct) => {
        console.log(selectedProduct);
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id)
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        setCarts(newCart);

    }
    const clearCart = () => {
        setCarts([])

    }

    return (

        <div className='shop-container'>
            <div className='row'>
                <div className='col'>
                    <div className='container'>
                        <div className='product-container'>
                            {
                                products.map(product => <Products
                                    key={product.id}
                                    product={product}
                                    handleAddToCart={handleAddToCart}
                                ></Products>)
                            }

                        </div>

                    </div>


                </div>


                <div className='col'>
                    <div className="card-container ">
                        <Cart cart={cart} clearCart={clearCart}>
                        </Cart>
                    </div>


                </div>


            </div>
        </div>












    );
};

export default Shop;