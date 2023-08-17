import React from 'react';
import './MyOrders.css';
import MyOrderCard from '../MyOrderCard/MyOrderCard';
import shirtImage1 from '../../assets/s1.jpg';
import blPic2 from '../../assets/bl-2.jpg';

const MyOrders = () => {
    const data = [
        {
            _id: "6475c672f690ad1bbb0df19f",
            clientName: "Imtiaz Hossain",
            clientEmail: "imtiaz23@gmail.com",
            clientPhone: "01********66",
            clientDistrict: "Lakshmipur",
            clientThana: "Raipur",
            clientVillage: "Kanchanpur",
            productName: ["Brown Blazer"],
            productImg: [blPic2],
            productPrice: 1200,
            productType: ["Party Wear"],
            deliveryCharge: 120,
            productQuantity: 1,
            totalPrice: 1320,
        },
        {
            _id: "6475c672f690ad1bbb0df19f",
            clientName: "Imtiaz Hossain",
            clientEmail: "imtiaz23@gmail.com",
            clientPhone: "01********66",
            clientDistrict: "Lakshmipur",
            clientThana: "Raipur",
            clientVillage: "Kanchanpur",
            productName: ["Black Shirt"],
            productImg: [shirtImage1],
            productPrice: 1200,
            productType: ["Party Wear"],
            deliveryCharge: 120,
            productQuantity: 1,
            totalPrice: 1320,
        }

    ]
    return (
        <div className='all-my-order'>
            {data?.map((eachOrder) => <MyOrderCard eachOrder={eachOrder} key={eachOrder._id} />)}
        </div>
    );
};

export default MyOrders;