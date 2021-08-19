import React from 'react';
import learnMore from "../images/learnMore.png";
import "../DescriptionSubpages/DescriptionLinks.css";

function LearnMore() {
    return (
        <>
            <br />
            <section className="description_link_pages" >
                <div className="description_link_image">
                    <img src={learnMore} alt="" />
                </div>
                <div className="description_link_text" >
                    <br />
                    <br />
                    <h1>Our Referral Policy</h1>
                    <br />
                    <br />
                    <p>This Referral Policy (“Policy”) contains the terms and conditions which govern the use of referral codes/links on thesocialcomment.com (“Platform”).  Any user of the Platform who shares their referral code/referral link (“you” or “your”) must agree to this Policy without change. You also agree that this Policy constitutes a binding and enforceable legal contract between you and Social Comment Pvt. Ltd. (“we”, “us”, “our”, or “Social Comment”). In addition, clauses 3 and 4 of this Policy apply to anyone who uses an existing user’s referral code while creating their account on the Platform (“Referee”) and every Referee agrees and acknowledges that the aforementioned clauses constitute a binding and enforceable legal agreement between them and Social Comment, which they agree to without change. If you disagree with any aspect of this Policy, your only recourse is to refrain from sharing your referral code/link or using a referral code/ link while creating your account on the Platform. Please note that you are still bound by our Terms of Service, Privacy Policy, and Community Guidelines if you use the Platform in any manner. In case of any conflict between this Policy and our Terms of Service, Privacy Policy, or Community Guidelines, this Policy will prevail with respect to its subject matter. However, if you are a member of our Affiliate Program, the provisions of this Policy shall prevail in the event of any conflict between the Affiliate Agreement/Business Partner Agreement and this Policy. For the purposes of this Policy, “WE”, “US”, and “OUR” (when written in capital letters) shall refer to both you and Social Comment collectively.</p>
                </div>

            </section>
            <br />
            <br />
        </>
    )
}

export default LearnMore
