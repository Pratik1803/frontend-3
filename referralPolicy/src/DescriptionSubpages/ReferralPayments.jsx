import React from 'react';
import referralForPayments from "../images/referralForPayments.png";
import "./DescriptionLinks.css";

function ReferralPayments() {
    return (
        <>
            <br />
            <section className="description_link_pages" >
                <div className="description_link_image">
                    <img src={referralForPayments} alt="" />
                </div>
                <div className="description_link_text" >
                    <br />
                    <br />
                    <h1>Referral Payments<p>Clause 4</p></h1>
                    <br />
                    <br />
                    <p>Under this Policy, you may be entitled to receive payments if a Referee uses your referral code/link. The amount of payment you receive will vary depending on whether you have paid the non-refundable fee, whether the Referee pays the non-refundable fee, and the type of account the Referee creates. The amount of money you can expect to receive for referrals in different scenarios are listed in the table below:</p>
                    <br />
                    <ul><li><p>In case Referee creates an Individual Account:</p></li></ul>
                    <br />
                    <table>
                        <tr>
                            <th>You</th>
                            <th>Referee</th>
                            <th>Payment</th>
                        </tr>
                        <tr>
                            <td>Have paid non-refundable fee</td>
                            <td>Pays non-refundable fee</td>
                            <td>INR ____ </td>
                        </tr>
                        <tr>
                            <td>Have paid non-refundable fee</td>
                            <td>Does not pay non-refundable fee</td>
                            <td>Nil</td>
                        </tr>
                        <tr>
                            <td>Have not paid non-refundable fee</td>
                            <td>Pays non-refundable fee</td>
                            <td>INR ___/-</td>
                        </tr>
                        <tr>
                            <td>Have not paid non-refundable fee</td>
                            <td>Does not pay non-refundable fee</td>
                            <td>Nil</td>
                        </tr>
                    </table>
                    <br />
                    <br />
                    <ul><li><p>In case Referee creates a Business (Recruiter) Account</p></li></ul>
                    <br />
                    <table>
                        <tr>
                            <th>You</th>
                            <th>Referee</th>
                            <th>Payment</th>
                        </tr>
                        <tr>
                            <td>Have paid non-refundable fee</td>
                            <td>Pays non-refundable fee</td>
                            <td> </td>
                        </tr>
                        <tr>
                            <td>Have paid non-refundable fee</td>
                            <td>Does not pay non-refundable fee</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Have not paid non-refundable fee</td>
                            <td>Pays non-refundable fee</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Have not paid non-refundable fee</td>
                            <td>Does not pay non-refundable fee</td>
                            <td></td>
                        </tr>
                    </table>
                </div>

            </section>
            <br />
        </>
    )
}

export default ReferralPayments
