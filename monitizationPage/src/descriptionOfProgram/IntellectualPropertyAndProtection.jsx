import React from 'react';
import "./Content.css";
import intellectualPropertyAndProtection from "../images/descriptionLinkImages/intellectualPropertyAndProtection.png";

function IntellectualPropertyAndProtection() {

    return (
        <section className="content_page" >
            <div className="content_page_wrapper" >
                {/* <h1 className="watermark" > Clause 8 </h1> */}
                <img className="content_page_image" src={intellectualPropertyAndProtection} alt="" />
                <div className="content_page_text" >
                    <br />
                    <br />
                    <div class="textHead">
                        <h1>Intellectual Property and Data Protection</h1>
                        <h4>Clause 9</h4>
                    </div>
                    <br />
                    <br />
                    <ul>
                        <li>The provisions relating to Intellectual Property and Data Protection that are present in our Terms of Service and Privacy Policy respectively shall apply to this Policy.</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default IntellectualPropertyAndProtection
