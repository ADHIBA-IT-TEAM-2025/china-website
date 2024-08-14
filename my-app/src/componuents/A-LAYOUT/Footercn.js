import React from "react";
import './nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";



export default function Footercn() {
    return (
        <>
            <div class=" pt-5 d-flex justify-content-center text-center" style={{ color: "#EBF5EE", backgroundColor: "#00101a" }}>
                <div class="a">
                    <footer class="row footer">
                        <div class="col">
                            <h2 class="d-flex align-items-center justify-content-center" style={{ fontWeight: "700;" }}>Nystai - Leading AIoT Security Solutions</h2>
                            <div class="soc mt-4 mb-3">
                                <a>SUPPLY CHAIN MANAGEMENT</a>
                                <a>TECHNOLOGIES</a>
                            </div>
                            <div class="soc mt-4 mb-3">
                                <a><FontAwesomeIcon icon={faWhatsapp} /></a>
                                <a><FontAwesomeIcon icon={faInstagram} /></a>
                                <a><FontAwesomeIcon icon={faFacebook} /></a>
                                <a ><FontAwesomeIcon icon={faPhone} /></a>
                                <a ><FontAwesomeIcon icon={faTwitter} /></a>
                                <a ><FontAwesomeIcon icon={faXTwitter} /></a>
                                <a ><FontAwesomeIcon icon={faYoutube} /></a>
                                <a ><FontAwesomeIcon icon={faLinkedin} /></a>
                            </div>
                        </div>
                    </footer>
                    <div class="legal mt-2">
                        <p> SHENZHEN NYSTAI TECHNOLOGY COMPANY LIMITED</p>
                    </div>
                    <br />
                </div>
            </div>
        </>
    )
}