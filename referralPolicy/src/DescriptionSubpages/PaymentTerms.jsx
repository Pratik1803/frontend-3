import React from 'react';
import paymentTerms from "../images/paymentTerms.png";
import "./DescriptionLinks.css";

function PaymentTerms() {
    return (
        <>
            <br />
            <section className="description_link_pages" >
                <div className="description_link_image">
                    <img src={paymentTerms} alt="" />
                </div>
                <div className="description_link_text" >
                    <br />
                    <br />
                    <h1>Payment Terms <p>Clause 5</p></h1>
                    <br />
                    <br />
                    <ul><li><p>Any payments and/or cashbacks due to you under this Policy shall be reflected in your Wallet on the Platform within one (1) to ten (10) days of the occurrence of the event/transaction giving rise to such payments/cashbacks. You can access your Wallet by clicking on your profile picture on the top right corner of the Platform, clicking on ‘Settings”, and then clicking on the ‘Wallet’ tab. Please keep in mind that the balance in your Wallet on the Platform is only a representation of the money due to you from us under this Policy and we retain the right to forfeit the balance in your Wallet at any time in accordance with the provisions of this Policy (including, without limitation, under clauses 6 and 9 of this Policy). </p></li></ul>
                    <br />
                    <ul><li><p>You must link your bank account/UPI ID with your Wallet in order to transfer money from your Wallet to your bank account. You can link your bank account/UPI ID with your wallet by filling in your bank account/UPI ID details in the fields under ‘Add Account’ on the ‘Wallet’ tab. Once you have linked your bank account/UPI ID with your Wallet, you can initiate a transfer of money from your Wallet to your linked bank account/UPI ID by typing in the amount of money you wish to transfer in the “Amount’ field under the ‘Withdraw’ heading and then clicking on the green ‘Withdraw’ button. Please note that you must have a minimum balance of INR 1000 (One Thousand) in your Wallet in order to initiate a transfer of money from your wallet to your linked bank account/UPI ID. We also retain the right to temporarily suspend your power to initiate transfers of money from your Wallet to your linked bank account/UPI ID in accordance with the provisions of this Policy (including, without limitation, under clauses 9.4 and 5.3). If you have any problems or issues while transferring or initiating transfers from your Wallet, please contact us by clicking the Contact Us button next to your Wallet.</p></li></ul>
                    <br />
                    <ul><li><p>If the amount of money you wish to transfer is less than INR 10,000, (Ten Thousand) it will take us between 24 hours to seven (7) days to process the transfer. However, if the amount you wish to transfer is more than INR 10,000, (Ten Thousand) it will take us a minimum of seven (7) days to process the transfer. Please note that you cannot transfer more than a total of INR 5 lakh (5,00,0000/-) in a financial year unless you register yourself under GST and obtain a GSTIN number. We shall inform you if and when you transfer a total of INR 4 lakhs (4,00,000/-) in a financial year and also when you transfer a total of INR 5 lakhs (5,00,000/-) in a financial year. If you register yourself under GST, please send us a copy of your GST valid Registration Certificate at <a href="mailto:thesocialcomments@gmail.com">thesocialcomments@gmail.com</a>. In case you renew your GST registration at any time, please send us a valid proof of your renewal at the email-id mentioned above. </p></li></ul>
                    <br />
                    <ul><li><p>You hereby agree and acknowledge that you will be solely responsible for paying all applicable taxes, cess, liabilities or charges payable to the Government or any other authority or body (including, without limitation income tax and GST) on any amount you transfer from your Wallet to your linked bank account/UPI ID. You further agree and acknowledge that under no circumstances (including, without limitation, where you only pay a part of the applicable tax) shall Social Comment be liable to pay any tax on your behalf with respect to any amount (or part thereof) that you transfer from the Wallet to your linked bank account/UPI ID.</p></li></ul>
                </div>

            </section>
            <br />
        </>
    )
}

export default PaymentTerms
