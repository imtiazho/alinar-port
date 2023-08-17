import React from 'react';
import './CartItem.css';

const CartItem = ({ item }) => {
    const {
        _id,
        handCodedId,
        name,
        img,
        typeOfProduct,
        priceSet,
        priceJustSharee,
        brand,
        category,
        deliveryInDhaka,
        deliveryOutDhaka,
        shareStatus,
        quantity,
    } = item;

    return (
        <div className="item">
            <img src={img} alt="" />

            <div className="cart-info">
                <p>{name.length > 12 ? name.slice(0, 12) + "..." : name}</p>
                <h4>৳ {priceSet}</h4>
                <p>
                    <small>Quantity : 1 pis</small>
                </p>
            </div>

            <div className="delete-btn">
                <button>
                    <i className="fa-solid fa-trash-can"></i>
                </button>
            </div>
        </div>
    );
};

export default CartItem;