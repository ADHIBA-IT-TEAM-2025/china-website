import React from "react";
import '../CSS/nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegramPlane, faWhatsapp, faYoutube, faInstagram, faTwitter, faFacebook, faXTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faBlog, faEnvelope, faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
import appstore1 from '../Z-IMAGE/appstore-1 (1).svg';
import appstore2 from '../Z-IMAGE/appstore-1.svg';
import { useTranslation } from 'react-i18next';

export default function Footercn() {

    const { t } = useTranslation();

    return (
        <>
            <footer className="footer-section">
                <div className="container">
                    
                    <div className="footer-cta pt-5">
                        <div className="row">
                            <div className="col-xl-4 col-md-4 ">
                                <div className="single-cta">

                                    <div className="cta-text">
                                        <h4>   <FontAwesomeIcon icon={faMapMarkedAlt} className="custom-icon me-3" />{t('findUs')}</h4>
                                        <span >{t('address')}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 ">
                                <div className="single-cta">

                                    <div className="cta-text">
                                        <h4>  <FontAwesomeIcon icon={faPhone} className="custom-icon me-3" />{t('callUs')}</h4>
                                        <span>{t('phoneNumber')}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 ">
                                <div className="single-cta">

                                    <div className="cta-text">
                                        <h4>  <FontAwesomeIcon icon={faEnvelope} className="custom-icon me-3" />{t('mailUs')}</h4>
                                        <span>{t('emailAddress')}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="footer-content pt-5 ">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4">
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <h3>{t('description')}</h3>
                                    </div>
                                    <div className="footer-text mt-3">
                                        <p>{t('descriptionText')}</p>
                                    </div>
                                    <div className="footer-social-icon">
                                        <span>{t('followUs')}</span>
                                        <ul className="social_icon">
                                            <p><FontAwesomeIcon icon={faLinkedin} style={{ color: '#E1306C' }} className="ms-3" /></p>
                                            <p><FontAwesomeIcon icon={faInstagram} style={{ color: '#E1306C' }} className="ms-3" /></p>
                                            <p><FontAwesomeIcon icon={faWhatsapp} style={{ color: '#25D366' }} className="ms-3" /></p>
                                            <p><FontAwesomeIcon icon={faYoutube} style={{ color: '#FF0000' }} className="ms-3" /></p>
                                            <p><FontAwesomeIcon icon={faTwitter} style={{ color: '#1DA1F2' }} className="ms-3" /></p>
                                            <p><FontAwesomeIcon icon={faFacebook} style={{ color: '#1877F2' }} className="ms-3" /></p>
                                            <p><FontAwesomeIcon icon={faTelegramPlane} style={{ color: '#0088CC' }} className="ms-3" /></p>
                                            <p><FontAwesomeIcon icon={faXTwitter} style={{ color: '#fff' }} className="ms-3" /></p>
                                            <p><FontAwesomeIcon icon={faBlog} style={{ color: '#000' }} className="ms-3" /></p>
                                            <p><FontAwesomeIcon icon={faEnvelope} style={{ color: '#3e65cf' }} className="ms-3" /></p>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 ">
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <h3>{t('usefulLinks')}</h3>
                                    </div>
                                    <ul>
                                        <li><a href="#">{t('ourTeam')}</a></li>
                                        <li><a href="#">{t('aboutUs')}</a></li>
                                        <li><a href="#">{t('ourGallery')}</a></li>
                                        <li><a href="#">{t('selectionProcess')}</a></li>
                                        <li><a href="#">{t('faq')}</a></li>
                                        <li><a href="#">{t('sponsorship')}</a></li>
                                        <li><a href="#">{t('ourPolicies')}</a></li>
                                        <li><a href="#">{t('ourTeam')}</a></li>
                                        <li><a href="#">{t('contactUs')}</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6">
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <h3>{t('subscribe')}</h3>
                                    </div>
                                    <div className="footer-text">
                                        <p>{t('subscribeText')}</p>
                                        <a className="me-4" href="https://play.google.com/store/apps/details?id=com.sdfornystalnew&pcampaignid=web_share" target="_blank" rel="noreferrer">
                                            <img className="news-app-promo__app-store" src={appstore2} width="161" alt="nys-img" />
                                        </a>
                                        <a href="https://apps.apple.com/in/app/nystai/id6503040541" target="_blank" rel="noreferrer">
                                            <img className="news-app-promo__play-store" src={appstore1} width="161" alt="nys-img" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <hr className="" />
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                                <div className="copyright-text">
                                    <p>{t('companyName')}</p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                                <div className="footer-menu">
                                    <ul>
                                        <li><a href="#">{t('home')}</a></li>
                                        <li><a href="#">{t('terms')}</a></li>
                                        <li><a href="#">{t('privacy')}</a></li>
                                        <li><a href="#">{t('policy')}</a></li>
                                        <li><a href="#">{t('contact')}</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </footer>

        </>
    );
}
