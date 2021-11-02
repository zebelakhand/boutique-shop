import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { clearTheCart, deleteFromDb, getStoredCart } from '../../utilities/fakedb';
import { useHistory } from 'react-router';

const OrderReview = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    const handleRemove = key => {
        const newcart = cart.filter(product => product.key !== key);
        setCart(newcart);
        deleteFromDb(key);
    }
    const history = useHistory();

    const handleOrder = () => {
        history.push('/shipping');
    }
    return (
        <div className="shop-container">
            <div style={{ marginTop: '100px', marginLeft: '600px' }}>
                <button onClick={handleOrder} className='btn btn-danger'>Proceed to Order</button>
            </div>

        </div>
    );
};

export default OrderReview;