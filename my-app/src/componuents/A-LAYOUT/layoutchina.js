import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import './nav.css';
import logo1 from '../Z-IMAGE/triangle (6).png';  // Import the first logo
import logo2 from '../Z-IMAGE/nystai without tri.png';  // Import the second logo
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faEarthAmericas, faLanguage } from "@fortawesome/free-solid-svg-icons";

const Layoutchinna = () => {
    const [active, setActive] = useState(false);
    const [hoveredItem, setHoveredItem] = useState(null); // State to track hovered item

    const menuToggle = () => {
        setActive(!active);
    };

    // Map each menu item to a specific image URL
    const images = {
        Home: "https://images.unsplash.com/photo-1453989799106-bbad8d7b5191?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80",
        SOLUTION: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
        PRODUCT: "https://images.unsplash.com/photo-1506702315536-dd8b83e2dcf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
        SERVICES: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
        PROTECTPLAN: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
        Contact: "https://images.unsplash.com/photo-1506702315536-dd8b83e2dcf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
    };

    return (
        <>
            <div className={`fullPageMenu ${active ? 'active' : ''}`} id="nav">
                <div className="banner">
                    {/* Display the image based on the hovered item */}
                    <img
                        src={hoveredItem ? images[hoveredItem] : images.Home}
                        alt="banner"
                    />
                </div>
                <div className="nav">
                    <ul>
                        {/* Assign hover handlers to each navigation link */}
                        {Object.keys(images).map((item) => (
                            <li key={item}>
                                <a
                                    href="#"
                                    data-text={item}
                                    onMouseEnter={() => setHoveredItem(item)}
                                    onMouseLeave={() => setHoveredItem(null)}
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <span
                    className={`menuicon ${active ? 'active' : ''}`}
                    id="toggle"
                    onClick={menuToggle}
                ></span>
            </div>

            <Outlet />
        </>
    );
};

export default Layoutchinna;
