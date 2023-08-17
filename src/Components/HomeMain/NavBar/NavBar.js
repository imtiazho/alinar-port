import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UpperNav from '../../UpperNav/UpperNav';
import logo from "../../../assets/logo.png";
import { FaBars, FaUserAlt } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { BsFillCartCheckFill } from "react-icons/bs";
import './NavBar.css';
import logout from '../../../assets/logout.png';
import arrow from '../../../assets/arrow.png'
import userImage from '../../../assets/cl-1.jpg';



const NavBar = () => {
    const [navStatus, steNavOpen] = useState(false);
    const [userSettingOpen, setuserSettingOpen] = useState(false);
    const menuItems = (
        <>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/shop">Shop</Link>
            </li>
            <li>
                <Link to="/blogs">Blog</Link>
            </li>
            <li>
                <Link to="/manageProduct">Manage Product</Link>
            </li>
            <li>
                <Link to="/about">About Us</Link>
            </li>

        </>
    );
    return (
        <div className="main-nav">
            {navStatus && <ul onClick={() => steNavOpen(!navStatus)} className="nav-Open">{menuItems}</ul>}
            <UpperNav />
            <div className="nav-container">
                <Link to="/">
                    <img className="logo" src={logo} alt="" />
                </Link>

                <div className="menu-log-cart">
                    <ul className="nav-items">{menuItems}</ul>

                    <ul className="log-cart">
                        <li className="cart-icon">
                            <Link to="/cart">
                                <BsFillCartCheckFill />
                            </Link>
                            <span className="cart-length">
                                2
                            </span>
                        </li>

                        <li onClick={() => setuserSettingOpen(!userSettingOpen)} className="user-icon">
                            <img src={userImage} alt="" />

                            {userSettingOpen && (
                                <div className="user-settings">
                                    <div className="setting-menu-inner">
                                        <div className="user-profile">
                                            <img src={userImage} alt="" />
                                            <div>
                                                <p>Imtiaz Hossain</p>
                                                <p><Link onClick={() => setuserSettingOpen(!userSettingOpen)} to='/userprofile'>See your Profile</Link></p>
                                            </div>
                                        </div>
                                        <hr />

                                        <button className="setting-links">
                                            <span>
                                                <img src={logout} alt="" />
                                                Logout
                                            </span>
                                            <img className="arrow" src={arrow} alt="" />
                                        </button>
                                    </div>
                                </div>
                            )}
                        </li>
                        <div className="responsive-navBar">
                            <div onClick={() => steNavOpen(!navStatus)} className="bars">
                                {navStatus ? <ImCross /> : <FaBars />}
                            </div>
                        </div>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default NavBar;