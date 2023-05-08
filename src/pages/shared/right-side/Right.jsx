import React from 'react';
import { Button } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitch } from "react-icons/fa";
import Qzone from '../Q-zone/Qzone';
import './Right.css'


const Right = () => {
    return (
        <div>
            <h4>
                Login with
            </h4>
            <div>
                <Button variant="outline-info" className='mb-2'><FaGoogle /> Login with Google</Button>
                <Button variant="outline-secondary"><FaGithub /> Login with GitHub</Button>
            </div>
            <div className='my-4'>
                <h4>Find us on</h4>
                <div>
                    <h6 className='border rounded p-2'><FaFacebook></FaFacebook>  Facebook</h6>
                    <h6 className='border rounded p-2'><FaTwitch></FaTwitch> Twitter</h6>
                    <h6 className='border rounded p-2'><FaInstagram></FaInstagram> Instagram</h6>
                </div>
            </div>
            <Qzone></Qzone>
            <div className='bg-container text-white text-center p-4 my-4'>
                <h2 className='fw-bold'>Create an Amazing Newspaper</h2>
                <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                <Button variant="danger">Learn More</Button>
            </div>
        </div>
    );
};

export default Right;