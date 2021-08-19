import React from 'react';
import "./LandingPage.css";
import landingPageImage from "../images/description.png";
import { NavLink } from 'react-router-dom';
import { Button } from '@material-ui/core';

function LandingPage() {

    return (
        <>
            <section id="landing_page">
                <div id="landing_page_container" >
                    <div id="landing_page_text">
                        <div id="landing_page_h1">
                            <h1>Our Referral Policy</h1>
                        </div>
                        <br />

                        <p>This Referral Policy (“Policy”) contains the terms and conditions which govern the use of referral codes/links on thesocialcomment.com (“Platform”).  Any user of the Platform who shares their referral code/referral link (“you” or “your”) must agree to this Policy without change. </p>
                        <br />

                        <NavLink exact to="/thesocialcomment_referralpolicy/learn-more" style={{ textDecoration: "none" }}><div id="learn_more_button">
                            <h3>Learn More</h3>
                        </div></NavLink>
                        <br />
                        <br />
                    </div>
                    <br />
                    <div id="landing_page_image_container">
                        <img id="landing_page_image" src={landingPageImage} alt="" />
                    </div>
                    <br />
                </div>
                <br />
                <br />
                <br />
            </section>
        </>
    )
}

export default LandingPage
