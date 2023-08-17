import React from 'react';
import './CartCalculation.css';
import { Link } from 'react-router-dom';

const CartCalculation = () => {

    return (
        <div className="cart-calculation">
            <h3>Order Summary</h3>

            <div className="calculate-item">
                <div className="each-info">
                    <p>Product Price</p>
                    <p>৳ 13700</p>
                </div>

                <div className="each-info">
                    <p>Delivery Charge</p>
                    <p>৳ 120</p>
                </div>

                <div className="each-info">
                    <h4>Total</h4>
                    <h4>৳ 13820</h4>
                </div>
            </div>

            <Link to='/shipping'
                className="btn-2">
                Place Order
            </Link>
        </div>
    );
};

export default CartCalculation;