import React from 'react';
import modifications from "../images/modifications.png";
import "./DescriptionLinks.css";

function Modifications() {
    return (
        <>
            <br />
            <section className="description_link_pages" >
                <div className="description_link_image">
                    <img src={modifications} alt="" />
                </div>
                <div className="description_link_text" >
                    <br />
                    <br />
                    <h1>Modifications<p>Clause 10</p></h1>
                    <br />
                    <br />
                    <p>We are constantly trying to improve our services, so this Policy may need to be changed along with Social Comment. We reserve the right to change, modify, add, or remove portions of this Policy at any time, but if we do, we will bring it to your attention by placing a notice on the website, by sending you an email, or by some other means. IF YOU DO NOT AGREE WITH THE NEW POLICY, YOUR ONLY RECOURSE IS TO REFRAIN FROM SHARING YOUR REFERRAL CODE/REFERRAL LINK. IF YOU SHARE YOUR REFERRAL CODE/REFERRAL LINK AFTER A CHANGE TO THIS POLICY IS EFFECTIVE AND NOTICE HAS BEEN PROVIDED, IT MEANS YOU AGREE TO ALL OF THE CHANGES AND THE SAME CONSTITUTES A BINDING CONTRACT BETWEEN YOU AND SOCIAL COMMENT. Except for changes by us as described here, no other amendment or modification of this policy will be effective unless in writing and signed by both of US.</p>
                </div>

            </section>
            <br />
        </>
    )
}

export default Modifications
