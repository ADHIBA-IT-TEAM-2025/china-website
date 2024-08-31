import React, { useEffect } from "react";
import { useTranslation } from 'react-i18next';  // Import useTranslation hook
// USED ITEMS
import techbannerscm from "../Z-IMAGE/SCM (1).png";
import leftimgscm from "../Z-IMAGE/SCM (2).png";
import rightimgscm from "../Z-IMAGE/SCM (3).png";
import techbanner2 from "../Z-IMAGE/tech-6.png";
import Footercn from "../A-LAYOUT/Footercn";
import Form from "../A-LAYOUT/form";

export default function Supplychain() {
    const { t } = useTranslation();  // Initialize translation

    useEffect(() => {
        window.scrollTo(0, 0);  
    }, []);

    return (
        <>
            {/* BANNER */}
            <div className="card text-warning" style={{ border: "none", outline: "none" }}>
                <img src={techbannerscm} className="card-img" alt="..." />
                <div className="card-img-overlay container" style={{ display: "flex", justifyContent: "center", flexDirection: "column", top: "-100px" }}>
                    <h5 className="card-title" style={{ fontSize: "3.25rem" }}>{t('supplyChainApplication')}</h5>
                    <p className="card-text" style={{ fontSize: "1.2rem" }}>{t('bannerText')}</p>
                </div>
            </div>

            {/* LEFT AND RIGHT CARD */}
            <section className="container-fluid">
                <div className="col-12">
                    <h1 className="text-center" style={{ fontSize: "3.25rem" }}>{t('supplyChainManagement')}</h1>
                    <div className="row mt-5" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <div className="col-lg-6">
                            <img src={leftimgscm} className="img-fluid" style={{ height: "60vh", width: "fit-content" }} />
                        </div>
                        <div className="col-lg-6">
                            <div className="col-lg-8" style={{ marginLeft: "7%" }}>
                                <h3 style={{ fontSize: "2.6rem" }}>{t('supplyChainApplication')}</h3>
                                <p>{t('contentText')}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "-50px" }}>
                        <div className="col-lg-6">
                            <div className="col-lg-8" style={{ marginLeft: "18%", marginTop: "20%" }}>
                                <h3 style={{ fontSize: "2.6rem" }}>{t('supplyChainApplication')}</h3>
                                <p>{t('contentText')}</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <img src={rightimgscm} className="img-fluid" style={{ height: "60vh", width: "fit-content" }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* FORM SECTION */}
            <section>
                <Form />
            </section>

            {/* WAVE DESIGN */}
            <section>
                <img src={techbanner2} className="img-fluid" />
            </section>

            {/* FOOTER */}
            <Footercn />
        </>
    );
}
