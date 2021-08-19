import React from 'react';
import limitationOfLiability from "../images/limitationOfLiability.png";
import "./DescriptionLinks.css";

function LimitationOfLiability() {
    return (
        <>
            <br />
            <section className="description_link_pages" >
                <div className="description_link_image">
                    <img src={limitationOfLiability} alt="" />
                </div>
                <div className="description_link_text" >
                    <br />
                    <br />
                    <h1>Limitation Of Liability<p>Clause 13</p></h1>
                    <br />
                    <br />
                    <p>To The Fullest Extent Allowed By Applicable Law, Under No Circumstances, Legal Theory, Or Cause Of Action Shall Social Comment Or Our Affiliates, Licensors, Or Suppliers Be Liable To You Or Any Other Person Or Entity For Any Lost Revenue, Lost Profits, Lost Business, Or Any Indirect, Incidental, Consequential, Or Special Damages (Even If We Have Been Advised Of The Possibility Of Such Damages) Arising From Or Relating To This Policy. Furthermore, Our Aggregate Liability To You Or Any Other Entity In Connection With, Or Related To, This Policy Will Not Exceed The Money Paid/Payable To You Under This Policy In The Twelve Months Immediately Preceding The Date On Which The Event Giving Rise To The Claim Of Liability Occurred.</p>
                </div>

            </section>
            <br />
        </>
    )
}

export default LimitationOfLiability
