import React from 'react';
import recruiterTerms from "../images/recruiterTerms.png";
import SignUpHeader from '../SignUpHeader';
import "../StudentIntern/StudentIntern.css";

function EmployersAgreement() {
    return (
        <>
            <SignUpHeader />
            <br />
            <br />
            <div className="student_intern_sublink_text">
                <img className="student_intern_page_image" src={recruiterTerms} alt="" />
                <div className="student_intern_page_desc">
                    <h3>Employers Agree to-</h3>
                    <p>You, individually and on behalf of the Organization/Company specified (if any), hereby authorize Social Comment Pvt. Ltd. and its affiliates, and their respective agents, employees, contractors, resellers, sub-licensees and assignees (collectively, " Social Comment Pvt. Ltd.") to reproduce, publish, distribute and/or translate, for marketing purposes, all or any part of the following items ("Item(s)"):</p>
                    <br />
                    <ul>
                        <li><p>My testimonials (written or recorded) and/or case studies regarding my use of services provided by me to Social Comment Pvt. Ltd. (or recorded by Social Comment Pvt. Ltd.), any of which may be used (i) on websites operated by Social Comment Pvt. Ltd., including but not limited to www.thesocialcomment.com, and any subpages of such sites (collectively, the “Social Comment Sites”); (ii) on the Social Comment Pvt. Ltd. video repository on www.YouTube.com; and/or (iii) in commercial presentations;</p></li>
                        <br />
                        <li><p>My name and the Organization/Company name and logo provided to Social Comment Pvt. Ltd., to identify me and Organization/Company as a customer of Social Comment Pvt. Ltd. on the Social Comment Pvt. Ltd. Sites, in customer lists, presentations, and other marketing collateral (including in connection with other Items), in any language.</p></li>
                        <br />
                        <li><p>Social Comment Pvt. Ltd. may or may not obtain written consent from me or the Organization/Company prior to using any of the Items in any manner other than as described above. Social Comment Pvt. Ltd. will not make changes or alterations to the Item(s) in any way that substantially changes the content or meaning of the Item(s), and Social Comment Pvt. Ltd. is not mandatorily required to obtain my approval (which may be via email) on the final form of any testimonial, case study, or video testimonial.</p></li>
                    </ul>
                    <br />
                    <p>You represent and warrant that the Item(s): (i) are true and accurate to the best of my knowledge; (ii) have not been copied in whole or in part from any other work; and (iii) do not violate or infringe any copyright, trademark, or other proprietary rights of any person or entity. You acknowledge that you have received nothing of pecuniary value in exchange for making any of the above & below referenced Items, including any testimonial and/or case study, and that neither I, nor any member of my immediate family, are employed by Social Comment Pvt. Ltd.</p>
                </div>
            </div>

            <br />
            <br />
        </>
    )
}

export default EmployersAgreement
