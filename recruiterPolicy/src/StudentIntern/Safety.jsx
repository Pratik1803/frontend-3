import React from 'react';
import "./StudentIntern.css";
import second from "../images/studentIntern/second.png";
import SignUpHeader from '../SignUpHeader';

function Safety() {
    return (
        <>
            <SignUpHeader />
            <br />
            <div className="student_intern_page_text" >
                <img className="student_intern_page_image" src={second} alt="" />
                <div className="student_intern_page_desc">
                    <h3>Safety tips must read: -</h3>
                    <br />
                    <h4>We do NOT allow Employers to post/offer/charge:</h4>
                    <br />
                    <ul>
                        <li><p>Unless the Job/internship posting specifically states otherwise, offer unpaid Job/internship.</p></li>
                        <br />
                        <li><p>Any programme where Applicants are required to pay a security deposit or an entrance fee, including post-training programmes.</p></li>
                        <br />
                        <li><p>To charge Job/internship applicants money in any form (such as a test fee, a security deposit, or paperwork fees), in return for a Job/internship. This is strictly prohibited.</p></li>
                        <br />
                        <li><p>Offer modelling Job/internship from lesser-known companies.</p></li>
                        <br />
                        <li><p>Offer Network Level Marketing (NLM) Job/internship//internships, in which applicants/individuals must promote a firm through their own connections and social media profiles.</p></li>
                        <br />
                        <li><p>Offer any Job/internship where there is a possibility for an Applicant consuming alcohol or smoking or inducing others to do so, as the majority of our users are underage.</p></li>
                        <br />
                        <li><p>As the majority of our users are underage, offer any Job/internship where there is a potential of an Applicant drinking alcohol or smoking or persuading others to do so. (Is strictly not allowed).</p></li>
                        <br />
                        <li><p>Job/internship postings by persons or organizations advocating explicit religious material, a certain religious personality, or a sect, etc.</p></li>
                        <br />
                        <li><p>Post Job/internships & Internships for businesses that promote or deal in gambling, pornography and other prohibited/illegal/age-inappropriate activities.</p></li>
                        <br />
                        <li><p>Make third party Job/internship posting. An Employer can post Job/internships only for the organization that he/she directly works for. Recruiting agencies or any third-party agencies are not authorized to post Job/internships on their clients' behalf.</p></li>
                    </ul>
                    <br />
                    <h4>Employer must:</h4>
                    <br />
                    <ul>
                        <br />
                        <li><p>Job/internships details communicated to Applicants at any stage are same as advertised with us and there is no negative material difference (Ex. - offering lower or no stipend than what was advertised on our portal).</p></li>
                        <br />
                        <li><p>Any assignment(s) that they may give to Applicants to assess their suitability for the Job/internship should be fair and relevant to the Job/internship profile. Any attempt to get work done for free from Applicants disguised as assessment or to get them to download or generate downloads for an app or get likes/shares/comments etc. for Employer's social media handles only for the purpose of getting free publicity disguised as an assignment are strictly prohibited.</p></li>

                        <br />
                        <li><p>All their communications with Applicants (through our Chat system or otherwise) are professional and must not contain any obscene or offensive content.</p></li>
                        <br />
                        <li><p>Once they hire any Applicant(s) for their Job/internship, they must provide them with an offer letter clearly detailing all the important details of the Job/internship (such as role & responsibilities, remuneration, and payment mechanism) and complete address and contact details of Employer.</p></li>
                        <br />
                        <li><p>They pay the promised remuneration to the selected Applicant(s) in a timely manner as per agreed terms and conditions of the Job/internship as detailed in the offer letter.</p></li>
                        <br />
                        <li><p>If you come across any example of any Employer violating these guidelines, you must report it to us emailing at <a href="mailto:thesocialcomments@gmail.com">thesocialcomments@gmail.com</a> so that we can investigate and take appropriate actions.</p></li>
                    </ul>
                    <br />
                    <h3>Termination</h3>
                    <br />
                    <p>Notwithstanding any of these Site/Portal Terms, we reserve the right, without notice and in its sole discretion, to terminate your account and/or to block your use of the Site.</p>
                    <br />
                    <h3>Changes to Site Terms</h3>
                    <br />
                    <p>We reserve the right to change any of the terms and conditions contained in the Site/Portal Terms or any policy or guideline of the Portal/Site, at any time and in its sole discretion. Any changes will be effective immediately upon posting on the Site. Your continued use of the Site following the posting of changes will constitute your acceptance of such changes. We encourage you to review the portal/Site Terms whenever you visit the website.</p>
                </div>

            </div>
            <br />
            <br />
        </>
    )
}

export default Safety
