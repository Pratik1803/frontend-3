import React from 'react';
import "./Content.css";
import programFees from "../images/descriptionLinkImages/programFees.jpg";

function ProgramFees() {
    return (
        <section className="content_page" >
            <div className="content_page_wrapper" >
                <h1 className="watermark" > Clause 6.3 </h1>
                <img className="content_page_image" src={programFees} alt="" />
                <div className="content_page_text" >
                    <h1>Representation And Warranties.</h1>
                    <ul>
                        <li>Under the Program, you will be entitled to receive a share of Net Ad Revenue in the manner described in clause 6.3 (“Program Fees”). “Net Ad Revenue” means any and all revenues actually received by Social Comment for the display or broadcast of any advertisements in connection with only your content/Profile, less any charge-backs, refunds, ad serving costs, processing fee, sales commissions or any other similar charges.</li>
                        <li>If you have paid the non-refundable fee of INR 5000, you shall be entitled to the entire Net Ad Revenue associated with your content. If you have not paid the non-refundable fee, you shall be entitled to 80% of the Net Ad Revenue associated with your content and the rest 20% shall be the revenue of Social Comment. Please note that you shall not be entitled to any ad revenue or any other type of revenue associated with your content that was received by us prior to the completion of your registration with the Program, or that is received by us after you have left/been removed from the Program. </li>
                        <li>You will also be entitled to discounts and referral fees in accordance with our Terms of Service if a user joins our Platform using your referral code. These referral fees and/or discounts will be reflected in the social comment wallet associated with your account. Please note that these referral fees and discounts are available to all users (including those who are not registered with the Program) and are governed by our Terms of Service. They are different from the Program Fees payable under the Program which are (i) only available to users who are registered with the Program and (ii) are paid directly into the registered user’s ad provider account.</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default ProgramFees
