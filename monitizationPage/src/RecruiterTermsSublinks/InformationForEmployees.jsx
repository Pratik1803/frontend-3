import React from 'react';
import informationForEmployees from "../images/termsForRecruiters/informationForEmployees.png";
import SignUpHeader from '../SignUpHeader';
import "../StudentIntern/StudentIntern.css";

function RecruiterDisclaimer() {
    return (
        <>
            <SignUpHeader />
            <br />
            <br />
            <div className="student_intern_sublink_text">
                <img className="student_intern_page_image" src={informationForEmployees} alt="" />
                <div className="student_intern_page_desc">
                    <h3>Information for Employers</h3>
                    <p>It is highly recommended that organizations abide by the Guidelines & Terms & Conditions for Ethical Recruitment and the definition of internships as outlined by all applicable laws & our must be abided by our policies. Employers must adhere to all applicable laws, Labor Laws and provincial legislation pertaining to recruitment and other activities that may affect users/students using our portal.
                        We reserve the right to ban or suspend an employer from participating in any of its events and/or services based on student complaints, behavior or actions by the employer contrary to the employer guidelines, and for any reason deemed necessary by us. It is not the role of us to monitor the recruiting practices of employers; however, if there is a complaint regarding an organization's recruiting practices, we will investigate.
                    </p>
                </div>
            </div>
            <br />
            <br />
        </>
    )
}

export default RecruiterDisclaimer
