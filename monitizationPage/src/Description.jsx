import React from 'react';
import "./Description.css";
import DESCRIPTION_LINK_CARD from './Description_link_card';
import monitizableContent from "./images/descriptionLinkImages/monitization.jpg";
import eligibilityRequirements from "./images/descriptionLinkImages/eligibility.jpg";
import idemnity from "./images/descriptionLinkImages/idemnity.jpg";
import applicationProcedure from "./images/descriptionLinkImages/applicationProcedure.jpg";
import intellectualPropertyAndProtection from "./images/descriptionLinkImages/intellectualPropertyAndProtection.jpg";
import contentReviewMechanism from "./images/descriptionLinkImages/contentReviewMechanism.jpg";
import advertisements from "./images/descriptionLinkImages/advertisements.jpg";
import termAndTermination from "./images/descriptionLinkImages/termAndTermination.jpg";
import representationAndWarranties from "./images/descriptionLinkImages/representationAndWarranties.jpg";
import programFees from "./images/descriptionLinkImages/programFees.jpg";
import modifications from "./images/descriptionLinkImages/modifications.jpg";
import paymentTerms from "./images/descriptionLinkImages/paymentTerms.jpg"
import { Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

function Description() {
    return (
        <section id="description" >
            <div id="description_container">
                <div id="description_program_top">
                    <h1>Description of Program</h1>
                    <p>The Program allows you to monetize the content you post on the Platform. Please note that you are not allowed to monetize your content on the Platform in any manner without being registered with the Program. This Program shall be available to both types of content creators: those who pay the non-refundable fee of Rs 5000 and those who do not pay such fee. You will be entitled to a share in the ad revenue we generate from your content on the platform. The percentage of revenue so shared shall vary depending on the type of content creator you are.</p>
                </div>
                <div id="description_program_links">
                    <NavLink exact to="/monitizable-content" style={{ textDecoration: "none" }} ><Button><DESCRIPTION_LINK_CARD title="Monitizable Content" src={monitizableContent} /></Button></NavLink>
                    <NavLink exact to="/eligibility-requirements" style={{ textDecoration: "none" }} ><Button><DESCRIPTION_LINK_CARD title="Eligibility Requirements" src={eligibilityRequirements} /></Button></NavLink>
                    <NavLink exact to="/idemnity" style={{ textDecoration: "none" }} ><Button><DESCRIPTION_LINK_CARD title="Idemnity" src={idemnity} /></Button></NavLink>
                    <NavLink exact to="/application-procedure" style={{ textDecoration: "none" }} ><Button><DESCRIPTION_LINK_CARD title="Application Procedure" src={applicationProcedure} /></Button></NavLink>
                    <NavLink exact to="/intellectual-property-and-protection" style={{ textDecoration: "none" }}><Button><DESCRIPTION_LINK_CARD title="Intellectual Property And Protection" src={intellectualPropertyAndProtection} /></Button></NavLink>
                    <NavLink exact to="/content-review-mechanism" style={{ textDecoration: "none" }}><Button><DESCRIPTION_LINK_CARD title="Content Review Mechanism" src={contentReviewMechanism} /></Button></NavLink>
                    <NavLink exact to="/advertisements" style={{ textDecoration: "none" }}><Button><DESCRIPTION_LINK_CARD title="Advertisements" src={advertisements} /></Button></NavLink>
                    <NavLink exact to="/term-and-termination" style={{ textDecoration: "none" }}><Button><DESCRIPTION_LINK_CARD title="Term and Termination" src={termAndTermination} /></Button></NavLink>
                    <NavLink exact to="/representation-and-warranties" style={{ textDecoration: "none" }}><Button><DESCRIPTION_LINK_CARD title="Representation and Warranties" src={representationAndWarranties} /></Button></NavLink>
                    <NavLink exact to="/program-fees" style={{ textDecoration: "none" }}><Button><DESCRIPTION_LINK_CARD title="Program Fees" src={programFees} /></Button></NavLink>
                    <NavLink exact to="/modifications" style={{ textDecoration: "none" }}><Button><DESCRIPTION_LINK_CARD title="Modifications" src={modifications} /></Button></NavLink>
                    <NavLink exact to="/payment-terms" style={{ textDecoration: "none" }}><Button><DESCRIPTION_LINK_CARD title="Payment Terms" src={paymentTerms} /></Button></NavLink>
                </div>
            </div>
        </section>
    )
}

export default Description
