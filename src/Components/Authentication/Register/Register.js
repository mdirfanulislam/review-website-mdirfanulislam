import React, { useState } from 'react';
import { Alert, Spinner } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import UseAuth from './../../../Hooks/UseAuth/UseAuth';
import './../Login/Login.css';

const Register = () => {

    const [loginData, setLoginData] = useState({});
    const navigate = useNavigate();
    const location = useLocation();
    const { user, registerUser, signInWithGoogle, isLoading, authError } = UseAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleRegisterSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, navigate);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, navigate)
    }

    return (
        <div className="authentication mb-5">
            <div>
                <form onSubmit={handleRegisterSubmit}>
                    <h2 className="h2">Please Register</h2>
                    <input 
                    onBlur={handleOnBlur} 
                    className="input" 
                    type="name" 
                    name="name" 
                    placeholder="Your Name" 
                    />
                    <br />

                    <input 
                    onBlur={handleOnBlur} 
                    className="input" 
                    type="email" 
                    name="email" 
                    placeholder="Your Email" 
                    />
                    <br />

                    <input 
                    onBlur={handleOnBlur} 
                    className="input" 
                    type="password" 
                    name="password" 
                    placeholder="Your Password" 
                    />
                    <br />

                    <input 
                    onBlur={handleOnBlur} 
                    className="input" 
                    type="password" 
                    name="password2"
                    placeholder="Re-enter Password" 
                    />
                    <br /> <br />

                    <input onBlur={handleOnBlur} className="btn-authentication" type="submit" value="submit" />
                    <p className="p">Already Have An Account. <Link className="link" to="/login">Login</Link></p>
                    
                    {isLoading && <Spinner animation="border" variant="primary" />}
                    {user?.email && <Alert variant="success">Login successfully!</Alert>}
                    {authError && <Alert className="fw-bold" variant="danger">{authError}</Alert>}
                    
                    <p>------------------------</p>

                    <button onClick={handleGoogleSignIn} className="fw-bold btn-g-auth"><img className="g-img" src='https://developers.google.com/identity/images/g-logo.png'/> Sign In</button>

                </form>
            </div>
        </div>
    );
};

export default Register;