import React from 'react';
import validity from "../images/validity.png";
import "./DescriptionLinks.css";

function Validity() {
    return (
        <>
            <br />
            <section className="description_link_pages" >
                <div className="description_link_image">
                    <img src={validity} alt="" />
                </div>
                <div className="description_link_text" >
                    <br />
                    <br />
                    <h1>Validity<p>Clause 11</p></h1>
                    <br />
                    <br />
                    <p>This Policy only applies to the web version/web-app of the Platform. In case we create a different version(s) of the Platform (including, without limitation, a mobile version of the Platform), this Policy will not automatically apply to such version(s) unless it is expressly made applicable by us.  </p>

                </div>

            </section>
            <br />
        </>
    )
}

export default Validity
