import React from 'react';
import "./styling.css";
import governingLaw from "../images/descriptionLinkImages/governingLaw.jpg";

function GoverningLaw() {
    return (
        <section className="content_page" >
            <div className="content_page_wrapper" >
                <h1 className="watermark" > Clause 8 </h1>
                <img className="content_page_image" src={governingLaw} alt="" />
                <div className="content_page_text" >
                    <h1>Governing Law</h1>
                    <ul>
                        <p >This policy shall be governed by, and construed in accordance with, the laws of India without the application of India’s conflict of law rules.</p>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default GoverningLaw
