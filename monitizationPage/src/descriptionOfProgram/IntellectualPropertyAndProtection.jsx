import React from 'react';
import "./Content.css";
import intellectualPropertyAndProtection from "../images/descriptionLinkImages/intellectualPropertyAndProtection.jpg";

function IntellectualPropertyAndProtection() {
    return (
        <section className="content_page" >
            <div className="content_page_wrapper" >
                {/* <h1 className="watermark" > Clause 8 </h1> */}
                <img className="content_page_image" src={intellectualPropertyAndProtection} alt="" />
                <div className="content_page_text" >
                    <h1>Intellectual Property and Protection.</h1>
                    <ul>
                        <li>The provisions relating to Intellectual Property and Data Protection that are present in our Terms of Service and Privacy Policy respectively shall apply to this Policy.</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default IntellectualPropertyAndProtection
