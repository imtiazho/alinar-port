import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './BestSellingProduct.css';
import blPic2 from '../../assets/bl-2.jpg';
import shirtImage1 from '../../assets/s1.jpg';
import pant2 from '../../assets/p2.jpg';



const BestSellingProduct = () => {
    const bestSellingPro = [
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
        }
    ]
    return (
        <div className="best-selling-product">
            <h2 className="sention-title">
                <p>Alinar</p> BEST SELLING PRODUCT
            </h2>
            <div className="common-product-section">
                {bestSellingPro?.map((product, index) => (
                    <ProductCard product={product} key={product._id} index={index}></ProductCard>
                ))}
            </div>
        </div>
    );
};

export default BestSellingProduct;