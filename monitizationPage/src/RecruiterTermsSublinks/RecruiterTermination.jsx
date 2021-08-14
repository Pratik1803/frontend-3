import React from 'react';
import termination from "../images/termsForRecruiters/termination.jpg";
import SignUpHeader from '../SignUpHeader';
import "../StudentIntern/StudentIntern.css";

function RecruiterTermination() {
    return (
        <>
            <SignUpHeader />
            <br />
            <br />
            <div className="student_intern_sublink_text">
                <img className="student_intern_page_image" src={termination} alt="" />
                <div className="student_intern_page_desc">
                    <h3>Termination</h3>
                    <p>Notwithstanding any of these Site/Portal Terms, we reserve the right, without notice and in its sole discretion, to terminate your account and/or to block your use of the Site.</p>
                </div>
            </div>
            <br />
            <br />
        </>
    )
}

export default RecruiterTermination
