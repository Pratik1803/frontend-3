import React from 'react';
import "./LearnMore.css";
import learnMore from './images/learnMore.jpg';

function LearnMore() {
    return (
        <section className="content_page" >
            <div className="content_page_wrapper" >
                <img className="content_page_image" src={learnMore} alt="" />
                <div className="content_page_text" >
                    <br />
                    <br />
                    <div class="textHead">
                        <h1>Our Content Monitization Policy</h1>
                        <h4>Clause 1</h4>
                    </div>
                    <br />
                    <br />
                    <ul>
                        <p>This Social Comment Content Monetization Policy (“Policy”) contains the terms and conditions which govern the Social Comment Partner Program (“Program”), which is operated by Social Comment Private Ltd. (“we”, “us”, “our”, or “Social Comment”).Any person that participates or attempts to participate in the Program (“you”, or “your”) must accept this Policy without change and you further acknowledge and agree that this Policy constitutes a binding legal contract between you and Social Comment. If you do not agree with any aspect of this Policy, your only recourse is to refrain from registering or attempting to register with the Program. Please note that clauses 3 and 4 of this Policy apply to you if you are applying for registration with the Program, while the remaining provisions of the Policy apply to you only after the completion of your registration with the Program. In addition, you are still bound by clauses 2 and 8 of this Policy, and our Terms of Service, Privacy Policy, and Community Guidelines if you use thesocialcomment.com (“Platform”) in any manner (including when you post content or any comments on the Platform without being registered with the Program). In case of any conflict between this Policy and our Terms of Service, Privacy Policy, or Community Guidelines, this Policy will prevail with respect to its subject matter.</p>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default LearnMore

