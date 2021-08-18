import React from 'react';
import "./Content.css";
import idemnity from "../images/descriptionLinkImages/idemnity.jpg";

function Idemnity() {

    return (
        <section className="content_page" >
            <div className="content_page_wrapper" >
                {/* <h1 className="watermark" > Clause 8 </h1> */}
                <img className="content_page_image" src={idemnity} alt="" />
                <div className="content_page_text" >
                    <br />
                    <br />
                    <div class="textHead">
                        <h1>Idemnity</h1>
                        <h4>Clause 13</h4>
                    </div>
                    <br />
                    <br />
                    <ul>
                        <li>To the fullest extent allowed by applicable law, you agree to indemnify and hold Social Comment, its affiliates, officers, agents, employees, directors, and partners harmless from and against any and all claims, liabilities, damages (actual and consequential), losses and expenses (including attorneys’ fees) arising from or in any way related to any third party claims relating to (a) your use of Social Comment (including any actions taken by a third party using your account), and (b) your violation of this Policy. </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Idemnity
