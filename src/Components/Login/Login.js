import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div className="form">
            {/* <HelmetComponent pageName={"alinar - login"} /> */}
            <div className="form-container">
                <form >
                    <h3 className="form-title">Login</h3>
                    <div>
                        <div className="input-field">
                            <input type="email" placeholder="Email" />
                        </div>
                    </div>

                    <div>
                        <div className="input-field">
                            <input type="password" placeholder="Password" />
                        </div>
                    </div>

                    <div className="input-field">
                        <input type="submit" value="LOGIN" />
                    </div>

                    <Link to="/signup">Don't have any account?</Link>
                </form>

                <button className="btn form-btn">
                    <i className="fa-brands fa-google"></i> Sign In with Google
                </button>
            </div>
        </div>
    );
};

export default Login;