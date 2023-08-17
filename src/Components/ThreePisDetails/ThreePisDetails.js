import React from 'react';
import { useParams } from 'react-router-dom';
import ProductDetailsCard from '../ProductDetailsCard/ProductDetailsCard';
import pant1 from '../../assets/p1.jpg';
import pant2 from '../../assets/p2.jpg';
import pant3 from '../../assets/p3.jpg';

const ThreePisDetails = () => {
    const { threePisDetailsId } = useParams();
    const threePises = [
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
    const data = threePises.find(eachThreepis => eachThreepis._id === threePisDetailsId);

    return <ProductDetailsCard data={data} key={data._id} />;
};

export default ThreePisDetails;