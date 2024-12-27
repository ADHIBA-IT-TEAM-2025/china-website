import React, { useEffect } from "react";
import { useTranslation } from 'react-i18next';
import techbanner from "../Z-IMAGE/tech-landing.png"
import leftimg from "../Z-IMAGE/tech-2.png"
import rightimg from "../Z-IMAGE/tech-3.png"
import leftboximg from "../Z-IMAGE/tech-4.png"
import imgbg from "../Z-IMAGE/tech-5.png"
import Footercn from "../A-LAYOUT/Footercn";
import Layoutchinna from "../A-LAYOUT/layoutchina";

export default function Technology() {

    const { t } = useTranslation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Layoutchinna />

            {/* BANNER */}
            <section className="card text-danger" style={{ border: "none", outline: "none" }}>
                <img src={techbanner} className="card-img" alt="..." />
                <div className="card-img-overlay container" style={{ display: "flex", justifyContent: "center", flexDirection: "column", top: "-100px" }}>
                    <h5 className="TECH-H3-CN-NYS col-lg-7" style={{ fontSize: "3.25rem" }}>{t('technologyApplication')}</h5>
                    <p className="card-text col-lg-4" style={{ fontSize: "1.2rem" }}>{t('bannerTextTEC')}</p>
                </div>
            </section>

            {/* LEFT AND RIGHT CARD */}
            <section className="container-fluid">
                <div className="col-12 mb-5">
                    <h1 className="text-center" style={{ fontSize: "3rem", textTransform: "uppercase", fontWeight: "500" }}>{t('technologyTitle')}</h1>
                    {/* FIRST CARD */}
                    <div className="row mt-5 mb-5" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <div className="col-lg-6" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <img src={leftimg} className="img-fluid" />
                        </div>
                        <div className="col-lg-6">
                            <div className="col-lg-8" style={{ marginLeft: "7%" }}>
                                <h3 className="h3-rlcard-nyscn">{t('technologyApplicationun')}</h3>
                                {/* <p>{t('contentText')}</p> */}

                                <ul className="left-right-card-ncn">
                                    <li>{t('technologyApplication1')}</li>
                                    <li>{t('technologyApplication22')}</li>
                                    <li>{t('technologyApplication3')}</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* SECOND CARD */}
                    <div className="row mt-5" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <div className="col-lg-6" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <div className="col-lg-8" style={{ marginLeft: "7%" }}>
                                <h3 className="h3-rlcard-nyscn">{t('technologyApplication2')}</h3>
                                {/* <p>{t('contentText2')}</p> */}
                                <ul className="left-right-card-ncn">
                                    <li>{t('Automation1')}</li>
                                    <li>{t('Automation2')}</li>
                                    <li>{t('Automation3')}</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6" >
                            <img src={rightimg} className="img-fluid" style={{ marginLeft: "7%" }} />
                        </div>
                    </div>


                </div>
            </section>

            {/* BOX CARD */}
            <section style={{ padding: "0 9% 0 9%" }}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6">
                            <img src={leftboximg} className="img-fluid" />
                        </div>
                        <div className="col-lg-6" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <div className="col-lg-10 ">
                                <h1 className="h3-rlcard-nyscn">{t('buildingShenzhen')}</h1>
                                {/* <p>{t('shortContentText')}</p> */}

                                <ul className="left-right-card-ncn">
                                    <li>{t('manufacturingt1')}</li>
                                    <li>{t('manufacturingt2')}</li>
                                    <li>{t('manufacturingt3')}</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* BOX CARD 2 */}
            <section className="mt-5">
                <div className="card container text-center text-danger" style={{ border: "none", outline: "none" }}>
                    <img src={imgbg} className="img-fluid" />
                    <div className="card-img-overlay" style={{ marginTop: "10.5%" }}>
                        <h5 className="TECH-H3-CN-NYS" style={{ fontSize: "2.75rem" }}>{t('manufactureProduct')}</h5>
                        <p className="card-text">{t('longContentText')}</p>
                    </div>
                </div>
            </section>

            {/* WAVE DESIGN */}
            <section>
                {/* <img src={techbanner2} className="img-fluid" /> */}
            </section>

            {/* FOOTER */}
            <Footercn />

        </>
    )
}


