import React from 'react';
import governingLaw from "../images/governingLaw.png";
import "./DescriptionLinks.css";

function GoverningLaw() {
    return (
        <>
            <br />
            <section className="description_link_pages" >
                <div className="description_link_image">
                    <img src={governingLaw} alt="" />
                </div>
                <div className="description_link_text" >
                    <br />
                    <br />
                    <h1>Governing Law<p>Clause 15</p></h1>
                    <br />
                    <br />
                    <p>This Policy shall be governed by, and construed in accordance with, the laws of India without the application of India’s conflict of law rules.GoverningLaw</p>
                </div>

            </section>
            <br />
        </>
    )
}

export default GoverningLaw
