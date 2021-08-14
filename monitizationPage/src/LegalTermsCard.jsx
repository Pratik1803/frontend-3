import React from 'react';
import "./LegalTermsCard.css";

function LegalTermsCard(props) {
    return (
        <div className="legal_term_card">
            <div className="legal_terms_card_image">
                <img src={props.src} alt="" className="legal_terms_card_img" />
            </div>
            <div className="legal_terms_card_text">
                <h3>{props.title}</h3>
            </div>
        </div>
    )
}

export default LegalTermsCard
