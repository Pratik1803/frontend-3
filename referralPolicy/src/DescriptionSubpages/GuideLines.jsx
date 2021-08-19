import React from 'react';
import guidelines from "../images/guidelines.png";
import "./DescriptionLinks.css";

function GuideLines() {
    return (
        <>
            <br />
            <section className="description_link_pages" >
                <div className="description_link_image">
                    <img src={guidelines} alt="" />
                </div>
                <div className="description_link_text" >
                    <br />
                    <br />
                    <h1>Guidelines<p>Clause 7</p></h1>
                    <br />
                    <br />
                    <h4>You must abide by the following guidelines while sharing your referral code/link with others or while using an existing user’s referral code/ link while creating your account:</h4>
                    <br />
                    <ul><li><p>You must not make any suggestions or promises that joining the Platform guarantees a job or amounts to a job offer.</p></li></ul>
                    <br />
                    <ul><li><p>You must not misrepresent the purpose of the Platform.</p></li></ul>
                    <br />
                    <ul><li><p>You must not share your referral code/referral link with any underage children or employ or use their services to increase the accessibility of your referral code/link.</p></li></ul>
                    <br />
                    <ul><li><p>You must not employ the aid of bots or create fake accounts using your own referral code/referral link.</p></li></ul>
                    <br />
                    <ul><li><p>You must not coerce, threaten, or use any illegal means to force others to join the Platform using your referral code/referral link.</p></li></ul>
                    <br />
                    <ul><li><p>You must not enter into any sort of financial arrangement (whether written or oral) with others as consideration for them joining the Platform.</p></li></ul>
                    <br />
                    <ul><li><p>You must not lie or provide any false information to others to induce them to join the Platform.</p></li></ul>
                    <br />
                    <ul><li><p>You must not exchange your referral code/link for cash or cash equivalents.</p></li></ul>
                </div>

            </section>
            <br />
        </>
    )
}

export default GuideLines
