import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Footer.css";

function Footer() {
    return (
        <footer>
            <div id="footer_container">
                <div id="footer_first_column" >
                    <h2>thesocialcomment</h2>
                    <p>thesocialcomment is students network that focuses on project based learning.</p>
                    <p>© 2021 thesocialcomment. All rights reserved</p>
                </div>
                <div id="footer_second_column" >
                    <h2>Company</h2>
                    <NavLink exact to="/about" style={{ textDecoration: "none", textTransform: "none", color: "#fff" }}><p>About</p></NavLink>
                    <NavLink exact to="/privacy-policy" style={{ textDecoration: "none", textTransform: "none", color: "#fff" }}><p>Privacy Policy</p></NavLink>
                    <NavLink exact to="/community-guidelines" style={{ textDecoration: "none", textTransform: "none", color: "#fff" }}><p>Community Guidelines</p></NavLink>
                    <NavLink exact to="/faqs" style={{ textDecoration: "none", textTransform: "none", color: "#fff" }}><p>FAQ</p></NavLink>
                </div>
                <div id="footer_third_column" >
<<<<<<< HEAD
                    <NavLink exact to="/student-internship" style={{ textDecoration: "none", textTransform: "none", color: "#fff" }}><p>Student Internship</p></NavLink>
                    <NavLink exact to="/referral-policy" style={{ textDecoration: "none", textTransform: "none", color: "#fff" }}><p>Referral Policy</p></NavLink>
                    <NavLink exact to="/affiliates" style={{ textDecoration: "none", textTransform: "none", color: "#fff" }}><p>Affiliate</p></NavLink>
                    <NavLink exact to="/premium-membership" style={{ textDecoration: "none", textTransform: "none", color: "#fff" }}><p>Premium Membership</p></NavLink>
                    <NavLink exact to="/support" style={{ textDecoration: "none", textTransform: "none", color: "#fff" }}><p>Support</p></NavLink>
                    <NavLink exact to="/monitization-policy" style={{ textDecoration: "none", textTransform: "none", color: "#fff" }}><p>Monitization Policy</p></NavLink>
                    <NavLink exact to="/report-a-bug" style={{ textDecoration: "none", textTransform: "none", color: "#fff" }}><p>Report a Bug</p></NavLink>
                </div>
                <div id="footer_fourth_column" >
                    <ul>
                        <h2>Social Links</h2>
                        <li><svg className="footer_svgs" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" /></svg><a href="https://www.facebook.com/thesocialcomment/"><p>Facebook</p></a></li>
                        <li><svg className="footer_svgs" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg><a href="https://www.instagram.com/thesocialcomment/"><p>Instagram</p></a></li>
                        <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path
                                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg><a href="https://www.linkedin.com/company/thesocialcomment"><p>LinkedIn</p></a></li>
=======
                    <h2>Terms of Service</h2>
                    <NavLink exact to="/governing-law" style={{ textDecoration: "none", textTransform: "none", color: "#fff" }}><p>Governing Law</p></NavLink>
                    <NavLink exact to="/idemnity" style={{ textDecoration: "none", textTransform: "none", color: "#fff" }}><p>Idemnity</p></NavLink>
                    <NavLink exact to="/limitation-of-liability" style={{ textDecoration: "none", textTransform: "none", color: "#fff" }}><p>Limitation of Liability</p></NavLink>
                    <NavLink exact to="/program-fees" style={{ textDecoration: "none", textTransform: "none", color: "#fff" }}><p>Program Fees</p></NavLink>
                    <NavLink exact to="/payment-terms" style={{ textDecoration: "none", textTransform: "none", color: "#fff" }}><p>Payment Terms</p></NavLink>
                    <NavLink exact to="/relationship-of-parties" style={{ textDecoration: "none", textTransform: "none", color: "#fff" }}><p>Relationship Of Parties</p></NavLink>
                    <NavLink exact to="/term-and-termination" style={{ textDecoration: "none", textTransform: "none", color: "#fff" }}><p>Term & Termination</p></NavLink>
                </div>
                <div id="footer_fourth_column" >
                    <ul>
                        <li><h2>Social Links</h2></li>
                        <li><svg className="footer_svgs" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" /></svg><a href="https://www.facebook.com/thesocialcomment/"><p>Facebook</p></a></li>
                        <li><svg className="footer_svgs" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg><a href="https://www.instagram.com/thesocialcomment/"><p>Instagram</p></a></li>
                        <li><svg className="footer_svgs" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z" /></svg><a href="https://www.linkedin.com/company/thesocialcomment"><p>Linked In</p></a></li>
>>>>>>> 846c670 (my first commit 8/08/2021)
                        <li><svg className="footer_svgs" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg><a href="https://mobile.twitter.com/Social__Comment"><p>Twitter</p></a></li>
                        <li><svg className="footer_svgs" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg><a href="https://youtube.com/channel/UCvvzAW9OAAzSO1yWAXj8VkA"><p>YouTube</p></a></li>
                    </ul>
                </div>
            </div>
        </footer >
    )
}

export default Footer
