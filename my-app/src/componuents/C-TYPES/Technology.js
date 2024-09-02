import React, { useEffect } from "react";
import { useTranslation } from 'react-i18next'; 
// USED ITEMS
import techbanner from "../Z-IMAGE/tech-landing.png"
import leftimg from "../Z-IMAGE/tech-2.png"
import rightimg from "../Z-IMAGE/tech-3.png"
import leftboximg from "../Z-IMAGE/tech-4.png"
import imgbg from "../Z-IMAGE/tech-5.png"
import techbanner2 from "../Z-IMAGE/tech-6.png"
import Footercn from "../A-LAYOUT/Footercn";

export default function Technology() {
    const { t } = useTranslation(); 

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            {/* BANNER */}
            <div className="card text-danger" style={{ border: "none", outline: "none" }}>
                <img src={techbanner} className="card-img" alt="..." />
                <div className="card-img-overlay container" style={{ display: "flex", justifyContent: "center", flexDirection: "column", top: "-100px" }}>
                    <h5 className="card-title" style={{ fontSize: "3.25rem" }}>{t('technologyApplication')}</h5>
                    <p className="card-text" style={{ fontSize: "1.2rem" }}>{t('bannerText')}</p>
                </div>
            </div>

            {/* LEFT AND RIGHT CARD */}
            <section className="container-fluid">
                <div className="col-12">
                    <h1 className="text-center" style={{ fontSize: "3.25rem" }}>{t('technologyTitle')}</h1>
                    <div className="row mt-5" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <div className="col-lg-6">
                            <img src={leftimg} className="img-fluid" style={{ height: "60vh", width: "fit-content" }} />
                        </div>
                        <div className="col-lg-6">
                            <div className="col-lg-8" style={{ marginLeft: "7%" }}>
                                <h3 style={{ fontSize: "2.6rem" }}>{t('technologyApplication')}</h3>
                                <p>{t('contentText')}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "-50px" }}>
                        <div className="col-lg-6">
                            <div className="col-lg-8" style={{ marginLeft: "18%", marginTop: "20%" }}>
                                <h3 style={{ fontSize: "2.6rem" }}>{t('technologyApplication')}</h3>
                                <p>{t('contentText')}</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <img src={rightimg} className="img-fluid" style={{ height: "60vh", width: "fit-content" }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* BOX CARD */}
            <section className="mb-5 mt-5" style={{ padding: "5%" }}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6">
                            <img src={leftboximg} className="img-fluid" />
                        </div>
                        <div className="col-lg-6 mt-5">
                            <div className="col-lg-10 mt-5">
                                <h1 className="pb-3">{t('buildingShenzhen')}</h1>
                                <p>{t('shortContentText')}</p>
                            </div>
                            <div className="pt-2">
                                <button className="btn btn-warning p-3">{t('learnMore')}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BOX CARD 2 */}
            <div className="mt-5">
                <div className="card container text-center text-danger" style={{ border: "none", outline: "none" }}>
                    <img src={imgbg} className="img-fluid" />
                    <div className="card-img-overlay" style={{ marginTop: "18.5%" }}>
                        <h5 className="card-title" style={{ fontSize: "3rem" }}>{t('manufactureProduct')}</h5>
                        <p className="card-text">{t('longContentText')}</p>
                    </div>
                </div>
            </div>

            {/* WAVE DESIGN */}
            <section>
                <img src={techbanner2} className="img-fluid" />
            </section>

            {/* FOOTER */}
            <Footercn />
        </>
    )
}


