import React from 'react';
import disclaimer from "../images/studentIntern/disclaimer.png";
import SignUpHeader from '../SignUpHeader';
import "../StudentIntern/StudentIntern.css";

function RecruiterDisclaimer() {
    return (
        <>
            <SignUpHeader />
            <br />
            <br />
            <div className="student_intern_sublink_text">
                <img className="student_intern_page_image" src={disclaimer} alt="" />
                <div className="student_intern_page_desc">
                    <h3>Disclaimer</h3>
                    <p>We put our best efforts to reach out to the best talent available in the country, posting your Job/internship on our portal does not guarantee hiring. Please exit the Site/portal immediately if you do not accept or agree to the Terms & Policy.
                        This Portal/Site and its content are provided and (“we”, “us”, “our”, thesocialcomment.com, thesocialcomment, SOCO or “Social Comment”) and its directors, employees, content providers, agents and affiliates exclude, to the fullest extent permitted by applicable law, any warranty, express or implied, including, without limitation, any implied warranties of merchantability, satisfactory quality or fitness for a particular purpose. We will not be liable for any damages of any kind arising from the use of this Portal. The functions embodied on or in the materials of this Portal are not warranted to be uninterrupted or without error. You, not (“we”, “us”, “our”, thesocialcomment.com, thesocialcomment, SOCO or “Social Comment”), assume the entire cost of all necessary care or correction due to your use of this Portal/Site or content. We make no warranty that the Portal or the content is free from infection by viruses or anything else that has contaminating or destructive properties. WE use reasonable efforts to ensure the accuracy, correctness and reliability of the Content, but we make no representations or warranties for the same. Images of people or places displayed on the Portal are either the property of, or used with permission by, WE or third parties. The use of these images by you, or anyone else authorized by you, is prohibited unless specifically permitted by these Terms or specific permission provided elsewhere on the Portal/Site or by separate license or agreement. Any unauthorized use of these images may violate copyright laws, trademark laws, the laws of privacy and publicity, and other applicable laws.
                    </p>
                    <h4>We Reserve the Right:</h4>
                    <p>You/I, individually and on behalf of the Organization/Company signed up on the platform (if any), hereby authorize Social Comment Pvt. Ltd. and its affiliates, as well as their respective agents, employees, contractors, resellers, sub-licensees, and assignees (collectively, "thesocialcomment") a.k.a (SOCO), to reproduce, publish, distribute, and/or translate all or any part of the following items for marketing purposes.</p>
                    <ul>
                        <li><p>My testimonials (written or recorded) and/or case studies regarding my use of the thesocialcomment services provided by me to thesocialcomment (or recorded by thesocialcomment), any of which may be used (i) on websites operated by thesocialcomment, including but not limited to thesocialcomment, and any subpages of such sites (collectively, the “thesocialcomment Sites”); (ii) on the thesocialcomment video repository on www.YouTube.com; and/or (iii) in commercial presentations;</p></li>
                        <br />
                        <li> <p>My name and the Organization/Company name and logo provided to thesocialcomment, to identify me and Organization/Company as a customer or free user of thesocialcomment on the thesocialcomment Sites, in customer lists, presentations, and other marketing collateral (including in connection with other Items), in any language.</p></li>
                    </ul>
                </div>
            </div>
            <br />
            <br />
        </>
    )
}

export default RecruiterDisclaimer
