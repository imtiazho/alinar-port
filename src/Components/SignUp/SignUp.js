import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className="form signup-form">
            {/* <HelmetComponent pageName={"alinar - signup"} /> */}
            <div className="form-container">
                <form>
                    <h3 className="form-title">Sign Up</h3>

                    <div>
                        <div className="input-field">
                            <input type="text" placeholder="Name" />
                        </div>
                    </div>

                    <div>
                        <div className="input-field">
                            <input type="email" placeholder="Email" />
                        </div>
                    </div>

                    <div>
                        <div className="input-field">
                            <input
                                type="password"
                                placeholder="Password"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="input-field">
                            <input
                                type="password"
                                placeholder="Confirm Password"
                            />
                        </div>
                    </div>

                    <div className="input-field">
                        <input type="submit" value="SIGNUP" />
                    </div>

                    <Link to="/login">Already have an account?</Link>
                </form>
                <button className="btn form-btn">
                    <i className="fa-brands fa-google"></i> Sign In with Google
                </button>
            </div>
        </div>
    );
};

export default SignUp;