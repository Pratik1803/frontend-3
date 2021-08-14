import React from 'react';
import "./StudentInternship.css";
import SignUpHeader from './SignUpHeader';
import { NavLink } from 'react-router-dom';
import disclaimer from "./StudentIntern/disclaimer.png";
import safety from "./StudentIntern/safety.png";
import terms from "./StudentIntern/terms.png";

function StudentInternship() {
    return (
        <>
            <SignUpHeader />
            <section className="student_internship_page" >
                <div className="student_internship_page_wrapper" >
                    {/* <h1 className="watermark" > Clause 8 </h1> */}

                    <br />
                    <br />
                    <div className="studenttextHead">
                        <h1>Student Internship/ Job/ Application Policy</h1>
                        <br />
                        <p>This Social Comment Student internship/Job/internship application Policy (“Policy”) contains the terms and conditions which govern the Social Comment (“Portal”), which is operated by Social Comment Private Ltd. (“we”, “us”, “our”, thesocialcomment.com, thesocialcomment, SOCO or “Social Comment”).</p>
                    </div>
                    <br />
                    <br />
                    <br />
                    <div id="student_intern_links">
                        <NavLink style={{ textDecoration: "none" }} exact to="/disclaimer">
                            <div className="student_intern_card">
                                <img src={disclaimer} alt="" ></img>
                                <p>Disclaimer</p>
                            </div>
                        </NavLink>
                        <br />
                        <br />
                        <NavLink style={{ textDecoration: "none" }} exact to="safety-tips">
                            <div className="student_intern_card">
                                <img src={safety} alt="" ></img>
                                <p>Safety Tips</p>
                            </div>
                        </NavLink>
                        <br />
                        <br />
                        <NavLink style={{ textDecoration: "none" }} exact to="student-terms">
                            <div className="student_intern_card">
                                <img src={terms} alt="" ></img>
                                <p>Student terms</p>
                            </div>
                        </NavLink>
                    </div>
                    <br />
                    <br />
                    <br />
                </div>
            </section >
        </>
    )
}

export default StudentInternship
