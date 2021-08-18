import React from 'react';
import "./Content.css";
import advertisements from "../images/descriptionLinkImages/advertisements.png";

function Advertisements() {

    return (
        <section className="content_page" >
            <div className="content_page_wrapper" >
                {/* <h1 className="watermark" > Clause 8 </h1> */}
                <img className="content_page_image" src={advertisements} alt="" />
                <div className="content_page_text" >
                    <br />
                    <br />
                    <div class="textHead">
                        <h1>Advertisements</h1>
                        <h4>Clause 5</h4>
                    </div>
                    <br />
                    <br />
                    <ul>
                        <li>We shall have the sole and exclusive power to determine the type, content, and placement of ads in and around your content on the Platform. We reserve the right to place ads in or around your content even if you are not registered with the Program.</li>
                        <h3>Demonitization</h3>
                        <li>You may choose to demonetize some (or all) of your content on the Platform. If you demonetize any of your content on the Platform, we shall not place any ads in or around such content and you shall not receive any ad revenue from such content. Please note however that if you demonetize any of your content, you will require our approval in order to subsequently remonetize it and it shall be entirely at our discretion whether to grant you such approval or not. </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Advertisements
