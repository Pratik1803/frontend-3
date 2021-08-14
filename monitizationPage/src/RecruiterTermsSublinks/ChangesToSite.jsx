import React from 'react';
import changeToSite from "../images/termsForRecruiters/changeToSite.png";
import SignUpHeader from '../SignUpHeader';
import "../StudentIntern/StudentIntern.css";

function ChangesToSite() {
    return (
        <>
            <SignUpHeader />
            <br />
            <br />
            <div className="student_intern_sublink_text">
                <img className="student_intern_page_image" src={changeToSite} alt="" />
                <div className="student_intern_page_desc">
                    <h3>Changes to Site Terms</h3>
                    <p>We reserve the right to change any of the terms and conditions contained in the Site/Portal Terms or any policy or guideline of the Portal/Site, at any time and in its sole discretion. Any changes will be effective immediately upon posting on the Site. Your continued use of the Site following the posting of changes will constitute your acceptance of such changes. We encourage you to review the portal/Site Terms whenever you visit the website.</p>
                </div>
            </div>
            <br />
            <br />
        </>
    )
}

export default ChangesToSite
