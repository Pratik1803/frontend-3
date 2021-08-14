import React from 'react';
import applicationProcedure from "../images/descriptionLinkImages/applicationProcedure.jpg";

function ApplicationProcedure() {
    return (
        <section className="content_page" >
            <div className="content_page_wrapper" >
                <h1 className="watermark" > Clause 3 </h1>
                <img className="content_page_image" src={applicationProcedure} alt="" />
                <div className="content_page_text" >
                    <h1>Application Procedure</h1>
                    <ul>
                        <li>If you feel that you fulfill the eligibility criteria outlined in clause 3, you can apply to register for the Program by dropping us an email at <a href="mailto:thesocialcomments@gmail.com">thesocialcomments@gmail.com</a>. Please note that your fulfillment of the eligibility criteria does not guarantee your registration with the program and we retain the right to reject your application even if you fulfill the eligibility criteria.</li>
                        <li>Once we receive your email, we will process your application and either accept or reject it. We may require you to submit documents to verify that you meet the age requirements while we are processing your application. We will try to revert back to you within 7 days of receiving your email, but it may take us up to sixty (60) days. However, if any of your content is reported as non-monetizable while we are processing your application, it might take us longer to revert back to you as the application will be decided only after deciding the issue according to clause 8 of this Policy. Please note that you will not be able to reapply for the Program while we are processing an earlier application from you. Once we have accepted your application, your registration with the Program will be complete.</li>
                        <li>If you reapply for the Program after having been previously removed from the Program by us under Clause 11.3, we will monitor your account for six months from the date you reapply for the Program and shall begin processing your application in accordance with the preceding sub-clause only upon the expiry of six months. If we find that you have violated any of our Terms of Service, Community Guidelines, or Privacy Policy, or have posted any non-monetizable content during the six months while we are monitoring your account, we will immediately reject your application without processing it.</li>
                        <li>We may also invite you to join the Program if you fulfill the eligibility requirements. If you receive an invitation from us to join the Program, you can immediately complete your registration with the Program by accepting our invitation. Additionally, we reserve the right to induct you into the Program even if you have not applied for the program and/or if you have rejected an invitation from us to join the Program. In case we decide to induct you into the Program, we shall send you a notice regarding our intention to induct you into the Program and your registration with the Program will be deemed to be complete on the date you receive the notice.</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default ApplicationProcedure
