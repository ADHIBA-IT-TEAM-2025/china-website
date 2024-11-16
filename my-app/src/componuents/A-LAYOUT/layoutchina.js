import React, { useState, useEffect, useRef } from "react";
import { Link, Outlet } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import '../CSS/nav.css';
import logo1 from '../Z-IMAGE/triangle (6).png';
import logo2 from '../Z-IMAGE/nystai without tri.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faCircleXmark, faEarthOceania } from "@fortawesome/free-solid-svg-icons";
import Formcn from "../A-LAYOUT/form";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';


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

    const changeLanguage = () => {
        const currentLanguage = i18n.language;
        const newLanguage = currentLanguage === 'en' ? 'cn' : 'en';
        i18n.changeLanguage(newLanguage);
    };

    return (
        <>
            <div className="nav-cn-bg-main">
                <div id="navbar" className="navbar-cn-bg-main" style={{ height: `${navbarHeight}px` }}>
                    <ul className="navbar-cn-bg-main-ul">
                        <li className="menu-nav-cn n">
                            <Drawer />
                        </li>
                        <li>
                            <Link to="/landing"> <img src={logo} alt="Logo" className="navbar-logo" /></Link>
                        </li>
                        <li className="d-flex">
                            <div >
                                <Dropdown className="custom-dropdown me-3">
                                    <Dropdown.Toggle id="dropdown-basic">
                                        <FontAwesomeIcon
                                            icon={faEarthOceania}
                                            style={{ fontSize: "20px" }}
                                            spin
                                        />
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu onClick={changeLanguage}>
                                        <Dropdown.Item>CN/EN</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <span onClick={toggleOverlay2}>
                                <FontAwesomeIcon icon={faCircleUser} /> {t('contact')}
                            </span>
                        </li>
                    </ul>
                </div>
            </div>

            <div>
                <div id="myNav" className="overlay" style={{ height: isOpen2 ? '100%' : '0%' }}>
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

const Drawer = () => {

    const [isOpen, setIsOpen] = useState(false);
    const drawerRef = useRef(null);
    const { t } = useTranslation();

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (drawerRef.current && !drawerRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <>

            <div>
                <a onClick={toggleDrawer}>  &#9776; {t('menu')} </a>
                {isOpen && <div className="backdrop" onClick={toggleDrawer}></div>}
                <div
                    ref={drawerRef}
                    className={`drawer drawer-left ${isOpen ? 'show' : ''}`}
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="drawer-1-title"
                    aria-hidden={!isOpen}
                    id="drawer-1"
                >
                    <div className="drawer-content drawer-content-scrollable" role="document">
                        <div className="drawer-header">
                            <p className="drawer-title" id="drawer-1-title" onClick={toggleDrawer} aria-label="Close">&times; {t('CLOSE')}</p>
                        </div>
                        <div className="drawer-body">
                            <div style={{ textAlign: "end" }}>
                                <p>   <Link to="/scmpage"> {t('supplyChainManagement')}</Link></p>
                                <p>  <Link to="/techpage"> {t('technologies')}</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};
