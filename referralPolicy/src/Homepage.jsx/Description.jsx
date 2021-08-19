import React from 'react';
import "./Description.css";
import { NavLink } from 'react-router-dom'
import DescriptionCard from './DescriptionCard';
import mannerOfReferral from "../images/icons/mannerOfReferral.png";
import procedureForReferees from "../images/icons/procedureForReferees.png";
import consumerProtection from "../images/icons/consumerProtection.png";
import disclaimer from "../images/icons/disclaimer.png";
import disputeResolution from "../images/icons/disputeResolution.png";
import governingLaw from "../images/icons/governingLaw.png";
import guidelines from "../images/icons/guidelines.png";
import idemnity from "../images/icons/idemnity.png";
import limitationOfLaibility from "../images/icons/limitationOfLaibility.png";
import modification from "../images/icons/modification.png";
import nomination from "../images/icons/nomination.png";
import referralPayments from "../images/icons/referralPayments.png";
import relationshipOfParties from "../images/icons/relationshipOfParties.png";
import represenationAndWarranties from "../images/icons/represenationAndWarranties.png";
import termination from "../images/icons/termination.png";
import validity from "../images/icons/validity.png";
import paymentTerms from "../images/icons/paymentTerms.png";
import otherTerms from "../images/icons/otherTerms.png";


function Description() {
    return (
        <>
            <br />
            <section id="description" >
                <br />
                <br />
                <div id="description_wrapper">
                    <div id="description_text">
                        <h2>Description</h2>
                        <br />
                        <br />
                        <p>This Policy enables you to make money if new users join the Platform using your referral code/referral link and pay the non-refundable fee. This Policy only governs the money you make when others use your referral code/ link while creating their account on the Platform. The monetization of the content you post on the Platform is governed separately by our Content Monetization Policy (CMP). We also have a separate Affiliate Program which you can join if you wish to focus primarily on referring new users to the Platform.</p>
                        <br />
                        <br />
                    </div>
                    <div id="description_links">
                        <NavLink exact to="disclaimer" style={{ textDecoration: "none", width: "fit-content" }}><DescriptionCard title="Disclaimer" src={disclaimer} /></NavLink>
                        <NavLink exact to="manner-of-referral" style={{ textDecoration: "none", width: "fit-content" }}><DescriptionCard title="Manner Of Referral" src={mannerOfReferral} /></NavLink>
                        <NavLink exact to="procedure-for-referees" style={{ textDecoration: "none", width: "fit-content" }}><DescriptionCard title="Procedure For Referees" src={procedureForReferees} /></NavLink>
                        <NavLink exact to="referral-payments" style={{ textDecoration: "none", width: "fit-content" }}><DescriptionCard title="Referral Payments" src={referralPayments} /></NavLink>
                        <NavLink exact to="payment-terms" style={{ textDecoration: "none", width: "fit-content" }}><DescriptionCard title="Payment Terms" src={paymentTerms} /></NavLink>
                        <NavLink exact to="nomination" style={{ textDecoration: "none", width: "fit-content" }}><DescriptionCard title="Nomination" src={nomination} /></NavLink>
                        <NavLink exact to="guidelines" style={{ textDecoration: "none", width: "fit-content" }}><DescriptionCard title="Guidelines" src={guidelines} /></NavLink>
                        <NavLink exact to="termination" style={{ textDecoration: "none", width: "fit-content" }}><DescriptionCard title="Termination" src={termination} /></NavLink>
                        <NavLink exact to="representations-and-warranties" style={{ textDecoration: "none", width: "fit-content" }}><DescriptionCard title="Represenatations And Warranties" src={represenationAndWarranties} /></NavLink>
                        <NavLink exact to="modification" style={{ textDecoration: "none", width: "fit-content" }}><DescriptionCard title="Manner Of Referral" src={modification} /></NavLink>
                        <NavLink exact to="consumer-protection" style={{ textDecoration: "none", width: "fit-content" }}><DescriptionCard title="Consumer Protection" src={consumerProtection} /></NavLink>
                        <NavLink exact to="idemnity" style={{ textDecoration: "none", width: "fit-content" }}><DescriptionCard title="Idemnity" src={idemnity} /></NavLink>
                        <NavLink exact to="limitation-of-liability" style={{ textDecoration: "none", width: "fit-content" }}><DescriptionCard title="Limitation Of Liability" src={limitationOfLaibility} /></NavLink>
                        <NavLink exact to="governing-law" style={{ textDecoration: "none", width: "fit-content" }}><DescriptionCard title="Governing Law" src={governingLaw} /></NavLink>
                        <NavLink exact to="relationship-of-parties" style={{ textDecoration: "none", width: "fit-content" }}><DescriptionCard title="Relationship Of Parties" src={relationshipOfParties} /></NavLink>
                        <NavLink exact to="dispute-resolution" style={{ textDecoration: "none", width: "fit-content" }}><DescriptionCard title="Dispute Resolution" src={disputeResolution} /></NavLink>
                        <NavLink exact to="validity" style={{ textDecoration: "none", width: "fit-content" }}><DescriptionCard title="Validity" src={validity} /></NavLink>
                        <NavLink exact to="other-terms" style={{ textDecoration: "none", width: "fit-content" }}><DescriptionCard title="Other Terms" src={otherTerms} /></NavLink>
                    </div>
                </div>
                <br />
                <br />
            </section>
        </>
    )
}

export default Description
