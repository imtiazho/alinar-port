import React from 'react';
import './Cart.css';
import CartItem from '../CartItem/CartItem';
import CartCalculation from '../CartCalculation/CartCalculation';
import shirtImage1 from '../../assets/s1.jpg';
import blPic2 from '../../assets/bl-2.jpg';

const Cart = () => {
    const storedCart = [
        {
            _id: "6488b02159b1745015bghgf2915",
            handCodedId: "abaya",
            name: "Black Shirt",
            priceSet: "1200",
            stock: "Available",
            ratings: 5,
            img: shirtImage1,
            deliveryInDhaka: 80,
            deliveryOutDhaka: 110,
            typeOfProduct: "Jeans",
            shortDesc: "This Shirt Collar and Full Sleeves attire is Enhanced with Buttons, Resham and Sequins Work",
            Long: "28 Inch",
            body: "44 Inch",
            colorGurrenty: " Footwear shown in the image is for presentation purposes only. Half to one inch may vary in measurement. (Slight variation in actual color vs. image is possible)",
            delivered: 0,
            quantity: 0,
            priceJustSharee: null,
            pantMaterial: null,
            brand: null,
            dupattaMaterial: null,
            category: null,
            productMaterial: null,
            shareeLong: null,
            panjabiSize: null,
            note: null
        },
        {
            _id: "6475c672f690adasas1bbb0df19f",
            delivered: 93,
            handCodedId: "sharee",
            name: "Blazer Set in Maroon color",
            priceSet: 12500,
            priceJustSharee: 75000,
            stock: "Available",
            ratings: 5,
            img: blPic2,
            deliveryInDhaka: 80,
            deliveryOutDhaka: 110,
            shortDesc: null,
            body: null,
            Long: null,
            pantMaterial: null,
            brand: null,
            dupattaMaterial: null,
            category: null,
            typeOfProduct: "Readymade Velvet Blazer in Maroon",
            productMaterial: "This Shirt Collar and Full Sleeves attire is Enhanced with Buttons, Resham and Sequins Work. Available with a Terry Rayon Pant in Black and a Satin Shirt in White",
            shareeLong: "5 Feet 11 Inch",
            panjabiSize: "All size are available",
            colorGurrenty: "Footwear shown in the image is for presentation purposes only. Half to one inch may vary in measurement. (Slight variation in actual color vs. image is possible)",
            quantity: 0,
            deliveredCount: 90
        }
    ]
    return (
        <div>
            {/* <HelmetComponent pageName={"alinar - cart"} /> */}
            <div className="cart">
                <div className="ordered-items">
                    {storedCart.map((item) => (
                        <CartItem key={item._id} item={item}></CartItem>
                    ))}
                </div>

                <div className="cart-calculation">
                    <CartCalculation storedCart={storedCart}></CartCalculation>
                </div>
            </div>
        </div>
    );
};

export default Cart;