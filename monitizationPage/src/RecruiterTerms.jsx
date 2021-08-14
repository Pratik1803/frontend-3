import React from 'react';
import "./StudentInternship.css";
import SignUpHeader from './SignUpHeader';
import RecruiterTermslinks from './RecruiterTermslinks';
import disclaimer from "./images/termsForRecruiters/links/disclaimer.png";
import changeSiteTerms from "./images/termsForRecruiters/links/changeSiteTerms.png";
import agreement from "./images/termsForRecruiters/links/agreement.png";
import employerRegistration from "./images/termsForRecruiters/links/employerRegistration.png";
import informationForEmployers from "./images/termsForRecruiters/links/informationForEmployers.png";
import scope from "./images/termsForRecruiters/links/scope.png";
import specificterms from "./images/termsForRecruiters/links/specificTerm.png";
import termination from "./images/termsForRecruiters/links/termination.png";
import { NavLink } from 'react-router-dom';

function RecruiterTerms() {
    return (
        <>
            <SignUpHeader />
            <section className="student_internship_page" >
                <div className="student_internship_page_wrapper" >
                    <br />
                    <br />
                    <div className="studenttextHead">
                        <h1>Recruiter Terms and Conditions</h1>
                        <br />
                        <p>This Social Comment Student internship/Job/internship/internship application Policy (“Policy”) contains the terms and conditions which govern the Social Comment (“Portal”), which is operated by Social Comment Private Ltd. (“we”, “us”, “our”, thesocialcomment.com, thesocialcomment, SOCO or “Social Comment”).</p>
                        <br />
                        <p>We shall have the sole and exclusive power to determine the type, content, and placement of ads in and around your content on the Platform. We reserve the right to place ads in or around your content even if you are not registered with the Program.</p>
                        <br />
                    </div>
                    <br />
                    <br />
                    <div className="recruiter_terms_links_wrapper" >
                        <NavLink exact to="recruiter-disclaimer" style={{ textDecoration: "none" }}><RecruiterTermslinks title="Disclaimer" src={disclaimer} /></NavLink>
                        <NavLink exact to="scope" style={{ textDecoration: "none" }}><RecruiterTermslinks title="Scope" src={scope} /></NavLink>
                        <NavLink exact to="information-for-employers" style={{ textDecoration: "none" }}><RecruiterTermslinks title="Information For Employers" src={informationForEmployers} /></NavLink>
                        <NavLink exact to="employer-registration" style={{ textDecoration: "none" }}><RecruiterTermslinks title="Employer Registrations" src={employerRegistration} /></NavLink>
                        <NavLink exact to="specific-terms" style={{ textDecoration: "none" }}><RecruiterTermslinks title="Specific Terms & Conditions" src={specificterms} /></NavLink>
                        <NavLink exact to="recruiter-termination" style={{ textDecoration: "none" }}><RecruiterTermslinks title="Termination" src={termination} /></NavLink>
                        <NavLink exact to="employers-agreement" style={{ textDecoration: "none" }}><RecruiterTermslinks title="Agreement" src={agreement} /></NavLink>
                        <NavLink exact to="changes-to-site-terms" style={{ textDecoration: "none" }}><RecruiterTermslinks title="Changes to Site Terms" src={changeSiteTerms} /></NavLink>
                    </div>
                    <br />
                    <br />
                </div>
            </section>
        </>
    )
}

export default RecruiterTerms