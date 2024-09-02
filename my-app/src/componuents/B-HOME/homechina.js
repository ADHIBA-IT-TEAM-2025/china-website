import React, { useRef, useState, useEffect } from 'react';
import '../CSS/homechina.css';
import landingv2 from '../Z-IMAGE/755-450.mp4';
import $ from 'jquery';
import Footercn from "../A-LAYOUT/Footercn";
import SplitType from 'split-type'; // For SplitType
import { gsap } from 'gsap'; // For gsap animations
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // For FontAwesome icons
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'; // For the specific icon
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook

export default function ChinnaHome() {
    const { t, i18n } = useTranslation(); // Initialize the useTranslation hook

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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

        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateText();
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, {
            threshold: 0.5,
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
            <div style={{ position: "relative", width: "100%", height: "100%", marginBottom: "-10px" }}>
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
                        zIndex: 0,
                    }}>{t('allThingsVisual')}
                </h1>
            </div>

            <div className={`chinasite-landing-page ${hover}`}>
                <div
                    className="split right"
                    onMouseEnter={() => setHover("hover-right")}
                    onMouseLeave={() => setHover("")}
                >
                    <div className="hoverrrr">
                        <h6 className="mb-5">{t('technologies')}</h6>
                        <span className="hover-container">
                            {t('digitalSignage')}
                            <FontAwesomeIcon icon={faArrowRightLong} className="ms-3 icon-hidden" />
                        </span>
                        <span className="hover-container">
                            {t('contentManager')}
                            <FontAwesomeIcon icon={faArrowRightLong} className="ms-3 icon-hidden" />
                        </span>
                        <span className="hover-container">
                            {t('creativeServices')}
                            <FontAwesomeIcon icon={faArrowRightLong} className="ms-3 icon-hidden" />
                        </span>
                        <span className="hover-container">
                            {t('fieldSupport')}
                            <FontAwesomeIcon icon={faArrowRightLong} className="ms-3 icon-hidden" />
                        </span>
                        <div className="button-right-left-cn">
                            <button className="btn custom-btn mt-4">
                                <Link to="/techpage">{t('learnMore')}</Link>
                            </button>
                        </div>
                    </div>
                </div>
                <div
                    className="split left"
                    onMouseEnter={() => setHover("hover-left")}
                    onMouseLeave={() => setHover("")}
                >
                    <div className="hoverrrr">
                        <h6 className="mb-5">{t('supplyChainManagement')}</h6>
                        <span className="hover-container">
                            {t('largeFormat')}
                            <FontAwesomeIcon icon={faArrowRightLong} className="ms-3 icon-hidden" />
                        </span>
                        <span className="hover-container">
                            {t('commercialPrinting')}
                            <FontAwesomeIcon icon={faArrowRightLong} className="ms-3 icon-hidden" />
                        </span>
                        <span className="hover-container">
                            {t('turnKeySystems')}
                            <FontAwesomeIcon icon={faArrowRightLong} className="ms-3 icon-hidden" />
                        </span>
                        <span className="hover-container">
                            {t('customFigures')}
                            <FontAwesomeIcon icon={faArrowRightLong} className="ms-3 icon-hidden" />
                        </span>
                        <span className="hover-container">
                            {t('experientialMarketing')}
                            <FontAwesomeIcon icon={faArrowRightLong} className="ms-3 icon-hidden" />
                        </span>
                        <div className="button-right-left-cn">
                            <button className="btn custom-btn mt-4">
                                <Link to="/scmpage">{t('learnMore')}</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            <section>
                <div className="mini-block-statement w-clearfix">
                    <h2 className="heading-34">{t('ourMission')}</h2>
                    <p className="text-block-60">
                        {t('missionDescription')}
                    </p>
                </div>
            </section>

            <Footercn />
        </>
    );
}
