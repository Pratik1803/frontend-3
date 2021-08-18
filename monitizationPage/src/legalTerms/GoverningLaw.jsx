import React from 'react';
import "./styling.css";
import governingLaw from "../images/descriptionLinkImages/governingLaw.png";

function GoverningLaw() {

    return (
        <section className="content_page" >
            <div className="content_page_wrapper" >
                <img className="content_page_image" src={governingLaw} alt="" />
                <div className="content_page_text" >
                    <br />
                    <br />
                    <div class="textHead">
                        <h1>Governing Law</h1>
                        <h4>Clause 16</h4>
                    </div>
                    <br />
                    <br />
                    <ul>
                        <p >This policy shall be governed by, and construed in accordance with, the laws of India without the application of India’s conflict of law rules.</p>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default GoverningLaw
