import React from 'react';
import idemnity from "../images/idemnity.png";
import "./DescriptionLinks.css";

function Idemnity() {
    return (
        <>
            <br />
            <section className="description_link_pages" >
                <div className="description_link_image">
                    <img src={idemnity} alt="" />
                </div>
                <div className="description_link_text" >
                    <br />
                    <br />
                    <h1>Idemnity<p>Clause 12</p></h1>
                    <br />
                    <br />
                    <p>To the fullest extent allowed by applicable law, you agree to indemnify and hold Social Comment, its affiliates, officers, agents, employees, directors, and partners harmless from and against any and all claims, liabilities, damages (actual and consequential), losses and expenses (including attorneys’ fees) arising from or in any way related to any third party claims relating to (a) your use of Social Comment (including any actions taken by a third party using your account), and (b) your violation of this Policy. </p>
                </div>

            </section>
            <br />
        </>
    )
}

export default Idemnity
