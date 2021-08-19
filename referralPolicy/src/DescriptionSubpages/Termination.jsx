import React from 'react';
import termination from "../images/termination.png";
import "./DescriptionLinks.css";

function Termination() {
    return (
        <>
            <br />
            <section className="description_link_pages" >
                <div className="description_link_image">
                    <img src={termination} alt="" />
                </div>
                <div className="description_link_text" >
                    <br />
                    <br />
                    <h1>Termination<p>Clause 9</p></h1>
                    <br />
                    <br />
                    <p>This Policy can only be terminated by us by deactivating your referral code/link. However, if you do not wish to be bound by this Policy, you can refrain from sharing your referral code/link with others.</p>
                    <br />
                    <p>We may terminate this Policy if:<br />
                        a)	You violate any of the Guidelines mentioned in clause 7, or<br />
                        b)	You violate any of the provisions of our Terms of Service, Community Guidelines, or Privacy Policy.<br />
                        Additionally, we reserve the right to terminate this Policy for any or no reason.
                    </p>
                    <br />
                    <p>If we decide to terminate this Policy, we shall send you a show-cause notice informing you of our decision and our reasons for the same. You shall have five (5) days from the date of receipt of our notice to respond to the notice and provide reasons for why your referral code/ link should not be deactivated. If you respond to our notice within five (5) days, we shall evaluate your response and reach a final and non-appealable decision within seven (7) days of receiving your response. Please note that we shall temporarily deactivate your referral code/referral link when we send you a show-cause notice. If we ultimately decide not to terminate this Policy, we shall reactivate your referral code/referral link. However, if we decide to terminate this Policy, we shall permanently deactivate your referral code/referral link in accordance with clause 9.5 of this Policy.</p>
                    <br />
                    <p>You shall not be able to transfer any money from your Wallet to your linked bank account/UPI ID from the date we send you a show-cause notice till the date we reach a final decision on whether to terminate this Policy.</p>
                    <br />
                    <p>If you fail to respond to our notice of termination as per clause 9.3 within five (5) days, or if we decide to terminate this Policy even after receiving your reply, we shall send you a notice informing you of the termination of this Policy and this Policy shall stand terminated and your referral code/ link shall stand deactivated from the time you receive such notice. </p>
                    <br />
                    <p>Upon the termination of this Policy, all the rights and obligations of you and Social Comment under this Policy will be extinguished, except for the rights, obligations, and/or provisions mentioned in clause 18.5. </p>
                    <br />
                    <p>The balance in your Wallet at the time of termination shall stand forfeited and neither you, your nominee, your legal heirs, or your successors shall have any claim on the balance so forfeited. Additionally, the termination of this Policy shall not relieve either you or Social Comment from any liability arising from any breach of this Policy prior to termination.</p>
                    <br />
                    <p>Once this Policy is terminated and your referral code/ link is disabled, you can continue to post content on the Platform as long as you have an active account. However, you cannot share your referral code/ link with others.</p>
                    <br />
                    <p>After the termination of this Policy, Social Comment may, at its discretion, reactivate your referral code/referral link on receiving a request from you in this regard at <a href="mailto:thesocialcomments@gmail.com">thesocialcomments@gmail.com</a>. If Social Comment reactivates your referral code/link you can once again share your referral code/referral link with others and receive benefits under this Policy. Please keep in mind that you will be bound by this Policy again if you share your reactivated referral code/referral link with others. </p>
                </div>

            </section>
            <br />
        </>
    )
}

export default Termination
