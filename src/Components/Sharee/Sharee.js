import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import blPic1 from '../../assets/bl-1.jpg';
import blPic2 from '../../assets/bl-2.jpg';
import blPic3 from '../../assets/bl-3.jpg';

const Sharee = () => {
    const sharees = [
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
        }
    ]

    return (
        <div className="common-product-section">
            {sharees.slice(0, 3)?.map((product, index) => (
                <ProductCard key={product._id} product={product} index={index}></ProductCard>
            ))}
        </div>
    );
};

export default Sharee;