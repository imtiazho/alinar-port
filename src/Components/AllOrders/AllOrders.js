import React from 'react';
import MyOrderCard from '../MyOrderCard/MyOrderCard';
import blPic1 from '../../assets/bl-1.jpg';
import blPic2 from '../../assets/bl-2.jpg';
import blPic3 from '../../assets/bl-3.jpg';

import shirtImage1 from '../../assets/s1.jpg';
import shirtImage2 from '../../assets/s2.jpg';
import shirtImage3 from '../../assets/s3.jpg';

const AllOrders = () => {
    const data = [

        {
            _id: "6475c672f690ad1bbb0df19f",
            clientName: "Ali Haider",
            clientEmail: "alihairder@gmail.com",
            clientPhone: "01********66",
            clientDistrict: "Dhaka",
            clientThana: "Mohammadpur",
            clientVillage: "Rayer bazar",
            productName: ["Velvet Blazer Set in Brown", "Blazer Set in Maroon color", "Cotton Blazer Set in sky Blue"],
            productImg: [blPic1, blPic2, blPic3],
            productPrice: 1200,
            productType: ["Party Wear"],
            deliveryCharge: 120,
            productQuantity: 1,
            totalPrice: 1320,
        },
        {
            _id: "6475c672f690ad1bbb0df19f",
            clientName: "Sadrul Islam",
            clientEmail: "sadrulislam@gmail.com",
            clientPhone: "01********69",
            clientDistrict: "Barishal",
            clientThana: "Gornodi",
            clientVillage: "Nodirpar",
            productName: ["Black Shirt", "White Shirt", "Deep Olive Shirt"],
            productImg: [shirtImage1, shirtImage2, shirtImage3],
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

export default AllOrders;