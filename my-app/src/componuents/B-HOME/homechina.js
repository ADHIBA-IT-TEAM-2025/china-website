import React, { useRef, useState, useEffect } from 'react';
import '../CSS/homechina.css';
import $ from 'jquery';
import Footercn from "../A-LAYOUT/Footercn";
import SplitType from 'split-type';
import { gsap } from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
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

                        <div className="button-right-left-cn">
                            <button className="btn custom-btn mt-4">
                                <Link to="/scmpage">{t('learnMore')}</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            <section style={{backgroundColor:" #eceaea;"}}>
                <div className="mini-block-statement w-clearfix">
                    <h2 className="heading-34">{t('ourMission')}</h2>
                    <p className="text-block-60" dangerouslySetInnerHTML={{ __html: t('missionDescriptionWithBreak') }} />
                </div>
            </section>

            <section>
                <div className="mini-block-statement w-clearfix">
                    <h6 className="heading-34">{t('ems')}</h6>
                    <p className="text-block-60" dangerouslySetInnerHTML={{ __html: t('emsp') }} />
                </div>

                <section class="services mb-5">
                    <div class="container ">
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="card shadow p-5 d-flex flex-column justify-content-center align-items-center">
                                    <div class="anim-layer"></div>
                                   <FontAwesomeIcon icon={faArrowRightLong} className="ms-3 icon-hidden-card" />
                                    <h2>Original Equipment Manufacturer (OEM) </h2>
                                    <p class="">Nystai acts as an OEM, manufacturing electronics products for companies under their brand names. We offer a full range of services, from sourcing components to assembling and testing the final product, ensuring that each item meets rigorous quality standards and is delivered on time. </p>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="card shadow p-5 d-flex flex-column justify-content-center align-items-center">
                                    <div class="anim-layer"></div>
                                   <FontAwesomeIcon icon={faArrowRightLong} className="ms-3 icon-hidden-card" />
                                    <h2>Custom Product Design and Manufacturing </h2>
                                    <p class=" mb-0">We provide customized product design and manufacturing services, working closely with clients to develop tailored electronic solutions. From conceptualization to final production, Nystai ensures that each product aligns with customer specifications, delivering innovative and reliable outcomes. </p>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="card shadow p-5 d-flex flex-column justify-content-center align-items-center">
                                    <div class="anim-layer"></div>
                                   <FontAwesomeIcon icon={faArrowRightLong} className="ms-3 icon-hidden-card" />
                                    <h2>Customer-Supplied Designs</h2>
                                    <p class=" mb-0">For customers with pre-existing designs, Nystai offers manufacturing expertise to bring those designs to life. We handle everything from sourcing materials to production, ensuring that the final product adheres to design specifications and is manufactured with precision and quality. </p>
                                </div>
                            </div>
                        </div>
                        <div class="row mt-4">
                            <div class="col-lg-4">
                                <div class="card shadow p-5 d-flex flex-column justify-content-center align-items-center">
                                    <div class="anim-layer"></div>
                                   <FontAwesomeIcon icon={faArrowRightLong} className="ms-3 icon-hidden-card" />
                                    <h2>Reverse Engineering Services </h2>
                                    <p class=" mb-0">Nystai offers reverse engineering services to analyze and replicate existing products. We dismantle, study, and recreate electronic components to help clients develop improved versions or create compatible replacements, ensuring continuity and enhancement of their product offerings.</p>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="card shadow p-5 d-flex flex-column justify-content-center align-items-center">
                                    <div class="anim-layer"></div>
                                   <FontAwesomeIcon icon={faArrowRightLong} className="ms-3 icon-hidden-card" />
                                    <h2>Product Upgrades for Customers</h2>
                                    <p class=" mb-0">Nystai specializes in product upgrades, offering enhancements to existing electronics by improving functionality, performance, and design. We work with customers to upgrade their products, extending their lifecycle and ensuring they remain competitive in the marketplace. </p>
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
