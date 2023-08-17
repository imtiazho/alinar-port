import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import { Outlet } from 'react-router-dom';
import './NewArraivals.css';

const NewArraivals = () => {
    return (
        <div className="new-arrivals">
            <h2 className="sention-title">
                {" "}
                <p>Alinar</p> NEW ARRIVAL
            </h2>
            <div className="new-arrivals-container">
                <div className="items-short-nav">
                    <CustomLink to="/">BLAZER</CustomLink>
                    <CustomLink to="/abaya">SHIRT</CustomLink>
                    <CustomLink to="/3pis">PANTS</CustomLink>
                </div>

                <Outlet />

                <button
                    className="checkout-btn btn-2">
                    Checkout Your Items
                </button>
            </div>
        </div>
    );
};

export default NewArraivals;