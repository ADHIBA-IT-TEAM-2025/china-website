import React, { useRef, useState } from 'react';
import './homechina.css';
import landingv2 from '../Z-IMAGE/755-450.mp4';
import $ from 'jquery';
import Footercn from "../A-LAYOUT/Footercn";
import { useEffect } from 'react'; // For useEffect hook
import SplitType from 'split-type'; // For SplitType
import { gsap } from 'gsap'; // For gsap animations
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // For FontAwesome icons
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'; // For the specific icon


export default function ChinnaHome() {
    const [hover, setHover] = useState("");

    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);

    const toggleVideo = () => {
        if (videoRef.current.paused) {
            videoRef.current.play();
            setIsPlaying(true);
        } else {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };


    $(window).scroll(function () {
        if ($(document).scrollTop() > 50) {
            $('.nav').addClass('affix');
            console.log("OK");
        } else {
            $('.nav').removeClass('affix');
        }
    });



    const textRef = useRef(null);

    useEffect(() => {
        const myText = new SplitType(textRef.current);


        const animateText = () => {
            gsap.fromTo(
                '.char',
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.05,
                    duration: 0.3,
                    ease: 'power3.out',
                }
            );
        };

        // IntersectionObserver callback
        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateText();
                }
            });
        };

        // Create IntersectionObserver
        const observer = new IntersectionObserver(observerCallback, {
            threshold: 0.5, // Trigger when 50% of the section is visible
        });

        if (textRef.current) {
            observer.observe(textRef.current);
        }

        return () => {
            if (textRef.current) {
                observer.unobserve(textRef.current);
            }
        };
    }, []);

    return (
        <>

            <div style={{ position: "relative", width: "100%", height: "100%" }}>
                <video
                    src={landingv2}
                    autoPlay
                    muted
                    loop
                    type="video/mp4"
                    style={{ width: "100%", height: "100%" }}
                />
                <h1
                    className="video-text-animation-cn"
                    ref={textRef}
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        color: "white",
                        fontSize: "4.5em",
                        textAlign: "center",
                        textTransform: "uppercase",
                        zIndex: 1,
                    }}>All Things Visual
                </h1>

            </div>




            <div className={` chinasite-landing-page ${hover}`}>
                <div
                    className="split right"
                    onMouseEnter={() => setHover("hover-right")}
                    onMouseLeave={() => setHover("")}
                >
                    <div className="hoverrrr">
                        <h6 className="mb-5">TECHNOLOGIES</h6>
                        <span className="hover-container"> Digital signage<FontAwesomeIcon icon={faArrowRightLong} className="ms-3 icon-hidden" /></span>
                        <span className="hover-container">content manager<FontAwesomeIcon icon={faArrowRightLong} className="ms-3 icon-hidden" /></span>
                        <span className="hover-container"> creative services<FontAwesomeIcon icon={faArrowRightLong} className="ms-3 icon-hidden" /></span>
                        <span className="hover-container">field support<FontAwesomeIcon icon={faArrowRightLong} className="ms-3 icon-hidden" /></span>
                        <span className="hover-container">field support<FontAwesomeIcon icon={faArrowRightLong} className="ms-3 icon-hidden" /></span>
                        <div className="button-right-left-cn">
                            <button className="btn custom-btn mt-4" >Learn More</button>
                        </div>
                    </div>
                </div>
                <div
                    className="split left"
                    onMouseEnter={() => setHover("hover-left")}
                    onMouseLeave={() => setHover("")} nonce=""
                >
                    <div className="hoverrrr">
                        <h6 className="mb-5">SUPPLY CHAIN MANAGEMENT </h6>
                        <span className="hover-container"> Large Format<FontAwesomeIcon icon={faArrowRightLong} className="ms-3 icon-hidden" /></span>
                        <span className="hover-container"> Commercial Printing<FontAwesomeIcon icon={faArrowRightLong} className="ms-3 icon-hidden" /></span>
                        <span className="hover-container">turn - key systems<FontAwesomeIcon icon={faArrowRightLong} className="ms-3 icon-hidden" /></span>
                        <span className="hover-container"> Custom figures<FontAwesomeIcon icon={faArrowRightLong} className="ms-3 icon-hidden" /></span>
                        <span className="hover-container"> experiential marketing<FontAwesomeIcon icon={faArrowRightLong} className="ms-3 icon-hidden" /></span>
                        <div className="button-right-left-cn">
                            <button className="btn custom-btn mt-4" >Learn More</button>
                        </div>
                    </div>
                </div>
            </div>




            <section>
                <div className="mini-block-statement w-clearfix">
                    <h2 className="heading-34">Our Mission</h2>
                    <p className="text-block-60">
                        At NYSTAI, we specialize in creating memorable experiences through strategy,
                        content, innovation and technology. We transform physical and digital spaces
                        to create unforgettable moments with updated trends and innovation to provide
                        visual solutions for our partners - continuing to provide<br /> All Things Visual.
                    </p>
                </div>
            </section>



            <Footercn />
        </>
    );
}
