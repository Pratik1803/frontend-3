import React from 'react';
import procedureForReferees from "../images/procedureForReferees.png";
import "./DescriptionLinks.css";

function ProcedureForReferees() {
    return (
        <>
            <br />
            <section className="description_link_pages" >
                <div className="description_link_image">
                    <img src={procedureForReferees} alt="" />
                </div>
                <div className="description_link_text" >
                    <br />
                    <br />
                    <h1>Procedure For Referees<p>Clause 3</p></h1>
                    <br />
                    <br />
                    <ul><li><p>In case a Referee has an existing user’s referral code, they can enter the referral code in the text box marked as “REFERRAL” on the sign-up page. In case a Referee is using an existing user’s referral link, they will be directed to the sign-up page on clicking the link and they only need to fill up the fields on the sign-up page.</p></li></ul>
                    <br />
                    <ul><li><p>A Referee who pays the non-refundable fee shall be entitled to a discount of Indian National Rupees (INR) 500 on the non-refundable fee, or a cashback of INR 500, at the choice of Social Comment. In case Social Comment opts for a cashback, the cashback shall be reflected in the Referee’s Wallet on the Platform in accordance with clause 5 and any references to ‘you’ in clause 5 shall be construed as also including the Referee.</p></li></ul>
                    <br />
                    <ul><li><p>WE SHALL NOT BE RESPONSIBLE OR LIABLE, IN ANY WAY, FOR ANY ERRORS OR PROBLEMS FACED BY A REFEREE WHILE PAYING THE NON-REFUNDABLE FEE (INCLUDING, WITHOUT LIMITATION, WHERE MONEY HAS BEEN DEBITED FROM THE REFEREE’S BANK ACCOUNT/WALLET BUT HAS NOT BEEN CREDITED INTO OUR BANK ACCOUNT/WALLET). The payment of the non-refundable fee shall be considered to be complete only when we receive confirmation that the non-refundable fee has actually been credited into our bank account/wallet. If a Referee faces any issues while paying the non-refundable fee, they can drop us a mail at <a href="mailto:thesocialcomments@gmail.com.">thesocialcomments@gmail.com.</a></p></li></ul>
                </div>

            </section>
            <br />
        </>
    )
}

export default ProcedureForReferees
