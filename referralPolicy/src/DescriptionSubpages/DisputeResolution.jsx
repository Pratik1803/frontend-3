import React from 'react';
import disputeResolution from "../images/disputeResolution.png";
import "./DescriptionLinks.css";

function DisputeResolution() {
    return (
        <>
            <br />
            <section className="description_link_pages" >
                <div className="description_link_image">
                    <img src={disputeResolution} alt="" />
                </div>
                <div className="description_link_text" >
                    <br />
                    <br />
                    <h1>Dispute Resolution<p>Clause 2</p></h1>
                    <br />
                    <br />
                    <ul><li><p>WE shall attempt to resolve any dispute, difference, claim, or controversy arising out of, or related to, this Policy by negotiating with each other in good faith. However, the failure of either of US to begin or continue negotiations in accordance with this sub-clause, or the failure of negotiations between US due to any reason, shall not prevent or preclude either of US from exercising the dispute resolution mechanism mentioned in clause 16.2.</p></li></ul>
                    <br />
                    <ul><li><p>In case WE are unable to resolve any dispute, difference, claim, or controversy arising out of, or related to, this Policy through good faith negotiations under the preceding sub-clause for any reason, such dispute, difference, claim, or controversy shall be resolved by binding arbitration in accordance with the provisions of the Indian Arbitration and Conciliation Act, 1996 (including any amendments or reenactments thereto). The seat of arbitration shall be Ajmer, Rajasthan, there shall be a single arbitrator, and the language of the proceedings shall be in English. WE agree that the decision of the arbitrator shall be final and binding on US, and that the prevailing party shall be entitled to recover all costs (including attorney’s fees) from the other party.</p></li></ul>
                </div>

            </section>
            <br />
        </>
    )
}

export default DisputeResolution
