import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
import Rating from 'react-rating';

const Product = (props) => {
    // console.log(props);
    const { name, img, seller, price, stock, star } = props.product;

    return (
        <div className="product">
            <div>
                <img style={{ width: '200px', height: '180px', marginRight: '30px' }} src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <p>Price: {price}</p>

                <button
                    onClick={() => props.handleAddToCart(props.product)}
                    className="btn btn-success"
                ><FontAwesomeIcon icon={faShoppingCart} /> Add to cart</button>
            </div>
        </div>
    );
};

export default Product;