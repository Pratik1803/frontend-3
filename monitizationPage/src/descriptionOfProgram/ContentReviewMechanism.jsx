import React from 'react';
import "./Content.css";
import contentReviewMechanism from "../images/descriptionLinkImages/contentReviewMechanism.jpg";

function ContentReviewMechanism() {

    return (
        <section className="content_page" >
            <div className="content_page_wrapper" >
                <img className="content_page_image" src={contentReviewMechanism} alt="" />
                <div className="content_page_text" >
                    <br />
                    <br />
                    <div class="textHead">
                        <h1>Content Review Mechanism</h1>
                        <h4>Clause 8</h4>
                    </div>
                    <br />
                    <br />
                    <ul>
                        <li>If any user finds any content on the Platform to be non-monetizable in terms of clause 2.1 of this Policy, they can report such content to us by sending us an email at <a href="mailto:thesocialcomments@gmail.com">thesocialcomments@gmail.com</a> with the relevant details of the non-monetizable content. Please note that any claims or complaints based on IPR infringement shall be dealt with under the procedure outlined in our Terms of Service.</li>
                        <li>Once we receive a report of any non-monetizable content, we shall inform the content creator of the content of the same and investigate whether the content is non-monetizable or not. We will try to finish our investigation within seven (7) days of receiving the report, but it may take us up to sixty (60) days. If we find the content to be non-monetizable, we shall inform the content creator of the same and the content creator shall have twenty-four (24) hours to take down the non-monetizable content. If the content creator fails to take down the non-monetizable content within twenty-four (24) hours, we shall remove the content from the Platform.</li>
                        <li>If any content creator is aggrieved by our decision that any of their content is non-monetizable, they can appeal our decision by sending us an email at <a href="mailto:thesocialcomments@gmail.com">thesocialcomments@gmail.com</a> with their objections/explanations within seven (7) days of the content being taken down/removed from the Platform. We will look into these objections/explanations and restore the removed content/allow the taken down content to be re-uploaded if they are valid. </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default ContentReviewMechanism
