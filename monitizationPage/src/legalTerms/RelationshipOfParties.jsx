import React from 'react';
import "./styling.css";
import relationshipOfParties from "../images/descriptionLinkImages/relationshipOfParties.jpg";

function RelationshipOfParties() {

    return (
        <section className="content_page" >
            <div className="content_page_wrapper" >
                <img className="content_page_image" src={relationshipOfParties} alt="" />
                <div className="content_page_text" >
                    <br />
                    <br />
                    <div class="textHead">
                        <h1>Relationship Of Parties</h1>
                        <h4>Clause 15</h4>
                    </div>
                    <br />
                    <br />
                    <ul>
                        <p >You and Social Comment are, and will at all times remain as, independent contractors, and nothing in this Policy shall create, or be construed to create, an employment, agency, fiduciary, representative, or other similar type of relationship between you and Social Comment. You further understand and agree that you do not have any authority to bind Social Comment in any manner or incur any liability on Social Comment’s behalf, and that you will not represent to any third parties that you are an agent, employee, or representative of Social Comment.</p>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default RelationshipOfParties
