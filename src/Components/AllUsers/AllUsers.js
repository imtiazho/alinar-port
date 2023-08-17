import React from 'react';
import './AllUsers.css';
import UserCard from '../UserCard/UserCard';
import user1 from '../../assets/cls-1.jpg';
import user2 from '../../assets/user-1.jpg';
import user3 from '../../assets/user-2.jpg';
import user4 from '../../assets/user-3.jpg';
import user5 from '../../assets/user-4.jpg';
import user6 from '../../assets/user-5.jpg';
import user7 from '../../assets/user-6.jpg';

const AllUsers = () => {
    const users = [
        {
            _id: "01",
            email: "imtiazhossain@gmail.com",
            role: "admin",
            userEmail: "imtiazhossain@gmail.com",
            userName: "Imtiaz Hossain",
            userPassWord: "123456",
            userImage: user1
        },
        {
            _id: "02",
            email: "alihaider@gmail.com",
            role: "moderator",
            userEmail: "alihaider@gmail.com",
            userName: "Ali Haider Sami",
            userPassWord: "123456",
            userImage: user2
        },
        {
            _id: "03",
            email: "mehrab@gmail.com",
            role: "user",
            userEmail: "mehrab@gmail.com",
            userName: "Mehrab Hasan",
            userPassWord: "123456",
            userImage: user3
        },
        {
            _id: "04",
            email: "rashed@gmail.com",
            role: "user",
            userEmail: "rashed@gmail.com",
            userName: "Rashed D",
            userPassWord: "123456",
            userImage: user4
        },
        {
            _id: "05",
            email: "rafiabdullah@gmail.com",
            role: "user",
            userEmail: "rafiabdullah@gmail.com",
            userName: "Abdullah",
            userPassWord: "123456",
            userImage: user5
        },
        {
            _id: "06",
            email: "zafirss23@gmail.com",
            role: "user",
            userEmail: "zafirss23@gmail.com",
            userName: "Zarif M",
            userPassWord: "123456",
            userImage: user6
        },
        {
            _id: "07",
            email: "talhamohai@gmail.com",
            role: "user",
            userEmail: "talhamohai@gmail.com",
            userName: "Mohaiminul Islam",
            userPassWord: "123456",
            userImage: user7
        }
    ]
    return (
        <div className='all-users'>
            {
                users?.map(user => <UserCard key={user._id} user={user} />)
            }
        </div>
    );
};

export default AllUsers;