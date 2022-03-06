import React, { useState } from 'react';
import './Login.css';
import { Alert, Spinner } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import UseAuth from './../../../Hooks/UseAuth/UseAuth';

const Login = () => {

    const [loginData, setLoginData] = useState({});
    const { user, loginUser, signInWithGoogle, isLoading, authError } = UseAuth();

    const location = useLocation();
    const navigate = useNavigate();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, navigate);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, navigate)
    }


    return (
        <div className="authentication mb-5">
            <div>
                <form onSubmit={handleLoginSubmit}>
                    <h2 className="h2">Please Login</h2>
                    <input 
                    onChange={handleOnChange} 
                    className="input" type="email" 
                    name="email" 
                    placeholder="Your Email" 
                    />
                    <br />

                    <input 
                    onChange={handleOnChange} 
                    className="input" type="password" 
                    name="password" 
                    placeholder="Your Password" 
                    />
                    <br />

                    <input 
                    onChange={handleOnChange} 
                    className="btn-authentication" 
                    type="submit" value="submit" 
                    />

                    <p className="p">New User. <Link className="link" to="/register">Register</Link></p>

                    {isLoading && <Spinner animation="border" variant="primary" />}
                    {user?.email && <Alert className="fw-bold" variant="success">Login successfully!</Alert>}
                    {authError && <Alert className="fw-bold" variant="danger">{authError}</Alert>}
                    
                    <p>------------------------</p>

                    <button onClick={handleGoogleSignIn} className="fw-bold btn-g-auth"><img className="g-img" src='https://developers.google.com/identity/images/g-logo.png' /> Sign In</button>

                </form>
            
            </div>
        </div>
    );
};

export default Login;