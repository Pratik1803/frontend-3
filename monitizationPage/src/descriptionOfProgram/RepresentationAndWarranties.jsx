import React from 'react';
import "./Content.css";
import representationAndWarranties from "../images/descriptionLinkImages/representationAndWarranties.jpg";

function RepresntationAndWarranties() {
    return (
        <section className="content_page" >
            <div className="content_page_wrapper" >
                {/* <h1 className="watermark" > Clause 8 </h1> */}
                <img className="content_page_image" src={representationAndWarranties} alt="" />
                <div className="content_page_text" >
                    <h1>Representation And Warranties.</h1>
                    <ul>
                        <h3>You represent, warrant, and covenant that:  </h3>
                        <li>You are at least 18 years of age (or the age of legal majority in your country of   residence);</li>
                        <li>You have not been previously removed from the Program more than once, whether while using your current account or while using a different account; </li>
                        <li>Your participation in the Program is not prohibited by any applicable laws, ordinances, rules, regulations, orders, judgements, or other requirements of any applicable governmental authority; </li>
                        <li>You will follow the terms and conditions of this Policy while you are registered with the Program and, where applicable, after you have left or been removed from the Program; </li>
                        <li>Your acceptance of this Policy and your performance of your obligations under this Policy does not, and will not, violate any other agreement to which you are a party or by which you are otherwise bound, and  </li>
                        <li>All the information that you provide to us under this Policy or in connection with the Program is complete and accurate at all times. You can update your information in your social comment account orby contacting us at <a href="mailto:thesocialcomments@gmail.com" >thesocialcomments@gmail.com</a>.  </li>
                    </ul>
                    <h3>We do not make any representation, warranty, or covenant, express or implied, about the amount of money you can expect to receive under the Program, and we will not be liable for any actions you take based on such expectations. </h3>
                </div>
            </div>
        </section>
    )
}

export default RepresntationAndWarranties
