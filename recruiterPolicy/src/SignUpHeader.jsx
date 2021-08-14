import { Button } from '@material-ui/core';
import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Header.css";

function SignUpHeader() {
    return (
        <header>
            <div id="header_container">
                <div id="logo">
                    <NavLink exact to="/" style={{ textDecoration: "none" }}><h3>thesocialcomment</h3></NavLink>
                </div>
                <div id="header_navlinks">
                    <NavLink exact to="/recruiter-guidelines" style={{ textDecoration: "none" }}><p>Recruiter Guidelines</p></NavLink>
                    <NavLink exact to="/student-internship-policy" style={{ textDecoration: "none" }}><p>Student Internship</p></NavLink>
                    <NavLink exact to="/terms-for-recruiters" style={{ textDecoration: "none" }}><p>Terms for Recruiters</p></NavLink>
                    <NavLink exact to="/giveaways" style={{ textDecoration: "none" }}><p>Giveaways</p></NavLink>
                </div>
                <div id="header_btn" >
                    <NavLink exact to="/login" style={{ textDecoration: "none" }}><Button>Login</Button></NavLink>
                </div>
            </div >
        </header >
    )
}

export default SignUpHeader
