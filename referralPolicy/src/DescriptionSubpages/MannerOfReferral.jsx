import React from 'react';
import mannerOfReferral from "../images/mannerOfReferral.png";
import "./DescriptionLinks.css";

function MannerOfReferral() {
    return (
        <>
            <br />
            <section className="description_link_pages" >
                <div className="description_link_image">
                    <img src={mannerOfReferral} alt="" />
                </div>
                <div className="description_link_text" >
                    <br />
                    <br />
                    <h1>Manner Of Referral<p>Clause 2</p></h1>
                    <br />
                    <br />
                    <p>Once you have created your account on the Platform, you will be given a unique referral code/link which you can find under the “Profile” heading on the Platform. Please keep in mind that you need to fulfil the eligibility criteria specified in our Terms of Service in order to create an account on the Platform. You can share your referral code/link with others and you will receive benefits under this Policy if they create an account on the Platform using your referral code/link and pay the non-refundable fee.</p>
                </div>

            </section>
            <br />
        </>
    )
}

export default MannerOfReferral
