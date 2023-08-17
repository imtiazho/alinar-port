import React from 'react';
import './ShipingInfo.css';
import { useNavigate } from 'react-router-dom';

const ShipingInfo = () => {
    const navigate = useNavigate();
    return (
        <div className="shipping">
            <div className="form-container">
                <form>
                    <div>
                        <div className="input-field">
                            <input readOnly value="Imtiaz Hosain" type="text" placeholder="Name" />
                        </div>
                    </div>

                    <div>
                        <div className="input-field">
                            <input readOnly type="email" value="imtiaz23@gmail.com" />
                        </div>
                    </div>

                    <div>
                        <div className="input-field">
                            <input
                                type="text"
                                placeholder="District"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="input-field">
                            <input type="text" placeholder="Thana" />
                        </div>
                    </div>

                    <div>
                        <div className="input-field">
                            <input
                                type="text"
                                placeholder="Village or Area"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="input-field">
                            <input
                                type="text"
                                placeholder="Phone Number"
                            />
                        </div>
                    </div>

                    <div onClick={() => navigate('/confirmOrder')} className="input-field">
                        <input type="submit" value="SAVE & CONTINUE" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ShipingInfo;