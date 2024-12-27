import React, { useState, useEffect, useRef } from "react";
import { Link, Outlet } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import '../CSS/nav.css';
import logo1 from '../Z-IMAGE/triangle (6).png';
import logo2 from '../Z-IMAGE/nystai without tri.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import Formcn from "../A-LAYOUT/form";
import 'bootstrap/dist/css/bootstrap.min.css';
import i18next from '../../i18n';

const Layoutchinna = () => {
    const { t, i18n } = useTranslation();
    const [isOpen2, setIsOpen2] = useState(false);
    const [logo, setLogo] = useState(logo2);
    const [navbarHeight, setNavbarHeight] = useState(80);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const toggleOverlay2 = () => {
        setIsOpen2(!isOpen2);
    };

    const scrollValue = () => {
        const scroll = window.scrollY;
        const navbar = document.getElementById('navbar');

        if (scroll < 200) {
            navbar.classList.remove('BgColour');
            setLogo(logo2);
            setNavbarHeight(120);
        } else {
            navbar.classList.add('BgColour');
            setLogo(logo2);
            setNavbarHeight(70);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', scrollValue);
        return () => {
            window.removeEventListener('scroll', scrollValue);
        };
    }, []);

    useEffect(() => {
        // Check if the language is already set in localStorage
        const savedLanguage = localStorage.getItem("i18nextLng");

        if (!savedLanguage || savedLanguage.length > 2) {
            // Set Japanese as the default language if no language is set
            i18next.changeLanguage("jp");
            localStorage.setItem("i18nextLng", "jp");
        } else {
            // Keep Chinese as the default if the language is English or undefined
            if (savedLanguage !== "jp") {
                i18next.changeLanguage("jp");
                localStorage.setItem("i18nextLng", "jp");
            } else {
                i18next.changeLanguage(savedLanguage);
            }
        }
    }, []);

    const handleLanguageToggle = () => {
        const currentLanguage = localStorage.getItem("i18nextLng") || "jp";
        const newLanguage = currentLanguage === "jp" ? "en" : "jp";
        i18n.changeLanguage(newLanguage);
        localStorage.setItem("i18nextLng", newLanguage);
    };
    return (
        <>
            <div className="nav-cn-bg-main">
                <div id="navbar" className="navbar-cn-bg-main" style={{ height: `${navbarHeight}px` }}>
                    <ul className="navbar-cn-bg-main-ul">
                        <li className="menu-nav-cn n">
                            <OverlayNav />
                        </li>
                        <li>
                            <Link to="/landing"> <img src={logo} alt="Logo" className="navbar-logo" /></Link>
                        </li>
                        <li className="d-flex" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <div className="language-toggle ms-3">
                            {/* <button type="button" class="btn btn-light">Light</button */}
                                <button onClick={handleLanguageToggle} className="btn btn-light">
                                    {localStorage.getItem("i18nextLng") === "jp" ? "English" : "中国人"}
                                </button>
                            </div>
                            <span onClick={toggleOverlay2} style={{ cursor: "pointer" }}>
                                <h5>   <FontAwesomeIcon icon={faCircleUser} className="me-2 ms-3" />{t('contact')}</h5>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>

            <div>
                <div id="myNav" className="overlay" style={{ height: isOpen2 ? '100%' : '0%', cursor: "pointer" }}>
                    <div className="over-header">
                        <a className="closebtn" onClick={toggleOverlay2}> <FontAwesomeIcon icon={faCircleXmark} /></a>
                    </div>
                    <div className="overlay-content">
                        <Formcn />
                    </div>
                </div>
            </div>

            <Outlet />
        </>
    );
};

export default Layoutchinna;

function OverlayNav() {
    const [isOpen, setIsOpen] = useState(false);

    const openNav = () => {
        setIsOpen(true);
    };

    const closeNav = () => {
        setIsOpen(false);
    };

    const { t } = useTranslation();
    return (
        <div>
            <div className={`overlay-menu ${isOpen ? 'overlay-open-menu' : ''}`}>
                <a href="#" className="closebtn-menu" onClick={closeNav}>&times;</a>
                <div className="overlay-content-menu">
                    <div >
                        <p>   <Link to="/scmpage" style={{ color: "white", textDecoration: "none" }} >  {t('supplyChainManagement')}</Link></p>
                        <p>  <Link to="/techpage" style={{ color: "white", textDecoration: "none" }} > {t('technologies')}</Link></p>
                    </div>
                </div>
            </div>
            <h5 style={{ cursor: 'pointer' }} onClick={openNav}>
                &#9776; {t('menu')}
            </h5>
        </div>
    );
}

