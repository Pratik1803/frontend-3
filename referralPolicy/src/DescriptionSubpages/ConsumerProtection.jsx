import React from 'react';
import consumerProtection from "../images/consumerProtection.png";
import "./DescriptionLinks.css";

function ConsumerProtection() {
    return (
        <>
            <br />
            <section className="description_link_pages" >
                <div className="description_link_image">
                    <img src={consumerProtection} alt="" />
                </div>
                <div className="description_link_text" >
                    <br />
                    <br />
                    <h1>Consumer Pratection Act<p>Clause 17</p></h1>
                    <br />
                    <br />
                    <p>In case you decide to pursue any remedies available to you under the Consumer Protection Act, 2019, you hereby agree and acknowledge that the Ajmer District Consumer Disputes Redressal Commission or the Rajasthan State Consumer Disputes Redressal Commission, depending on the pecuniary value of your claim, shall have sole and exclusive jurisdiction to hear any claims arising out of, or relating to, this Policy that is brought by you under the Consumer Protection Act, 2019. You further waive any objections to the jurisdiction of the Ajmer District Consumer Disputes Redressal Commission or the Rajasthan State Consumer Disputes Redressal Commission based on their location, or any difficulty or inconvenience you may face in submitting to their jurisdiction (including, without limitation, any objection on the grounds of forum non conveniens).</p>
                </div>

            </section>
            <br />
        </>
    )
}

export default ConsumerProtection
