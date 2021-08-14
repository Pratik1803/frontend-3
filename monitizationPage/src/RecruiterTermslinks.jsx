import React from 'react';
import "./RecruiterTermsLinks.css";

function RecruiterTermslinks(props) {
    return (
        <div className="recruiter_terms_links">
            <img src={props.src} alt="" />
            <div className="recruiter_terms_links_text" >
                <p>{props.title}</p>
            </div>
        </div>
    )
}

export default RecruiterTermslinks
