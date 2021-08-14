import React from 'react';
import "./Content.css";
import modifications from "../images/descriptionLinkImages/modifications.jpg";

function Modifications() {
    return (
        <section className="content_page" >
            <div className="content_page_wrapper" >
                {/* <h1 className="watermark" > Clause 8 </h1> */}
                <img className="content_page_image" src={modifications} alt="" />
                <div className="content_page_text" >
                    <h1>Modifications</h1>
                    <ul>
                        <li>We are constantly trying to improve our services, so this Policy may need to be changed along with Social Comment. We reserve the right to change, modify, add, or remove portions of this Policy at any time, but if we do, we will bring it to your attention by placing a notice on the website, by sending you an email, or by some other means. </li>
                        <p><strong>IF YOU DO NOT AGREE WITH THE NEW POLICY, YOUR ONLY RECOURSE IS TO TERMINATE THIS POLICY BY LEAVING THE PROGRAM.IF YOU REMAIN REGISTERED WITH THE PROGRAM AFTER A CHANGE TO THIS POLICY IS EFFECTIVE AND NOTICE HAS BEEN PROVIDED, IT MEANS YOU AGREE TO ALL OF THE CHANGES AND THE SAME CONSTITUTES A BINDING CONTRACT BETWEEN YOU AND US</strong></p>
                        <li>Except for changes by us as described here, no other amendment or modification of this policy will be effective unless in writing and signed by both you and us.</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Modifications
