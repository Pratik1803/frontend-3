import React from 'react';
import relationshipOfParties from "../images/relationshipOfParties.png";
import "./DescriptionLinks.css";

function RelationshipOfParties() {
    return (
        <>
            <br />
            <section className="description_link_pages" >
                <div className="description_link_image">
                    <img src={relationshipOfParties} alt="" />
                </div>
                <div className="description_link_text" >
                    <br />
                    <br />
                    <h1>Relationship Of Parties<p>Clause 14</p></h1>
                    <br />
                    <br />
                    <p>You and Social Comment are, and will at all times remain as, independent contractors, and nothing in this Policy shall create, or be construed to create, an employment, agency, fiduciary, representative, or other similar type of relationship between you and Social Comment. You further understand and agree that you do not have any authority to bind Social Comment in any manner or incur any liability on Social Comment’s behalf, and that you will not represent to any third parties that you are an agent, employee, or representative of Social Comment. You will also not be entitled to any to any benefits accorded to our employees or any other benefits generally accorded to employees including, without limitation, insurance, vacation, retirement benefits, and sick pay.  </p>
                </div>

            </section>
            <br />
        </>
    )
}

export default RelationshipOfParties
