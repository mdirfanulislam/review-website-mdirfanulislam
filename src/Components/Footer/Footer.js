import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faFacebookSquare, faGoogle, faInstagramSquare, faTwitterSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import { FormControl, InputGroup, Row } from 'react-bootstrap';
import Button from '@restart/ui/esm/Button';
import { faIdCard } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
    library.add(fab, faFacebookSquare, faTwitterSquare, faInstagramSquare, faYoutubeSquare, faGoogle, faIdCard);

    AOS.init({
        duration: 1200,
      });

    return (
        <div data-aos="fade-up" className=" bg-primary p-5">
            <Row xs={1} md={2}>
            <div>
                <h2 className="text-white">Stay Updated</h2>
                <InputGroup className="mb-3">
                <FormControl
                    placeholder="Email Eddress"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
                <Button className="fw-bold bg-primary border border-1 rounded-1 text-white p-3"> Subscribe Now</Button>
                </InputGroup>
                <Row xs={2} md={2} className="">
                <div className="text-white">
                <h5 className="my-4 pb-4">About Us</h5>
                <p>Online Learning</p>
                <p>About Us</p>
                <p>Careers</p>
                <p>Press Center</p>
                <p>Become An Instructor</p>
                </div>
                <div className="text-white">
                <h5 className="my-4 pb-4">Campus</h5>
                <p>Our Plans</p>
                <p>Free Trial</p>
                <p>Academic Solutions</p>
                <p>Business Solutions</p>
                <p>Government Solutions</p>
                </div>
                </Row>
            </div>
            <div className="">
                <h2 className="text-white">Let's Get Social</h2>
                <Row xs={5} md={5} className="mx-3">
                <h1><FontAwesomeIcon icon={faFacebookSquare} /></h1>
                <h1><FontAwesomeIcon icon={faTwitterSquare} /></h1>
                <h1><FontAwesomeIcon icon={faGoogle} /></h1>
                <h1><FontAwesomeIcon icon={faInstagramSquare} /></h1>
                <h1><FontAwesomeIcon icon={faYoutubeSquare} /></h1>
                </Row>
                <Row xs={2} md={2} className="">
                <div className="text-white">
                <h5 className="my-5">Study</h5>
                <p>Admissions Policy</p>
                <p>Getting Started</p>
                <p>Online Application</p>
                <p>Visa Information</p>
                <p>Tuition Calculator</p>
                </div>
                <div className="text-white">
                <h5 className="my-5">Support</h5>
                <p>Support</p>
                <p>Contact Us</p>
                <p>System Requirements</p>
                <p>Register Activation Key</p>
                <p>Site Feedback</p>
                </div>
                </Row>
            </div>
        </Row>
                <p className="justify-content-center bg-dark fw-bold text-white py-4 mt-2">Copyright ©2022 All rights reserved | made by <FontAwesomeIcon icon={faIdCard} /> Md Irfan
                </p>
        </div>
    );
};

export default Footer;