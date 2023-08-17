import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import { Outlet } from 'react-router-dom';

const AddNewProduct = () => {
    return (
        <div>
            <div className="items-short-nav">
                <CustomLink to="">Sharee</CustomLink>
                <CustomLink to="uploadthreepis">Three Pis</CustomLink>
                <CustomLink to="uploadabaya">Abaya</CustomLink>
                {/* {admin && <CustomLink to="bestSelling">Best Selling</CustomLink>} */}
            </div>
            <div className="listing-on-rent">
                <Outlet />
            </div>
        </div>
    );
};

export default AddNewProduct;