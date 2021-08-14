import React from 'react';
import "./Content.css";
import monitizableContent from "../images/descriptionLinkImages/monitization.jpg";

function MonitizableContent() {
    return (
        <section className="content_page" >
            <div className="content_page_wrapper" >
                <h1 className="watermark" > Clause 8 </h1>
                <img className="content_page_image" src={monitizableContent} alt="" />
                <div className="content_page_text" >
                    <h1>Monitizable and Non-Monitizable Content.</h1>
                    <ul><label><strong>The following types of content are not monetizable on the Platform;</strong></label><br />
                        <li>Content that violates our Terms of Service;</li>
                        <li>Content that violates our Community Guidelines;</li>
                        <li>Content that is not unique, is highly plagiarized, or is not adequately cited;</li>
                        <li>Content which does not have any educational value (Note: Examples include mere reproduction of facts without any analysis, drawings or pictures without any analysis or criticism, verbatim news reports or news reports with personal comments etc.);</li>
                        <li>Content which promotes harmful and/or illegal activities;</li>
                        <li>Content that is sexually explicit in nature (Note: We allow artistic expressions of nudity and/or erotica on the Platform which is educational in nature) or;</li>
                        <li>Content which contains the private information of other people (like phone numbers or addresses), unless you have express permission in writing from them to post such information.</li>
                    </ul>
                    <br />
                    <strong><p>If we receive information that any of your content is non-monetizable, we shall deal with it in accordance with our Content Review Mechanism as outlined in clause 8.</p></strong>
                    <br />
                    <strong><p> All the content that you post on the Platform, other than the types of content mentioned above, shall be monetizable.</p> </strong>

                </div>
            </div>
        </section>
    )
}

export default MonitizableContent
