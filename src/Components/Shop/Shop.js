import React, { useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './Shop.css';
import blPic1 from '../../assets/bl-1.jpg';
import blPic2 from '../../assets/bl-2.jpg';
import blPic3 from '../../assets/bl-3.jpg';

import shirtImage1 from '../../assets/s1.jpg';
import shirtImage2 from '../../assets/s2.jpg';
import shirtImage3 from '../../assets/s3.jpg';

import pant1 from '../../assets/p1.jpg';
import pant2 from '../../assets/p2.jpg';
import pant3 from '../../assets/p3.jpg';

const Shop = () => {
    const [query, setQuery] = useState("");
    const data = [
        {
            _id: "6475c672f690ddfdfad1bbb0df19f",
            delivered: 93,
            handCodedId: "sharee",
            name: "Velvet Blazer Set in Brown",
            priceSet: 12500,
            priceJustSharee: 75000,
            stock: "Available",
            ratings: 5,
            img: blPic1,
            deliveryInDhaka: 80,
            deliveryOutDhaka: 110,
            shortDesc: null,
            body: null,
            Long: null,
            pantMaterial: null,
            brand: null,
            dupattaMaterial: null,
            category: null,
            typeOfProduct: "Readymade Velvet Blazer in Brown",
            productMaterial: "This Shirt Collar and Full Sleeves attire is Enhanced with Buttons, Resham and Sequins Work. Available with a Terry Rayon Pant in Black and a Satin Shirt in White",
            shareeLong: "5 Feet 11 Inch",
            panjabiSize: "All size are available",
            colorGurrenty: "Footwear shown in the image is for presentation purposes only. Half to one inch may vary in measurement. (Slight variation in actual color vs. image is possible)",
            quantity: 0,
            deliveredCount: 90
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
        },
        {
            _id: "6475c672f690ad1fgffgbbb0df19f",
            delivered: 93,
            handCodedId: "sharee",
            name: "Cotton Blazer Set in sky Blue",
            priceSet: 12500,
            priceJustSharee: 75000,
            stock: "Available",
            ratings: 5,
            img: blPic3,
            deliveryInDhaka: 80,
            deliveryOutDhaka: 110,
            shortDesc: null,
            body: null,
            Long: null,
            pantMaterial: null,
            brand: null,
            dupattaMaterial: null,
            category: null,
            typeOfProduct: "Readymade cotton Blazer in sky Blue",
            productMaterial: "This Shirt Collar and Full Sleeves attire is Enhanced with Buttons, Resham and Sequins Work. Available with a Terry Rayon Pant in Black and a Satin Shirt in White",
            shareeLong: "5 Feet 11 Inch",
            panjabiSize: "All size are available",
            colorGurrenty: "Footwear shown in the image is for presentation purposes only. Half to one inch may vary in measurement. (Slight variation in actual color vs. image is possible)",
            quantity: 0,
            deliveredCount: 90
        },
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
        },
        {
            _id: "6475c672f690ad1bbb0df1a4",
            delivered: 8,
            handCodedId: "threePis",
            name: "Wash Blue Denim Jeans",
            priceSet: 2350,
            stock: "Available",
            ratings: 5,
            img: pant1,
            deliveryInDhaka: 80,
            deliveryOutDhaka: 110,
            typeOfProduct: "Indian",
            productMaterial: "Net Sequence Body",
            pantMaterial: "Shatoon Silk Kapo",
            dupattaMaterial: "Embroidered Net Dupatta",
            brand: "Denim",
            category: "Casual",
            colorGurrenty: " Footwear shown in the image is for presentation purposes only. Half to one inch may vary in measurement. (Slight variation in actual color vs. image is possible)",
            quantity: 0,
            shortDesc: null,
            Long: null,
            body: null,
            priceJustSharee: null,
            shareeLong: null,
            panjabiSize: null,
            note: null
        },
        {
            _id: "6475c672f690ad1bbb56650df1a4",
            delivered: 8,
            handCodedId: "threePis",
            name: "Double Wash Grey Jeans",
            priceSet: 2150,
            stock: "Available",
            ratings: 5,
            img: pant2,
            deliveryInDhaka: 80,
            deliveryOutDhaka: 110,
            typeOfProduct: "Export",
            productMaterial: "Net Sequence Body",
            pantMaterial: "stretch",
            dupattaMaterial: "Well pure comvod cotton",
            brand: "Deasle",
            category: "Casual",
            colorGurrenty: " Footwear shown in the image is for presentation purposes only. Half to one inch may vary in measurement. (Slight variation in actual color vs. image is possible)",
            quantity: 0,
            shortDesc: null,
            Long: null,
            body: null,
            priceJustSharee: null,
            shareeLong: null,
            panjabiSize: null,
            note: null
        },
        {
            _id: "6475c634343472f690ad1bbb0df1a4",
            delivered: 8,
            handCodedId: "threePis",
            name: "Wash Blue tiktok pant",
            priceSet: 1230,
            stock: "Available",
            ratings: 5,
            img: pant3,
            deliveryInDhaka: 80,
            deliveryOutDhaka: 110,
            typeOfProduct: "Indian",
            productMaterial: "Net Sequence Body",
            pantMaterial: "stretch",
            dupattaMaterial: "Well pure comvod cotton",
            brand: "Deasle",
            category: "Party wear",
            colorGurrenty: " Footwear shown in the image is for presentation purposes only. Half to one inch may vary in measurement. (Slight variation in actual color vs. image is possible)",
            quantity: 0,
            shortDesc: null,
            Long: null,
            body: null,
            priceJustSharee: null,
            shareeLong: null,
            panjabiSize: null,
            note: null
        }
    ]
    return (
        <div className="shop">
            {/* <HelmetComponent pageName={"alinar - shop"} /> */}
            <div className="shop-search-box">
                <input onChange={e => setQuery(e.target.value)} placeholder="Just type that you want..." type="text" />
            </div>

            <div className="shop-container">
                {data.filter(product => product.handCodedId.toLowerCase().includes(query)).map((product, index) => (
                    <ProductCard index={index} product={product} key={product._id}></ProductCard>
                ))}
            </div>
        </div>
    );
};

export default Shop;