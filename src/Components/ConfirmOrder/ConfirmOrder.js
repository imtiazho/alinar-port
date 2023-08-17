import React from 'react';
import './ConfirmOrder.css';
import { useNavigate } from 'react-router-dom';

const ConfirmOrder = () => {
    const navigate = useNavigate();
    return (
        <div className="confirm-order">
            <h2>Overall Preview</h2>
            <div className="order-preview">
                <span className="each-row">
                    <h4>Name: Imtiaz Hossain</h4>
                </span>

                <span className="each-row">
                    <p>Email: imtiaz23@gmail.com</p>
                    <p>Phone: 01*********6</p>
                </span>

                <span className="each-row">
                    <p>District: Lakshmipur</p>
                    <p>Thana: Raipur</p>
                </span>

                <span className="each-row">
                    <p>Village or Area: Kanchanpur</p>
                    <p>Product Quantity: 2 pis</p>
                </span>

                <span className="each-row">
                    <p>
                        Products Name: Hand Painting sharee
                    </p>
                    <p>
                        Type of product: Party Wear
                    </p>
                </span>

                <span className="each-row">
                    <p>Only Product Price: 1200 ৳</p>
                    <p>Delivery Charge: 120 ৳</p>
                </span>

                <span className="each-row">
                    <p>Grand Total: 1320৳</p>
                    <p>
                        Only Cash on Delivery <span className="red-span">*</span>{" "}
                    </p>
                </span>
            </div>

            <button onClick={() => navigate('/')} className="btn-2">
                Confirm Order
            </button>
        </div>
    );
};

export default ConfirmOrder;