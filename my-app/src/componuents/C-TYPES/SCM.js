import React, { useEffect } from "react";
import "../CSS/scm.css"
import { useTranslation } from 'react-i18next';  //  useTranslation hook
// USED 
import techbannerscm from "../Z-IMAGE/scm  (4).png";
import Footercn from "../A-LAYOUT/Footercn";
import Layoutchinna from "../A-LAYOUT/layoutchina";
// 
import leftimgscm1 from "../Z-IMAGE/SCM-IMAGES/SCM-IMAGES-1.png"
import rightimgscm2 from "../Z-IMAGE/SCM-IMAGES/SCM-IMAGES-2.png"
import leftimgscm3 from "../Z-IMAGE/SCM-IMAGES/SCM-IMAGES-3.png"


export default function Supplychain() {
    const { t } = useTranslation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>

            <Layoutchinna />

            {/* BANNER */}
            <div className="card text-warning" style={{ border: "none", outline: "none" }}>
                <img src={techbannerscm} className="card-img" alt="..." />
                <div className="card-img-overlay container" style={{ display: "flex", justifyContent: "center", flexDirection: "column", top: "-100px" }}>
                    <h5 className="card-title col-lg-6" style={{ fontSize: "3.25rem", lineHeight: "95%" }}>{t('supplyChainApplication')}</h5>
                    <p className="card-text col-lg-4" style={{ fontSize: "1.2rem" }}>{t('bannerTextSCM')}</p>
                </div>
            </div>


            {/* LEFT AND RIGHT CARD */}
            <section className="container-fluid">
                <div className="col-12 ">
                    <h1 className="text-center" style={{ fontSize: "3rem" }}>{t('supplyChainManagement')}</h1>
                    {/* FIRST CARD */}
                    <div className="row mt-5 mb-5" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

                        <div className="col-lg-6" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <img src={leftimgscm1} className="img-fluid" />
                        </div>
                        <div className="col-lg-6">
                            <div className="col-lg-8" style={{ marginLeft: "7%" }}>
                                <h3 style={{ fontSize: "2rem", textTransform: "uppercase" }}>{t('supplyChainApplication')}</h3>
                                {/* <p>{t('contentTextscm1')}</p> */}
                                <ul className="left-right-card-ncn">
                                    <li>{t('nystaiProductSources')}</li>

                                    <li>{t('procurementSimplification')}</li>
                                    <li>{t('customerOrderManagement')}</li>

                                </ul>
                            </div>
                        </div>

                    </div>
                    {/* SECOND CARD */}
                    <div className="row mt-5 mb-5" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <div className="col-lg-6" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <div className="col-lg-8" style={{ marginLeft: "7%" }}>
                                <h3 style={{ fontSize: "2rem", textTransform: "uppercase" }}>{t('supplyChainApplication2')}</h3>
                                {/* <p>{t('contentTextscm2')}</p> */}

                                <ul className="left-right-card-ncn">
                                    <li>{t('orderManagementChina')}</li>
                                    <li>{t('logisticsProcess')}</li>
                                    <li>{t('freightOptions')}</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <img src={rightimgscm2} className="img-fluid" style={{ height: "45vh", width: "fit-content", marginLeft: "7%" }} />
                        </div>
                    </div>
                    {/* THIRD CARD */}
                    <div className="row mt-5 mb-5" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

                        <div className="col-lg-6" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <img src={leftimgscm3} className="img-fluid" />
                        </div>
                        <div className="col-lg-6">
                            <div className="col-lg-8" style={{ marginLeft: "7%" }}>
                                <h3 style={{ fontSize: "2rem", textTransform: "uppercase" }}>{t('supplyChainApplication3')}</h3>
                                {/* <p>{t('contentTextscm1')}</p> */}
                                <ul className="left-right-card-ncn">
                                    <li>{t('collaborationProcurement')}</li>
                                    <li>{t('supplyChainSimplification')}</li>
                                    <li>{t('competitiveShipping')}</li>
                                </ul>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* FOOTER */}
            <Footercn />
        </>
    );
}
