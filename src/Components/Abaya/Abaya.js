import React from 'react';
import './Abaya.css';
import ProductCard from '../ProductCard/ProductCard';
import shirtImage1 from '../../assets/s1.jpg';
import shirtImage2 from '../../assets/s2.jpg';
import shirtImage3 from '../../assets/s3.jpg';

const Abaya = () => {
    const abayas = [
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
            _id: "6488b02159b174501asdas5bf2915",
            handCodedId: "abaya",
            name: "White Shirt",
            priceSet: "1900",
            stock: "Available",
            ratings: 5,
            img: shirtImage2,
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
            _id: "6488b02159b17dfdfd45015bf2915",
            handCodedId: "abaya",
            name: "Deep Olive Shirt",
            priceSet: "1500",
            stock: "Available",
            ratings: 5,
            img: shirtImage3,
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
        }
    ]

    return (
        <div className="common-product-section">
            {abayas.slice(0, 3)?.map((product, index) => (
                <ProductCard key={product._id} product={product} index={index}></ProductCard>
            ))}
        </div>
    );
};

export default Abaya;