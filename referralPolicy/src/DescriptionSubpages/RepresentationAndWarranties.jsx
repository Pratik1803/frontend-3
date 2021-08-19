import React from 'react';
import representationAndWarranties from "../images/representationAndWarranties.png";
import "./DescriptionLinks.css";

function RepresentationsAndWarranties() {
    return (
        <>
            <br />
            <section className="description_link_pages" >
                <div className="description_link_image">
                    <img src={representationAndWarranties} alt="" />
                </div>
                <div className="description_link_text" >
                    <br />
                    <br />
                    <h1>Represenations And Warranties<p>Clause 8</p></h1>
                    <br />
                    <br />
                    <h4>You represent, warrant, and covenant that: </h4>
                    <br />
                    <ul><li><p>In case you are an individual, you are above the age of legal majority in your country of residence;</p></li></ul>
                    <br />
                    <ul><li><p>Your nominee is above the age of legal majority in their country of residence;</p></li></ul>
                    <br />
                    <ul><li> <p>You will follow the terms and conditions of this Policy while you are bound by this Policy, and where applicable, after we have terminated this Policy;</p></li></ul>
                    <br />
                    <ul><li><p>Your acceptance of this Policy and your performance of your obligations under this Policy is not prohibited by, or is inconsistent with, any applicable laws, ordinances, rules, regulations, orders, judgements, or other requirements of any applicable governmental authority; </p></li></ul>
                    <br />
                    <ul><li><p>Your acceptance of this Policy and your performance of your obligations under this Policy does not, and will not, violate any other agreement to which you are a party or by which you are otherwise bound; and </p></li></ul>
                    <br />
                    <ul><li><p>All the information that you provide to us under this Policy (including, without limitation any information regarding GST registration) is accurate at all times. </p></li></ul>
                </div>

            </section>
            <br />
        </>
    )
}

export default RepresentationsAndWarranties
