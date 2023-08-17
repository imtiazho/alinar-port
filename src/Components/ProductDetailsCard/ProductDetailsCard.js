import React from 'react';
import './ProductDetailsCard.css';
import { useState } from 'react';

const ProductDetailsCard = ({ data }) => {
    const [productQuantity, setProductQuantity] = useState(1);
    const {
        _id,
        handCodedId,
        name,
        priceSet,
        stock,
        img,
        ratings,
        deliveryInDhaka,
        deliveryOutDhaka,
        shortDesc,
        typeOfProduct,
        body,
        Long,
        colorGurrenty,
        quantity,
        priceJustSharee,
        shareeLong,
        productMaterial,
        panjabiSize,
        note,
        pantMaterial,
        brand,
        dupattaMaterial,
        category,
    } = data;

    const decreaseQuantity = () => {
        if (productQuantity > 1) {
            setProductQuantity(productQuantity - 1);
        }
    };
    const increaseQuantity = () => {
        setProductQuantity(productQuantity + 1);
    };
    return (
        <div className="product-details">
            <div className="first-row">
                {img && (
                    <div className="image">
                        <img src={img} alt="" />
                    </div>
                )}

                <div className="pd-info-cart">
                    <div className="product-info">
                        {name && <h2>{name}</h2>}
                        {typeOfProduct && <h4>Type of product : {typeOfProduct}</h4>}
                        {shortDesc && <p>Short Description : {shortDesc}</p>}
                        {body && <p>Body: {body}</p>}
                        {productMaterial && <p>Product Material : {productMaterial}</p>}
                        {pantMaterial && <p>Pant Material : {pantMaterial}</p>}
                        {dupattaMaterial && <p>Dupatta Material : {dupattaMaterial}</p>}
                        {priceSet && <p>Price : {priceSet} BDT</p>}
                        {stock && <p>Stock : {stock}</p>}
                        {priceJustSharee && (
                            <p>
                                Price Only Blezer : {priceJustSharee} BDT <span>*</span>
                            </p>
                        )}
                    </div>

                    {priceJustSharee && (
                        <>
                            <div className="set-or-single-sharee">
                                <span>
                                    <input
                                        type="radio"
                                        name="priceBox"
                                        value="shareSet"
                                        id="shareeSet"
                                    />
                                    <label htmlFor="shareeSet">Full Suit:</label>
                                </span>
                                <span>
                                    <input
                                        type="radio"
                                        name="priceBox"
                                        value="shareOnly"
                                        id="sharee"
                                    />
                                    <label htmlFor="sharee">Only Blezer</label>
                                </span>
                            </div>
                        </>
                    )}

                    {deliveryOutDhaka && (
                        <>
                            <div className="set-or-single-sharee">
                                <span>
                                    <input
                                        type="radio"
                                        name="deliveryLocation"
                                        value="inSideDhaka"
                                        id="insideDhaka"
                                    />
                                    <label htmlFor="insideDhaka">In side Dhaka</label>
                                </span>
                                <span>
                                    <input
                                        type="radio"
                                        name="deliveryLocation"
                                        value="outSideDhaka"
                                        id="outsideDhaka"
                                    />
                                    <label htmlFor="outsideDhaka">Out side Dhaka</label>
                                </span>
                            </div>
                        </>
                    )}

                    <div className="cart-btn">
                        <div className="quantity-controler">
                            <button className="btn" onClick={decreaseQuantity}>
                                -
                            </button>
                            <div className="quantity">{productQuantity}</div>
                            <button className="btn" onClick={increaseQuantity}>
                                +
                            </button>
                        </div>

                        <button className="btn">
                            Add to Cart <i className="fa-solid fa-cart-shopping"></i>
                        </button>
                    </div>
                </div>
            </div>

            <div className="second-row">
                <div className="short-nav-product-details">
                    <h2 className="sub-title-product-details">
                        Details Infomation of {name}
                    </h2>

                    <div className="more-info">
                        {typeOfProduct && <h4>Type of product : {typeOfProduct}</h4>}
                        {shortDesc && <p>Short Details : {shortDesc}</p>}
                        {body && <p>Size : {body}</p>}
                        {productMaterial && <p>Product Material : {productMaterial}</p>}
                        {Long && <p>Sharee Long : {Long}</p>}
                        {pantMaterial && <p>Pant Material : {pantMaterial}</p>}
                        {dupattaMaterial && <p>Dupatta Material : {dupattaMaterial}</p>}
                        {brand && <p>Brand : {brand}</p>}
                        {category && <p>Category : {category}</p>}
                        {priceSet && <p>Price : {priceSet} BDT</p>}
                        {priceJustSharee && (
                            <p>
                                Price Only Blezer : {priceJustSharee} BDT{" "}
                                <span className="red-span">*</span>
                            </p>
                        )}
                        {shareeLong && <p>Person Height : {shareeLong}</p>}
                        {colorGurrenty && <p>Do Note : {colorGurrenty}</p>}
                        {panjabiSize && <p>Suit Size : {panjabiSize}</p>}
                        {ratings && <p>Ratings : {ratings} stars</p>}
                        {deliveryInDhaka && (
                            <p>
                                Delivery Charge : {deliveryInDhaka} BDT{" "}
                                <span className="sub-text">
                                    <span className="red-span">*</span> Inside Dhaka
                                </span>
                            </p>
                        )}
                        {deliveryOutDhaka && (
                            <p>
                                Delivery Charge : {deliveryOutDhaka} BDT{" "}
                                <span className="sub-text">
                                    <span className="red-span">*</span>Outside Dhaka
                                </span>
                            </p>
                        )}
                        {note && (
                            <p>
                                Note: {note}
                                <span className="red-span">*</span>
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsCard;