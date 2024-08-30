import React from "react";
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// USED ITEMS
import techbanner from "../Z-IMAGE/tech-landing.png"
import leftimg from "../Z-IMAGE/tech-2.png"
import rightimg from "../Z-IMAGE/tech-3.png"
import leftboximg from "../Z-IMAGE/tech-4.png"
import imgbg from "../Z-IMAGE/tech-5.png"
import techbanner2 from "../Z-IMAGE/tech-6.png"
import Footercn from "../A-LAYOUT/Footercn";

export default function Technology() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            {/* BANNER */}
            <div class="card  text-danger" style={{ border: "none", outline: "none" }}>
                <img src={techbanner} class="card-img" alt="..." />
                <div class="card-img-overlay container" style={{ display: "flex", justifyContent: "center", flexDirection: "column", top: "-100px" }}>
                    <h5 class="card-title" style={{ fontSize: "3.25rem" }}>Technology application </h5>
                    <p class="card-text" style={{ fontSize: "1.2rem" }}>This is a wider card with supporting text below as a natural lead-in to <br />additional content.  </p>
                    <p class="card-text" style={{ color: "transparent" }}>Last updated 3 mins ago</p>
                </div>
            </div>

            {/* LEFT AND RIGHT CARD */}
            <section className="container-fluid">
                <div className=" col-12">
                    <h1 className="text-center" style={{ fontSize: "3.25rem" }}>Technology</h1>
                    <div className="row mt-5" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

                        <div className="col-lg-6">
                            <img src={leftimg} className="img-fluid" style={{ height: "60vh", width: "fit-content" }} />
                        </div>
                        <div className="col-lg-6">
                            <div className="col-lg-8" style={{ marginLeft: "7%" }}>
                                <h3 style={{ fontSize: "2.6rem" }} >Technology application</h3>
                                <p >This is a wider card with supporting text below as a natural lead-in to additional content.This is a wider card with supporting text below as a natural lead-in to additional content.This is a wider card with supporting text below as a natural lead-in to additional content.This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "-50px" }}>

                        <div className="col-lg-6">
                            <div className="col-lg-8" style={{ marginLeft: "18%", marginTop: "20%" }}>
                                <h3 style={{ fontSize: "2.6rem" }} >Technology application</h3>
                                <p >This is a wider card with supporting text below as a natural lead-in to additional content.This is a wider card with supporting text below as a natural lead-in to additional content.This is a wider card with supporting text below as a natural lead-in to additional content.This is a wider card with supporting text below as a natural lead-in to additional content.</p>
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
                                <h1 className="pb-3">We are Building on SHENZHEN NYSTAI</h1>

                                <p >This is a wider card with supporting text below as a natural lead-in to additional content.This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                            </div>
                            <div className="pt-2">
                                <button className="btn btn-warning p-3">Learn More</button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* BOX CARD 2 */}
            <div className="mt-5" >
                <div class="card container text-center text-danger" style={{ border: "none", outline: "none" }}>
                    <img src={imgbg} className="img-fluid" />
                    <div class="card-img-overlay" style={{ marginTop: "18.5%" }}>
                        <h5 class="card-title" style={{ fontSize: "3rem" }}>Manufacture your Product</h5>
                        <p class="card-text ">This is a wider card with supporting text below as a natural lead-in to additional <br />content. This content is a little bit longer.</p>
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