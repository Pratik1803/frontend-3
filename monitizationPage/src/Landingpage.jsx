import React from 'react';
import "./Landingpage.css";
import landingPageImage from "./images/landing_page_image.png";
import { NavLink } from 'react-router-dom';

function Landingpage() {

    return (
        <>
            <section id="landing_page">
                <div id="landing_page_gradient"></div>
                <div id="landing_page_container" >
                    <div id="landing_page_text">
                        <div id="landing_page_h1">
                            <h1>Our Content<br /> Monitization<br />Policy.</h1>
                        </div>
                        <h4>for thesocialcomment.com which is run and operated by Social Comment Pvt. Ltd.</h4>
                        <br />
                        <NavLink exact to="/learn-more" style={{ textDecoration: "none" }}><div id="learn_more_button">
                            <h3>Learn More</h3>
                        </div></NavLink>
                        <br />
                    </div>
                    <br />
                    <div id="landing_page_image_container">
                        <img id="landing_page_image" src={landingPageImage} alt="" />
                    </div>
                    <br />
                </div>
            </section>
        </>
    )
}

export default Landingpage
