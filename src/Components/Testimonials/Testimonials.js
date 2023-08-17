import React from 'react';
import './Testimonials.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import cli1 from '../../assets/cl-1.jpg'
import cli2 from '../../assets/cl-2.jpg'
import cli3 from '../../assets/cl-3.jpg'
import cli4 from '../../assets/cl-4.jpg'

const Testimonials = () => {
    return (
        <div className='testimonial'>
            <h2 className='sention-title'> <p>Alinar</p>Testimonials</h2>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                className='swiper-wrapper-cus'
            >
                <SwiperSlide className='slide'>
                    <div className="head">
                        <div className="profile">
                            <div className="clientImage">
                                <img src={cli1} />
                            </div>

                            <div className="info">
                                <h4>Imtiaz Hossain</h4>
                                <cite>Dhaka, Dhanmondi.</cite>
                            </div>
                        </div>

                        <div className="stars">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                    </div>

                    <p>Fantastic selection of men's dresses! The shop offers a wide range of stylish options for various occasions. Quality fabrics and great fits. A one-stop destination for modern men's fashion. 👍</p>
                </SwiperSlide>

                <SwiperSlide className='slide'>
                    <div className="head">
                        <div className="profile">
                            <div className="clientImage">
                                <img src={cli2} />
                            </div>

                            <div className="info">
                                <h4>Ali Haider Sami</h4>
                                <cite>Dhaka, Sultanganj.</cite>
                            </div>
                        </div>

                        <div className="stars">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                    </div>

                    <p>Disappointed with the men's dress collection. Limited choices and outdated styles. Quality doesn't match the price. Needs a refresh to keep up with current trends.🌼</p>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Testimonials;