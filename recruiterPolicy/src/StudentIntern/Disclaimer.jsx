import React from 'react'
import disclaimer from "../images/studentIntern/disclaimer.png";
import LoginHeader from '../LoginHeader';
import "./StudentIntern.css";

function Disclaimer() {
    return (
        <>
            <LoginHeader />
            <br />
            <div className="student_intern_page_text" >
                <img className="student_intern_page_image" src={disclaimer} alt="" />
                <div className="student_intern_page_desc" >
                    <h3>Disclaimer</h3>
                    <p>We put our best efforts to reach out to the best opportunity available in the country, choosing & paying for our portal service (s) does not promises(s)/guarantee hiring or any Job/internships offer. Please exit the Portal/Website/Application immediately if you do not accept or agree to the Terms & Policy. </p>
                    <p>We put our best efforts to screen employers but neither or nor endorses their employment opportunities, labor practices, products, or services. As data is subject to change at the discretion of each employer, information has not been verified and we cannot be held responsible for any inconsistencies or errors. We do not warrant the legitimacy of any of the information in the posting, including the company and the position itself. It is the responsibility of each applicant to review and research each employment opportunity prior to applying.</p>
                    <p>It is not our role to monitor the recruiting or operational practices of companies; however, we may investigate any situation upon receipt of a student complaint regarding specific recruitment practices or treatment of students and refer the matter accordingly. If you encounter any problems or concerns with employers/Job/internship/internships opportunities, please mail us to thesociaclomments@gmail.com We will try to revert back to you within 7 days of receiving your email, but it may take us up to sixty (60) days.</p>
                    <p>Whether you apply for Job /internships you learned about through the us/our online Job/internship posting system, or internet, or through other Job/internship postings you may have learned about through our activities such as recruitment, career mentoring and employment fairs, panel discussions and/or workshops, it is YOUR responsibility, and it is in your best interest, to verify the terms and conditions of employment/internship with the employer.</p>
                    <p>This Portal and its content are provided and (“we”, “us”, “our”, thesocialcomment.com, thesocialcomment, SOCO or “Social Comment”) and its directors, employees, content providers, agents and affiliates exclude, to the fullest extent permitted by applicable law, any warranty, express or implied, including, without limitation, any implied warranties of merchantability, satisfactory quality or fitness for a particular purpose. We will not be liable for any damages of any kind arising from the use of this Portal. The functions embodied on or in the materials of this Portal are not warranted to be uninterrupted or without error. You, not (“we”, “us”, “our”, thesocialcomment.com, thesocialcomment, SOCO or “Social Comment”), assume the entire cost of all necessary care or correction due to your use of this Portal or content. We make no warranty that the Portal or the content is free from infection by viruses or anything else that has contaminating or destructive properties. WE use reasonable efforts to ensure the accuracy, correctness and reliability of the Content, but we make no representations or warranties for the same. Images of people or places displayed on the Portal are either the property of, or used with permission by, WE or third parties. The use of these images by you, or anyone else authorized by you, is prohibited unless specifically permitted by these Terms or specific permission provided elsewhere on the Portal or by separate license or agreement. Any unauthorized use of these images may violate copyright laws, trademark laws, the laws of privacy and publicity, and other applicable laws.</p>

                    <br />
                    <h5>Employers with Entrepreneurial/Franchise Opportunities.</h5>
                    <br />
                    <ul>
                        <li><p>Some employers and franchise managers wish to publicize entrepreneurial opportunities to the students registered on our platform. These kinds of opportunities usually involve one or more of the following characteristics:</p></li>
                        <li><p>Offer no salary but, instead, offer students the opportunity to run their own businesses or franchises</p></li>
                        <li><p>Offer compensation that is based mostly on commission rather than a salary.</p></li>
                        <li><p>Require the payment of “up front” fees for training and/or materials to enable the student to start up his/her own business.</p></li>
                        <li><p>Charge the students penalties or fees for services if the franchisee decides to leave the program.</p></li>
                        <li><p>Many students run successful businesses through these opportunities, but there are those who incur unexpected liabilities and find themselves in debt. It is YOUR responsibility, and it is in your best interest, to research the organization, as well as to verify the terms and conditions of employment with the employer.</p></li>

                    </ul>
                </div>
            </div>
            <br />
            <br />
        </>
    )
}

export default Disclaimer
