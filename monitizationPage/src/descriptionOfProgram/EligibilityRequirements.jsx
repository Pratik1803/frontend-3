import React from 'react';
import "./Content.css";
import eligibilityRequirements from "../images/descriptionLinkImages/eligibility.jpg";

function EligibilityRequirements() {

    return (
        <section className="content_page" >
            <div className="content_page_wrapper" >
                {/* <h1 className="watermark" > Clause 8 </h1> */}
                <img className="content_page_image" src={eligibilityRequirements} alt="" />
                <div className="content_page_text" >
                    <br />
                    <br />
                    <div class="textHead">
                        <h1>Eligibility Requirements</h1>
                        <h4>Clause 3</h4>
                    </div>
                    <br />
                    <br />
                    <ul>
                        <li>You need to be at least 18 years of age (or the age of legal majority in your country of residence) to register for the Program. Please note that if you reside in India and a guardian has been appointed for your person or property, your age of legal majority will be determined by the provisions of the Indian Majority Act, 1875 and the Guardian and Wards Act, 1890.</li>
                        <li>You should have more than _____ followers, _____ views and _____ shares of your monetizable content, and the plagiarism percentage of your monetizable content should not exceed _____. Please note that you are not allowed to use any means (such as bots) to artificially increase your views, shares, or followers on the Platform.</li>
                        <li>You should not have been previously removed from the Program more than once, whether while using your current account or while using another account.</li>
                        <li>You should not have posted any violent, profane, sexually explicit, or derogatory comments on other users’ content.</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default EligibilityRequirements