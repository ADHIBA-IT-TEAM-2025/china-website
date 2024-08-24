import React from "react";
import './nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegramPlane, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import logo2 from '../Z-IMAGE/nystai without tri.png';  // Import the second logo
import { faBlog, faEnvelope, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons/faMapMarkedAlt";


export default function Footercn() {
    return (
        <>

            <footer class="footer-section">
                <div class="container">
                    <div class="footer-cta pt-5 ">
                        <div class="row">
                           
                            <div class="col-xl-4 col-md-4 mb-30">
                                <div class="single-cta">
                                    <FontAwesomeIcon icon={faMapMarkedAlt} className="custom-icon" />
                                    <div class="cta-text">
                                        <h4>Find us</h4>
                                        <span>Akshya Nagar 1st Block 1st Cross,China-560016 </span>
                                   </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-4 mb-30">
                                <div class="single-cta">
                                    <FontAwesomeIcon icon={faPhone} className="custom-icon" />
                                    <div class="cta-text">
                                        <h4>Call us</h4>
                                        <span>+91 1234567890</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-4 mb-30">
                                <div class="single-cta">
                                    <FontAwesomeIcon icon={faEnvelope} className="custom-icon" />
                                    <div class="cta-text">
                                        <h4>Mail us</h4>
                                        <span>contact@gmail.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="footer-content pt-5 pb-1">
                        <div class="row">
                            <div class="col-xl-4 col-lg-4 mb-50">
                                <div class="footer-widget">
                                    <div class="footer-widget-heading">
                                        <h3>Discription</h3>
                                    </div>
                                    <div class="footer-text mt-3">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                                    </div>
                                    <div class="footer-social-icon">
                                        <span>Follow us</span>
                                        <ul class="social_icon">
                                            <p><FontAwesomeIcon icon={faInstagram} style={{ color: '#E1306C' }} className="ms-3" /></p>
                                            <p><FontAwesomeIcon icon={faWhatsapp} style={{ color: '#25D366' }} className="ms-3" /></p>
                                            <p><FontAwesomeIcon icon={faYoutube} style={{ color: '#FF0000' }} className="ms-3" /></p>
                                            <p><FontAwesomeIcon icon={faTwitter} style={{ color: '#1DA1F2' }} className="ms-3" /></p>
                                            <p><FontAwesomeIcon icon={faFacebook} style={{ color: '#1877F2' }} className="ms-3" /></p>
                                            <p><FontAwesomeIcon icon={faTelegramPlane} style={{ color: '#0088CC' }} className="ms-3 " /></p>
                                            <p><FontAwesomeIcon icon={faXTwitter} style={{ color: '#fff' }} className="ms-3" /></p>
                                            <p><FontAwesomeIcon icon={faBlog} style={{ color: '#000' }} className="ms-3" /></p>
                                            <p><FontAwesomeIcon icon={faEnvelope} style={{ color: '#3e65cf' }} className="ms-3" /></p>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                                <div class="footer-widget">
                                    <div class="footer-widget-heading">
                                        <h3>Useful Links</h3>
                                    </div>
                                    <ul>
                                        <li><a href="#">Our Team</a></li>
                                        <li><a href="#">About Us</a></li>
                                        <li><a href="#">Our Gallery</a></li>
                                        <li><a href="#">Selection Process</a></li>
                                        <li><a href="#">FAQ</a></li>
                                        <li><a href="#">Sponsorship</a></li>
                                        <li><a href="#">Our Policies</a></li>
                                        <li><a href="#">Our Team</a></li>
                                        <li><a href="#">Contact us</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-4 col-md-6 ">
                                <div class="footer-widget">
                                    <div class="footer-widget-heading">
                                        <h3>Subscribe</h3>
                                    </div>
                                    <div class="footer-text mb-25">
                                        <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className=" " />

                    <div class="container">
                        <div class="row">
                            <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                                <div class="copyright-text">
                                    <p>SHENZHEN NYSTAI TECHNOLOGY COMPANY LIMITED</p>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                                <div class="footer-menu">
                                    <ul>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">Terms</a></li>
                                        <li><a href="#">Privacy</a></li>
                                        <li><a href="#">Policy</a></li>
                                        <li><a href="#">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </footer>



        </>
    )
}