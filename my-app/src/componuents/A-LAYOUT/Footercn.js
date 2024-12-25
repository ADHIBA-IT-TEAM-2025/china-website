import React from "react";
import '../CSS/nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegramPlane, faWhatsapp, faYoutube, faInstagram, faTwitter, faFacebook, faXTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faBlog, faEnvelope, faMapMarkedAlt, faCircleUser } from "@fortawesome/free-solid-svg-icons";
import appstore1 from '../Z-IMAGE/appstore-1 (1).svg';
import appstore2 from '../Z-IMAGE/appstore-1.svg';
import { useTranslation } from 'react-i18next';

export default function Footercn() {

    const { t } = useTranslation();

    return (
        <>

<section className="footer-cn">
    <footer className="footer-section">
        <div className="container">
            <div className="footer-cta pt-5 pb-5">
                <div className="row">
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="fas fa-map-marker-alt"></i>
                            <div className="cta-text">
                                <div className="footer-widget-heading mt-3">
                                    <h3>{t('findUs')}</h3>
                                </div>
                                <span>{t('address')}</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="fas fa-phone"></i>
                            <div className="cta-text">
                                <div className="footer-widget-heading mt-3">
                                    <h3>{t('callUs')}</h3>
                                </div>
                                <span>+86 132475 00065</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="far fa-envelope-open"></i>
                            <div className="cta-text">
                                <div className="footer-widget-heading mt-3">
                                    <h3>{t('mailUs')}</h3>
                                </div>
                                <span>admin@nystai.cn</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-content pt-5 pb-5">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 mb-50">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3>{t('connectUs')}</h3>
                            </div>
                            <div className="footer-logo d-flex">
                                <a href="#"><img src={appstore1} className="img-fluid" alt="logo" /></a>
                                <a href="#"><img src={appstore2} className="img-fluid" alt="logo" /></a>
                            </div>
                            <div className="footer-social-icon">
                                <div className="footer-widget-heading mt-3">
                                    <h3>{t('connectUs')}</h3>
                                </div>
                                <a href="#"><FontAwesomeIcon icon={faWhatsapp} /></a>
                                <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                                <a href="#"><FontAwesomeIcon icon={faEnvelope} /></a>
                                <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
                                <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
                                <a href="#"><FontAwesomeIcon icon={faXTwitter} /></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3>{t('usefulLinks')}</h3>
                            </div>
                            <ul>
                                <li><a href="#">{t('home')}</a></li>
                                <li><a href="#">{t('about')}</a></li>
                                <li><a href="#">{t('services')}</a></li>
                                <li><a href="#">{t('portfolio')}</a></li>
                                <li><a href="#">{t('contact')}</a></li>
                                <li><a href="#">{t('latestNews')}</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3>{t('subscribe')}</h3>
                            </div>
                            <div className="footer-text mb-25">
                                <p>{t('subscribeText')}</p>
                            </div>
                            <div className="subscribe-form">
                                <form action="#">
                                    <input type="text" placeholder={t('emailPlaceholder')} />
                                    <button><FontAwesomeIcon icon={faTelegramPlane} /></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                        <div className="copyright-text">
                            <p>© 2024 {t('copyright')} All rights reserved.</p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                        <div className="footer-menu">
                            <ul>
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
</section>


        </>
    );
}
