import React from 'react';
import "./Content.css";
import paymentTerms from "../images/descriptionLinkImages/paymentTerms.jpg";

function PaymentTerms() {

    return (
        <section className="content_page" >
            <div className="content_page_wrapper" >
                <img className="content_page_image" src={paymentTerms} alt="" />
                <div className="content_page_text" >
                    <br />
                    <br />
                    <div class="textHead">
                        <h1>Payment Terms</h1>
                        <h4>Clause 7</h4>
                    </div>
                    <br />
                    <br />
                    <ul>
                        <li>You need to have an ad provider account (such as Google AdSense) linked with the Platform in order to receive Program Fees. We may assist you with any ad provider to work with after you have completed your registration with the Program. Please note that you need to have your ad provider account linked with the Platform for the entire duration while you are registered with the Program. If your ad provider account is suspended or terminated while you are registered with the Program, you will need to link a secondary account with the Platform within fifteen (15) days of such suspension or termination.</li>
                        <li>Any Program Fees payable to you under this Policy shall be paid to you on a monthly basis. The Program Fees shall be transferred by either us or the ad provider to your ad provider account linked with the Platform. If we are transferring the Program Fees, we shall transfer the Program Fees for each calendar month within forty-five (45) days from the end of that month. In case the ad provider is transferring the Program Fees, it shall transfer the Program Fees in accordance with its Terms and Conditions. Please note that once the Program Fees have been transferred into your ad provider account, your retrieval or transfer of the Program Fees from the ad provider account shall be governed by the ad provider’s Terms and Conditions, for which we take no responsibility. </li>
                        <li>In case Social Comment makes an excess payment to you for any reason, or if Social Comment pays you Program Fees for content that Social Comment subsequently finds to be non-monetizable as per clause 2.1, Social Comment reserves the right to adjust or offset the same against any subsequent fees payable to you under this Policy.</li>
                        <li>You agree that you shall be solely responsible for paying any applicable state or central level taxes (including, without limitation, income tax and GST) on any fees that you receive under this Policy.</li>
                        <li>If there are unpaid Program Fees payable to you under this Policy amounting to more than INR _____ on the date of termination, Social Comment shall credit such fees to your ad provider account within forty-five (45) days from the date of termination.</li>
                        <li>These Payment Terms are not final and are subject to change. You agree and acknowledge that we may change these Payment Terms at any time and that it is your responsibility to keep yourself updated with any changes that we make to these Payment Terms.</li>
                        <li>If you experience any issues with the payment of Program Fees under this Policy, please drop us a mail at <a href="mailto:thesocialcomments@gmail.com" >thesocialcomments@gmail.com</a>. </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default PaymentTerms
