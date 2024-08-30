import React, { useEffect } from "react";
// USED ITEMS
import techbannerscm from "../Z-IMAGE/SCM (1).png"
import leftimgscm from "../Z-IMAGE/SCM (2).png"
import rightimgscm from "../Z-IMAGE/SCM (3).png"
import techbanner2 from "../Z-IMAGE/tech-6.png"
import Footercn from "../A-LAYOUT/Footercn";
import Form from "../A-LAYOUT/form";

export default function Supplychain() {

    useEffect(() => {
        window.scrollTo(0, 0);  
    }, []);


    return (
        <>
            {/* BANNER */}
            <div class="card  text-warning" style={{ border: "none", outline: "none" }}>
                <img src={techbannerscm} class="card-img" alt="..." />
                <div class="card-img-overlay container" style={{ display: "flex", justifyContent: "center", flexDirection: "column", top: "-100px" }}>
                    <h5 class="card-title" style={{ fontSize: "3.25rem" }}>Supply Chain application </h5>
                    <p class="card-text" style={{ fontSize: "1.2rem" }}>This is a wider card with supporting text below as a natural lead-in to <br />additional content. </p>
                    <p class="card-text" style={{ color: "transparent" }}>Last updated 3 mins ago</p>
                </div>
            </div>

            {/* LEFT AND RIGHT CARD */}
            <section className="container-fluid">
                <div className=" col-12">
                    <h1 className="text-center" style={{ fontSize: "3.25rem" }}>Supply Chain Managemnt</h1>
                    <div className="row mt-5" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

                        <div className="col-lg-6">
                            <img src={leftimgscm} className="img-fluid" style={{ height: "60vh", width: "fit-content" }} />
                        </div>
                        <div className="col-lg-6">
                            <div className="col-lg-8" style={{ marginLeft: "7%" }}>
                                <h3 style={{ fontSize: "2.6rem" }} >Supply Chain Managemnt application</h3>
                                <p >This is a wider card with supporting text below as a natural lead-in to additional content.This is a wider card with supporting text below as a natural lead-in to additional content.This is a wider card with supporting text below as a natural lead-in to additional content.This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "-50px" }}>

                        <div className="col-lg-6">
                            <div className="col-lg-8" style={{ marginLeft: "18%", marginTop: "20%" }}>
                                <h3 style={{ fontSize: "2.6rem" }} >Supply Chain Managemnt application</h3>
                                <p >This is a wider card with supporting text below as a natural lead-in to additional content.This is a wider card with supporting text below as a natural lead-in to additional content.This is a wider card with supporting text below as a natural lead-in to additional content.This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <img src={rightimgscm} className="img-fluid" style={{ height: "60vh", width: "fit-content" }} />
                        </div>

                    </div>
                </div>
            </section>


<section>
    <Form/>
</section>
     

            {/* WAVE DESIGN */}
            <section>
                <img src={techbanner2} className="img-fluid" />
            </section>



            <Footercn />
        </>
    )
}