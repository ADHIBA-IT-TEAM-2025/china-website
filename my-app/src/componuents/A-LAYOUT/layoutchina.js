import React, { useState, useEffect, useRef } from "react";
import { Link, Outlet } from "react-router-dom";
import './nav.css';
import logo1 from '../Z-IMAGE/triangle (6).png';
import logo2 from '../Z-IMAGE/nystai without tri.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import Formcn from "../A-LAYOUT/form";
import 'bootstrap/dist/css/bootstrap.min.css';



const Layoutchinna = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    const [isOpen2, setIsOpen2] = useState(false);
    const [logo, setLogo] = useState(logo1); // State to manage the logo
    const [navbarHeight, setNavbarHeight] = useState(80); // State to manage navbar height


    const toggleOverlay2 = () => {
        setIsOpen2(!isOpen2);
    };

    const scrollValue = () => {
        const scroll = window.scrollY;
        const navbar = document.getElementById('navbar');

        if (scroll < 200) {
            navbar.classList.remove('BgColour');
            setLogo(logo1); // Set logo to logo1 when scroll is less than 200
            setNavbarHeight(120); // Set navbar height to 80px when scroll is less than 200
        } else {
            navbar.classList.add('BgColour');
            setLogo(logo2); // Change logo to logo2 when scrolled down
            setNavbarHeight(70); // Change navbar height to 40px when scrolled down
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', scrollValue);
        return () => {
            window.removeEventListener('scroll', scrollValue);
        };
    }, []);

    return (
        <>

            <div className="nav-cn-bg-main">
                <div id="navbar" className="navbar-cn-bg-main" style={{ height: `${navbarHeight}px` }}>
                    <ul className=" navbar-cn-bg-main-ul">

                        <li className="menu-nav-cn n">
                            <Drawer />
                        </li>
                        <li>
                            <Link to="landing"> <img src={logo} alt="Logo" className="navbar-logo" /></Link>
                        </li>
                        <li>
                            <span onClick={toggleOverlay2}>
                                <FontAwesomeIcon icon={faCircleUser} /> CONTACT
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
        <div>
            <a onClick={toggleDrawer}  >  &#9776; MENU </a>
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
                        <p className="drawer-title" id="drawer-1-title" onClick={toggleDrawer} aria-label="Close">&times; Close </p>
                    </div>
                    <div className="drawer-body">
                        <div style={{ textAlign: "end" }}>
                            <p>Inspiring Greatness </p>
                            <p>Models</p>
                            <p>Bespoke</p>
                            <p>Ownership</p>
                            <p>Provenance</p>
                            <p>Boutique</p>
                            <p>Muse Arts Programme </p>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    );
};



