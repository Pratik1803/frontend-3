import React from 'react';
import "./Description_link_card.css";

function DESCRIPTION_LINK_CARD(props) {
    return (
        <div className="description_link_card">
            <img src={props.src} alt="" className="description_link_image" />
            <div className="description_card_text" >
                <h4 style={{ color: "#000AFF" }} >{props.title}</h4>
            </div>
        </div>
    )
}

export default DESCRIPTION_LINK_CARD
