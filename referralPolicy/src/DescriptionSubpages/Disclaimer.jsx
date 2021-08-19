import React from 'react';
import disclaimer from "../images/disclaimer.png";
import "./DescriptionLinks.css";

function Disclaimer() {
    return (
        <>
            <br />
            <section className="description_link_pages" >
                <div className="description_link_image">
                    <img src={disclaimer} alt="" />
                </div>
                <div className="description_link_text" >
                    <br />
                    <br />
                    <h1>Disclaimer</h1>
                    <br />
                    <br />
                    <p>The User Acknowledges The Following:</p>
                    <br />
                    <ul>
                        <li><p>That They Are Above The Age Of Legal Majority In Their Country Of Residence;</p></li>
                        <br />
                        <li><p>That They Shall Read And Understand The Nature And Scope Of The Referral Policy;</p></li>
                        <br />
                        <li><p>That Any Grievances Relating To The Subject Matter Of The Referral Policy Shall Be Governed By The Referral Policy, And In Case Of Any Conflict Between The Terms Of Service, Privacy Policy, Or Community Guidelines, This Policy Will Prevail With Respect To Its Subject Matter; And</p></li>
                        <br />
                        <li><p>If They Are A Member Of The Affiliate Program, The Provisions Of The Referral Policy Shall Prevail In The Event Of Any Conflict Between The Affiliate Agreement/Business Partner Agreement And The Referral Policy.</p></li>
                        <br />
                    </ul>
                    <br />
                    <p></p>
                </div>

            </section>
            <br />
        </>
    )
}

export default Disclaimer
