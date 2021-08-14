import React from 'react';
import scope from "../images/termsForRecruiters/scope.png";
import SignUpHeader from '../SignUpHeader';
import "../StudentIntern/StudentIntern.css";

function RecruiterDisclaimer() {
    return (
        <>
            <SignUpHeader />
            <br />
            <br />
            <div className="student_intern_sublink_text">
                <img className="student_intern_page_image" src={scope} alt="" />
                <div className="student_intern_page_desc">
                    <h3>Scope</h3>
                    <p>These Terms, specifically for all Employers, are in addition to the other generic Terms & Conditions listed on the page which are common to all the users of the site/portal and which you are required to go through. Any violation of these Terms may result in, but not limited to, an Employer's Job/internship being declined for publication on our portal and/or his/her account being permanently blocked and/or appropriate legal action being initiated against him/her by us. This policy applies to all employers/companies/startups/enterprises/firms who are involved in hiring through our platform. It refers to all potential job/internship candidates. </p>
                </div>
            </div>
            <br />
            <br />
        </>
    )
}

export default RecruiterDisclaimer
