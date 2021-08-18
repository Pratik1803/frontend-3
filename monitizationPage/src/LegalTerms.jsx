import React from 'react';
import './LegalTerms.css';
import LegalTermsCard from './LegalTermsCard';
import limitationOfLiability from "./images/icons/limitationOfLiabilities.png";
import relationshipOfParties from "./images/icons/relationshipOfParties.png";
import governingLaw from "./images/icons/governingLaw.png";
import disputeResolution from './images/icons/disputeResolution.png';
import { Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

function LegalTerms() {
    return (
        <section id="legalterms">
            <div id="legalterms_heading" >
                <h1>Our Legal Terms</h1>
            </div>
            <br />
            <br />
            <br />
            <div id="legalterms_links" >
                <NavLink exact to="/limitation-of-liability" style={{ textDecoration: "none" }}><Button><LegalTermsCard src={limitationOfLiability} title="Limitation Of Liability" /></Button></NavLink>
                <NavLink exact to="/relationship-of-parties" style={{ textDecoration: "none" }}><Button><LegalTermsCard src={relationshipOfParties} title="Relationship Of Parties" /></Button></NavLink>
                <NavLink exact to="/governing-law" style={{ textDecoration: "none" }}><Button><LegalTermsCard src={governingLaw} title="Governing Law" /></Button></NavLink>
                <NavLink exact to="/dispute-resolution" style={{ textDecoration: "none" }}><Button><LegalTermsCard src={disputeResolution} title="Dispute Resolution" /></Button></NavLink>
            </div>
            <NavLink exact to="/other-legal-terms" style={{ textDecoration: "none" }}><Button id="legalterms_btn" ><h3>Other Terms</h3></Button></NavLink>
            <br />
        </section>
    )
}

export default LegalTerms
