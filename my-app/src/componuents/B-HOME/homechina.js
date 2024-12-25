import React, { useRef, useState, useEffect } from 'react';
import '../CSS/homechina.css';
import $ from 'jquery';
import Footercn from "../A-LAYOUT/Footercn";
import SplitType from 'split-type';
import { gsap } from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong, faArrowUpRightDots, faBoxesPacking, faCheck, faHandshake, faHourglass, faHourglassEnd, faPersonMilitaryPointing, faScrewdriverWrench, faServer } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Layoutchinna from '../A-LAYOUT/layoutchina';

export default function ChinnaHome() {

    const { t, i18n } = useTranslation()

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

            <Layoutchinna />


            <div className={`chinasite-landing-page ${hover}`}>
                <div
                    className="split right"
                    onMouseEnter={() => setHover("hover-right")}
                    onMouseLeave={() => setHover("")}
                >
                    <div className="hoverrrr">
                        <h6 className="mb-4 ">{t('supplyChainManagement')}</h6>
                        <span className="hover-container">
                            <Link to="/scmpage" style={{ color: "white", textDecoration: "none" }}> {t('largeFormat')}</Link>
                            <FontAwesomeIcon icon={faArrowRightLong} className="ms-3 icon-hidden" />
                        </span>
                        <span className="hover-container">
                            <Link to="/scmpage" style={{ color: "white", textDecoration: "none" }}> {t('commercialPrinting')}</Link>
                            <FontAwesomeIcon icon={faArrowRightLong} className="ms-3 icon-hidden" />
                        </span>
                        <span className="hover-container">
                            <Link to="/scmpage" style={{ color: "white", textDecoration: "none" }}> {t('turnKeySystems')}</Link>
                            <FontAwesomeIcon icon={faArrowRightLong} className="ms-3 icon-hidden" />
                        </span>
                    </div>
                </div>
                <div
                    className="split left"
                    onMouseEnter={() => setHover("hover-left")}
                    onMouseLeave={() => setHover("")}
                >

                    <div className="hoverrrr">
                        <h6 className="mb-4 ">{t('technologies')}</h6>
                        <span className="hover-container">
                            <Link to="/techpage" style={{ color: "white", textDecoration: "none" }}>{t('digitalSignage')}</Link>
                            <FontAwesomeIcon icon={faArrowRightLong} className="ms-3 icon-hidden" />
                        </span>
                        <span className="hover-container">
                            <Link to="/techpage" style={{ color: "white", textDecoration: "none" }}>{t('contentManager')}</Link>
                            <FontAwesomeIcon icon={faArrowRightLong} className="ms-3 icon-hidden" />
                        </span>
                        <span className="hover-container">
                            <Link to="/techpage" style={{ color: "white", textDecoration: "none" }}>{t('creativeServices')}</Link>
                            <FontAwesomeIcon icon={faArrowRightLong} className="ms-3 icon-hidden" />
                        </span>
                    </div>
                </div>
            </div>


            {/* OUR MISSION */}
            <section style={{ backgroundColor: " #dddddd6c" }}>
                <div className="mini-block-statement w-clearfix">
                    <h2 className="heading-34">{t('ourMission')}</h2>
                    <p className="text-block-60 col-9" style={{ color: "#8c8c8c" }} >{t('missionDescriptionWithBreak')}</p>
                </div>
            </section>

            {/* EMS */}
            <section >
                <div className="mini-block-statement w-clearfix">
                    <h6 className="heading-34 col-lg-7">{t('ems')}</h6>
                    <p className="text-block-60 col-9" style={{ color: "#8c8c8c" }} >
                    {t('emsp')}
                    </p>
                </div>

                <section className="services">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="card d-flex flex-column justify-content-center align-items-center">
                                    <div className="anim-layer"></div>
                                    <FontAwesomeIcon icon={faScrewdriverWrench} className="ms-3 icon-hidden-card" />
                                    <h2>{t('oem')}</h2>
                                    <p>{t('oemDesc')}</p>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="card d-flex flex-column justify-content-center align-items-center">
                                    <div className="anim-layer"></div>
                                    <FontAwesomeIcon icon={faPersonMilitaryPointing} className="ms-3 icon-hidden-card" />
                                    <h2>{t('customCreation')}</h2>
                                    <p>{t('customCreationDesc')}</p>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="card d-flex flex-column justify-content-center align-items-center">
                                    <div className="anim-layer"></div>
                                    <FontAwesomeIcon icon={faBoxesPacking} className="ms-3 icon-hidden-card" />
                                    <h2>{t('clientDesigns')}</h2>
                                    <p>{t('clientDesignsDesc')}</p>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="card d-flex flex-column justify-content-center align-items-center">
                                    <div className="anim-layer"></div>
                                    <FontAwesomeIcon icon={faServer} className="ms-3 icon-hidden-card" />
                                    <h2>{t('reverseDesign')}</h2>
                                    <p>{t('reverseDesignDesc')}</p>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-lg-3">
                                <div className="card d-flex flex-column justify-content-center align-items-center">
                                    <div className="anim-layer"></div>
                                    <FontAwesomeIcon icon={faArrowUpRightDots} className="ms-3 icon-hidden-card" />
                                    <h2>{t('productUpgrades')}</h2>
                                    <p>{t('productUpgradesDesc')}</p>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="card d-flex flex-column justify-content-center align-items-center">
                                    <div className="anim-layer"></div>
                                    <FontAwesomeIcon icon={faHandshake} className="ms-3 icon-hidden-card" />
                                    <h2>{t('ecoSolutions')}</h2>
                                    <p>{t('ecoSolutionsDesc')}</p>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="card d-flex flex-column justify-content-center align-items-center">
                                    <div className="anim-layer"></div>
                                    <FontAwesomeIcon icon={faCheck} className="ms-3 icon-hidden-card" />
                                    <h2>{t('prototyping')}</h2>
                                    <p>{t('prototypingDesc')}</p>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="card d-flex flex-column justify-content-center align-items-center">
                                    <div className="anim-layer"></div>
                                    <FontAwesomeIcon icon={faHourglassEnd} className="ms-3 icon-hidden-card" />
                                    <h2>{t('supplyChain')}</h2>
                                    <p>{t('supplyChainDesc')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </section>


            <Footercn />
        </>
    );
}
