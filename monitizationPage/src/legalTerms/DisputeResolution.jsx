import React from 'react';
import "./styling.css";
import disputeResolution from "../images/descriptionLinkImages/disputeResolution.png";

function DisputeResolution() {

    return (
        <section className="content_page" >
            <div className="content_page_wrapper" >
                <img className="content_page_image" src={disputeResolution} alt="" />
                <div className="content_page_text" >
                    <br />
                    <br />
                    <div class="textHead">
                        <h1>Dispute Resolution</h1>
                        <h4>Clause 17</h4>
                    </div>
                    <br />
                    <br />
                    <ul>
                        <li>Both parties shall attempt to resolve any dispute, difference, claim, or controversy arising out of, or related to, this Policy or the Program by negotiating with each other in good faith. However, the failure of a party to begin or continue negotiations in accordance with this sub-clause, or the failure of negotiations between the parties due to any reason, shall not prevent or preclude any party from exercising the dispute resolution mechanism mentioned in clause 17.2</li>
                        <li>Any dispute, difference, claim, or controversy arising out of, or related to, this Policy or the Program shall be resolved by binding arbitration in accordance with the provisions of the Indian Arbitration and Conciliation Act, 1996 (including any amendments or reenactments thereto). The seat of arbitration shall be Ajmer, Rajasthan, there shall be a single arbitrator, and the language of the proceedings shall be in English. Both parties agree that the decision of the arbitrator shall be final and binding on them, and that the prevailing party shall be entitled to recover all costs (including attorney’s fees) from the other party.</li>
                        <h3>CONSUMER PROTECTION</h3>
                        <p>In case you decide to pursue any remedies available to you under the Consumer Protection Act, 2019, you hereby agree and acknowledge that the Ajmer District Consumer Disputes Redressal Commission or the Rajasthan State Consumer Disputes Redressal Commission, depending on the pecuniary value of your claim, shall have sole and exclusive jurisdiction to hear any claims arising out of, or relating to, this Policy or your participation in the Program that is brought by you under the Consumer Protection Act, 2019. You further waive any objections to the jurisdiction of the Ajmer District Consumer Disputes Redressal Commission or the Rajasthan State Consumer Disputes Redressal Commission based on their location, or any difficulty or inconvenience you may face in submitting to their jurisdiction (including, without limitation, any objection on the grounds of forum non conveniens).</p>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default DisputeResolution
