import React from 'react';
import employerRegistration from "../images/termsForRecruiters/employerRegistration.png";
import SignUpHeader from '../SignUpHeader';
import "../StudentIntern/StudentIntern.css";

function EmployerRegistration() {
    return (
        <>
            <SignUpHeader />
            <br />
            <br />
            <div className="student_intern_sublink_text">
                <img className="student_intern_page_image" src={employerRegistration} alt="" />
                <div className="student_intern_page_desc">
                    <h3>Employer Registrations and Job/internship Postings.</h3>
                    <p>We reserve the right to screen all employer registrations and/or job/internship posting submissions, and the right to decline posting employment opportunities.</p>
                    <p>Job/internship postings must be complete with a job/internship title, job/internship description and job/internship requirements. If insufficient information is provided, an employer registration and/or job/internship posting may be declined. All employers registered on the portal with a valid email address and telephone number with necessary details & documentation for verification.</p>
                    <p>Job/internship postings submitted through the online system must be clearly marked as volunteer if they are unpaid positions, this includes unpaid internships.</p>
                    <p>Job/internship postings of an inappropriate manner, including postings which have profane language, involve nudity, etc. will not be posted.</p>
                    <p>Opportunities in which students are asked to be subjects of research studies will not be posted</p>
                    <p>Organizations are asked to refrain from having the job/internship posting deadline/end date no more than 3-6 months from the posting date on our sole discretion. If your organization is constantly recruiting for the same position, you will be able to repost your position. This will ensure that your job/internship posting does not become stale</p>
                </div>
            </div>
            <br />
            <br />
        </>
    )
}

export default EmployerRegistration
