import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import userImage from '../../assets/cls-1.jpg';
import './UserProfile.css';

const UserProfile = () => {
    return (
        <div>
            {/* <HelmetComponent pageName={`${user.displayName} - alinar`} /> */}
            <div id="dash-board">
                <div className="container">
                    <div className="left-side">
                        <div className="profile">
                            <img src={userImage} alt="" />
                            <p>Imtiaz Hossain <small>(Developer)</small></p>
                            <div className='edit-profile'>
                                <Link to='/editProfile'><i className="fa fa-pencil-square-o" aria-hidden="true"></i> Add Photo</Link>
                            </div>

                        </div>
                    </div>

                    <div className="right-side">
                        <div className="items-short-nav">
                            <CustomLink to="">My Orders</CustomLink>
                            <CustomLink to="allOrders">All Orders</CustomLink>
                            <CustomLink to="allUsers">All Users</CustomLink>
                        </div>
                        <div className="listing-on-rent">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;