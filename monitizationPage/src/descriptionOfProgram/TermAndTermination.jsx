import React from 'react';
import "./Content.css";
import termAndTermination from "../images/descriptionLinkImages/termAndTermination.jpg";

function TermAndTermination() {

    return (
        <section className="content_page" >
            <div className="content_page_wrapper" >
                {/* <h1 className="watermark" > Clause 3 </h1> */}
                <img className="content_page_image" src={termAndTermination} alt="" />
                <div className="content_page_text" >
                    <br />
                    <br />
                    <div class="textHead">
                        <h1>Term and Termination</h1>
                        <h4>Clause 11</h4>
                    </div>
                    <br />
                    <br />
                    <ul>
                        <li>The term of this Policy shall start upon the completion of your registration with the Program and will end when this Policy is terminated by either you or us.</li>
                        <li>You may terminate this Policy at any time by leaving the Program.</li>
                        <p><strong>We may terminate this Policy by removing you from the Program if:</strong> </p>
                        <li>We come to know that you have previously been removed from the Program more than once, whether while using your current account or while using another account;</li>
                        <li>We come to know that you have artificially inflated your views, shares or followers on the Platform whether before you were registered with the Program, or during the time you are registered with the Program;</li>
                        <li>You breach any of the terms of this Policy or of our Terms of Service, Community Guidelines, or Privacy Policy; </li>
                        <li>Your account remains inactive for a significant amount of time after your registration with the Program; </li>
                        <li>You regularly post non-monetizable content even after receiving fair warning; </li>
                        <li>You behave in an offensive or unacceptable manner; or  </li>
                        <li>You violate any other guidelines that we may from time to time specify. </li>
                        <p><strong>Additionally, we reserve the right to terminate this Policy by removing you from the Program for any or no reason. If we decide to terminate this Policy and remove you from the Program, we shall send you a notice of termination and this Policy will stand terminated and you shall stand removed from the Program on the date you receive such notice.</strong></p>
                        <li>Upon the termination of this Policy, all the rights and obligations of you and Social Comment under this Policy will be extinguished, except for the rights and obligations mentioned in clause 18.5. </li>
                        <li>Additionally, the termination of this Policy shall not relieve either you or Social Comment from any liability arising from any breach of this Policy prior to termination.</li>
                        <li>Once this Policy is terminated and you leave or are removed from the Program, you can continue to post content on the Platform as long as you have an active account. If you want to rejoin the Program, you have to apply again for the Program by following the application procedure in clause 3 of this Policy. Please note that you if you have been removed from the Program more than once, you cannot reapply for the Program.</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default TermAndTermination
