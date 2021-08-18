import React from 'react';
import "./Description.css";
import DESCRIPTION_LINK_CARD from './Description_link_card';
import monitizableContent from "./images/icons/monetizing.png";
import eligibilityRequirements from "./images/icons/eligibilityRequirements.png";
import idemnity from "./images/icons/idemnity.png";
import applicationProcedure from "./images/icons/applicationProcedure.png";
import intellectualPropertyAndProtection from "./images/icons/intellectualPropertyAndProtection.png";
import contentReviewMechanism from "./images/icons/contentReviewMechanism.png";
import advertisements from "./images/icons/advertisements.png";
import termAndTermination from "./images/icons/termAndTermination.png";
import representationAndWarranties from "./images/icons/representationAndWarranties.png";
import programFees from "./images/icons/programFees.png";
import modifications from "./images/icons/modification.png";
import paymentTerms from "./images/icons/paymentTerms.png"
import { NavLink } from 'react-router-dom';

function Description() {

    return (
        <section id="description" >
            <div id="description_container">
                <div id="description_program_top">
                    <br />
                    <br />
                    <h1>Description of Program</h1>
                    <br />
                    <br />
                    <p>The Program allows you to monetize the content you post on the Platform. Please note that you are not allowed to monetize your content on the Platform in any manner without being registered with the Program. This Program shall be available to both types of content creators: those who pay the non-refundable fee of Rs 5000 and those who do not pay such fee. You will be entitled to a share in the ad revenue we generate from your content on the platform. The percentage of revenue so shared shall vary depending on the type of content creator you are.</p>
                </div>
                <br />
                <br />
                <div id="description_program_links">
                    <NavLink exact to="/monitizable-content" style={{ textDecoration: "none", color: "#0063ff" }} ><DESCRIPTION_LINK_CARD title="Monitizable Content" src={monitizableContent} /></NavLink>
                    <NavLink exact to="/idemnity" style={{ textDecoration: "none", color: "#0063ff" }} ><DESCRIPTION_LINK_CARD title="Idemnity" src={idemnity} /></NavLink>
                    <NavLink exact to="/eligibility-requirements" style={{ textDecoration: "none", color: "#0063ff" }} ><DESCRIPTION_LINK_CARD title="Eligibility Requirements" src={eligibilityRequirements} /></NavLink>
                    <NavLink exact to="/application-procedure" style={{ textDecoration: "none", color: "#0063ff" }} ><DESCRIPTION_LINK_CARD title="Application Procedure" src={applicationProcedure} /></NavLink >
                    <NavLink exact to="/intellectual-property-and-protection" style={{ textDecoration: "none", color: "#0063ff" }}><DESCRIPTION_LINK_CARD title="Intellectual Property And Protection" src={intellectualPropertyAndProtection} /></NavLink >
                    <NavLink exact to="/content-review-mechanism" style={{ textDecoration: "none", color: "#0063ff" }}><DESCRIPTION_LINK_CARD title="Content Review Mechanism" src={contentReviewMechanism} /></NavLink >
                    <NavLink exact to="/advertisements" style={{ textDecoration: "none", color: "#0063ff" }}><DESCRIPTION_LINK_CARD title="Advertisements" src={advertisements} /></NavLink >
                    <NavLink exact to="/term-and-termination" style={{ textDecoration: "none", color: "#0063ff" }}><DESCRIPTION_LINK_CARD title="Term and Termination" src={termAndTermination} /></NavLink >
                    <NavLink exact to="/representation-and-warranties" style={{ textDecoration: "none", color: "#0063ff" }}><DESCRIPTION_LINK_CARD title="Representation and Warranties" src={representationAndWarranties} /></NavLink >
                    <NavLink exact to="/program-fees" style={{ textDecoration: "none", color: "#0063ff" }}><DESCRIPTION_LINK_CARD title="Program Fees" src={programFees} /></NavLink >
                    <NavLink exact to="/modifications" style={{ textDecoration: "none", color: "#0063ff" }}><DESCRIPTION_LINK_CARD title="Modifications" src={modifications} /></NavLink >
                    <NavLink exact to="/payment-terms" style={{ textDecoration: "none", color: "#0063ff" }}><DESCRIPTION_LINK_CARD title="Payment Terms" src={paymentTerms} /></NavLink >
                </div >
            </div >
        </section >
    )
}

export default Description
