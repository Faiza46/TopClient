import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Footer.css'
import { Link } from 'react-router-dom';
import facebook from '../../../images/facebook.png'
import linkedin from '../../../images/linkedin.png'
import twitter from '../../../images/twitter.png'
import instagram from '../../../images/instagram.png'

const Footer = () => {
    return (

        <div className='footer mt-5 p-5'>
            <div className='container'>
                <div className='row'>
                    <div className="col-6 col-md-6 col-lg-3 me-5">
                        <div className='row '>
                            <div className='col-4 col-md-2 mb-3'>
                                <Link to="/"><img className='socal-image img-fluid' src={facebook} alt="facebook icon" /></Link>

                            </div>
                            <div className='col-4 col-md-2 mb-3'>
                                <Link to="/"><img className='socal-image img-fluid' src={linkedin} alt="linkedin icon" /></Link>

                            </div>
                            <div className='col-4 col-md-2 mb-3'>
                                <Link to="/"><img className='socal-image img-fluid' src={twitter} alt="twitter icon" /></Link>

                            </div>
                            <div className='col-4 col-md-2 mb-3'>
                                <Link to="/"><img className='socal-image img-fluid' src={instagram} alt="instagram icon" /></Link>

                            </div>

                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-2">
                        <h5 className="text-end text-uppercase">Customer Care</h5>
                        <ul>
                            <li><Link href="#">Help Center</Link></li>
                            <li><Link href="#">How to Buy</Link></li>
                            <li><Link href="#">Returns & Refunds</Link></li>
                            <li><Link href="#">Contact Us</Link></li>
                            <li><Link href="#">Terms & Conditions</Link></li>
                        </ul>

                    </div>
                    <div className="col-12 col-md-6 col-lg-2">
                        <h5 className="text-end text-uppercase">Earn With Top Client</h5>
                        <ul>
                            <li><Link href="#">Sell on Top Client</Link></li>
                            <li><Link href="#">Code of Conduct</Link></li>
                            <li><Link href="#">Join the Daraz Affiliate Program</Link></li>

                        </ul>

                    </div>
                    <div className="col-12 col-md-6 col-lg-2">
                        <h5 className="text-end text-uppercase">Top Client</h5>
                        <ul>
                            <li><Link href="#">About Top Client</Link></li>
                            <li><Link href="#">Privacy Policy</Link></li>
                            <li><Link href="#">Top Client Exclusives</Link></li>
                            <li><Link href="#">Top Client Donates</Link></li>
                            <li><Link href="#">Top Client Blog</Link></li>
                        </ul>

                    </div>

                    <div className='row'>
                        <div className="col-12 col-md-6 col-lg-3 me-5">
                            <h6 className="text-start mt-3">Copyright © 2023 Top Client website with Faiza Huma</h6>
                        </div>


                    </div>



                </div>

            </div>


        </div>



    );
};

export default Footer;