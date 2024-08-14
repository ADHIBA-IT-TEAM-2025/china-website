import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import './nav.css';
import trinav from '../Z-IMAGE/triangle (6).png';
import logo1 from '../Z-IMAGE/triangle (6).png';  // Import the first logo
import logo2 from '../Z-IMAGE/nystai without tri.png';  // Import the second logo
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faEarthAmericas, faLanguage } from "@fortawesome/free-solid-svg-icons";

const Layoutchinna = () => {
    const [navActive, setNavActive] = useState(false);
    const [navOpen, setNavOpen] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const openNav = () => {
        setNavOpen(true);
    };

    const closeNav = () => {
        setNavOpen(false);
    };

    return (
        <>
            <nav className="nav navbar navbar-china-cn sticky-top">
                <div className="container">
                    <div className="navbar-brand">
                        <div>
                            <div id="myNav" className={`overlay ${navOpen ? 'open' : ''}`}>
                                <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
                                <div className="overlay-content">
                                    <a href="#">About</a>
                                    <a href="#">Services</a>
                                    <a href="#">Clients</a>
                                    <a href="#">Contact</a>
                                </div>
                            </div>
                        
                            <span style={{ cursor: "pointer" }} onClick={openNav}>&#9776; MENU</span>
                        </div>
                    </div>
                    <ul className={`navbar-nav ${navActive ? 'active' : ''}`}>
                    <img src={scrollY === 0 ? logo1 : logo2} alt="Logo" className="navbar-logo" /> 
                    </ul>
                    <button className="mode-toggle-container" id="mode-toggle">
                        <FontAwesomeIcon icon={faCircleUser} shake className="me-3"/> 
                        <FontAwesomeIcon icon={faEarthAmericas} />
                    </button>
                </div>
            </nav>
            
            <Outlet />
        </>
    );
};

export default Layoutchinna;
