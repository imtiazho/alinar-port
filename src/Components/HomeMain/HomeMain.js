import React from 'react';
import Banner from '../Banner/Banner';
import RespinsiveTopBannerAlt from '../RespinsiveTopBannerAlt/RespinsiveTopBannerAlt';
import Depertment from '../Depertment/Depertment';
import ServiceSummary from '../ServiceSummary/ServiceSummary';
import Testimonials from '../Testimonials/Testimonials';
import QuestionAns from '../QuestionAns/QuestionAns';
import NewArraivals from '../NewArraivals/NewArraivals';
import LatestBlog from '../LatestBlog/LatestBlog';
import BestSellingProduct from '../BestSellingProduct/BestSellingProduct';

const HomeMain = () => {
    return (
        <div>
            <Banner />
            <RespinsiveTopBannerAlt />
            <Depertment />
            <NewArraivals />
            <ServiceSummary />
            <BestSellingProduct />
            <LatestBlog />
            <Testimonials />
            <QuestionAns />

            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    );
};

export default HomeMain;