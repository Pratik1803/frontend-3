import React from 'react';
import "./StudentIntern.css";
import studentMustRead from "../images/studentIntern/studentsMustRead.png";
import SignUpHeader from '../SignUpHeader';

function Terms() {
    return (
        <>
            <SignUpHeader />
            <br />
            <br />
            <div className="student_intern_page_text" >
                <img className="student_intern_page_image" src={studentMustRead} alt="" />
                <div className="student_intern_page_desc">
                    <br />
                    <h3>Specific Terms & Conditions for Applicants/Students.</h3>
                    <br />
                    <ul>
                        <li><p>These Terms, specifically for Applicants/Students, are in addition to the other generic Terms & Conditions listed on the page which are common to all the users of the Portal and which you are required to go through. Any violation of these T&Cs may result in, but not limited to, an applicant's Job/internship application being declined and/or his/her account being permanently blocked and/or suitable legal action being initiated against him/her by thesocialcomment.</p></li>
                        <br />
                        <li><p>We make our best efforts to bring you the best Job/internship/internship opportunities possible, we do not guarantee a Job/internship/internship to a student.</p></li>
                        <br />
                        <li><p>If you have applied for a Job/internship/Internships with us and receive a communication from Employer regarding your application, you must respond to it with-in 72 hours. We do not take/give guarantee that you will receive any Job/internship/Internships offer for implying this condition this is just to ease the process. </p></li>
                        <br />
                        <li><p>But if, you have applied for a Job/internship/Internships with us and receive a communication from us regarding your application, you must respond to it with-in 48 hours from the date of dispatching of the message/ communication.</p></li>
                        <br />
                        <li><p>Once you accept a Job/internship offer, you must make every attempt to join and begin the Job/internship on schedule. Not showing up, declining an earlier accepted Job/internship offer at the last minute, or going incommunicado leaves a very terrible impression of you in front of the Employer and diminishes the credibility of the Applicant community as a whole. Any such conduct would not only result in your account being blocked on our portal, but we will also report it to your college administration, if appropriate.</p></li>
                        <br />
                        <li><p>Employers' data (contact details, etc.) cannot be transferred, sold, or shared with any other business, whether for free or for a fee. Any effort to do so will result in your account being permanently blocked, as well as legal action being taken against you.</p></li>
                        <br />
                        <li><p>When applying for a Job/internship or creating an account with us, you must provide accurate and complete information – any misrepresentation of information, concealment of material information, or impersonation will result in your account being blocked on the Portal and you being reported to your college administration, if applicable.</p></li>
                        <br />
                        <li><p>You should study all of the details before applying for a Job/internship (profile, location, remuneration, required abilities, etc.). Your account will be penalized if you submit irrelevant applications (we may stop you from applying to future Job/internship/internship or block your account all together).</p></li>
                        <br />
                        <li><p>We are a community of sincere users/students who are recognized for and expected to exemplify high standards of professionalism in their dealings with other users and Employers - you are obliged to uphold these community standards and decorum. All conversations with other users of our platform (through our Chat system or otherwise) must be professional and free of obscene or objectionable content.</p></li>
                        <br />
                        <li><p>If you see any questionable activity, content, or behavior on our Portal by an Employer or a user, you must report it to us promptly so that appropriate action may be taken - this is both your Job/internship and your obligation.</p></li>
                        <br />
                        <li><p>You agree to have gone through the ‘Safety Tips for Applicants' section of these Terms and have understood the same. </p></li>
                        <br />
                        <li><p>We make every effort to present you with correct and trustworthy Job/internship/internships opportunities’ information, errors are always possible. As a result, before beginning a Job/internship/internships, you must perform your own due diligence and investigation on the employer or organization, and you must accept full responsibility for the same. You also agree to have read and understood the 'Disclaimers' part of these Terms and to expressly and explicitly agree to it.</p></li>
                        <br />
                        <li><p>When you join, you will automatically get subscribed your email address and phone number to get email; call; application and SMS notifications from us. You have the option to opt out at any time.</p></li>
                        <br />
                        <ul>
                            <li><p>In case when any offer is revoked, the hiring manager/Employer and human resources department of the concerned company should draft and sign an official document. This document should include a legitimate reason for revoking the offer. Legitimate reasons including all the obligation/reason specified in the offer letter provided by the company:</p></li>
                            <li><p>Candidate is proved to not be legally allowed to work for our company at a specific location</p></li>
                            <li><p>Candidate has falsified references or otherwise lied about a serious issue.</p></li>
                            <li><p>Candidate doesn’t accept the offer within the specified deadline (deadline must have been included in the offer letter). </p></li>
                        </ul>
                    </ul>
                </div>
            </div>
            <br />
            <br />
        </>
    )
}

export default Terms
