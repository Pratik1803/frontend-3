import React from 'react';
import "./styling.css";
import limitationOfLiability from "../images/descriptionLinkImages/limitationOfLiability.jpg";

function LimitaionOfLiability() {

    return (
        <section className="content_page" >
            <div className="content_page_wrapper" >
                <img className="content_page_image" src={limitationOfLiability} alt="" />
                <div className="content_page_text" >
                    <br />
                    <br />
                    <div class="textHead">
                        <h1>Limitation Of Liability</h1>
                        <h4>Clause 14</h4>
                    </div>
                    <br />
                    <br />
                    <ul>
                        <p >To the fullest extent allowed by applicable law, under no circumstances, legal theory, or cause of action shall social comment or our affiliates, licensors, or suppliers be liable to you or any other person or entity for any lost revenue, lost profits, lost business, or any indirect, incidental, consequential, or special damages (even if we have been advised of the possibility of such damages) arising from or relating to this policy or the program. furthermore, our aggregate liability to you or any other entity in connection with, or related to, this policy or the program will not exceed the money paid/payable to you under this policy in the twelve months immediately preceding the date on which the event giving rise to the claim of liability occurred.</p>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default LimitaionOfLiability
