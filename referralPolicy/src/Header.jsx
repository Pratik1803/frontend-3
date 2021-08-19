import { Button } from '@material-ui/core';
import React from 'react';
import "./Header.css";
import { NavLink } from 'react-router-dom';

function Header() {
    return (<>
        <header>
            <div id="logo">
                <NavLink exact to="/" style={{ textDecoration: "none" }}><h3>thesocialcomment</h3></NavLink>
            </div>
            <div id="nav_bar_links">
                <NavLink exact to="/about" style={{ textDecoration: "none" }}><Button style={{ textTransform: "none" }}><p>About</p></Button></NavLink>
                <NavLink exact to="/recruiter" style={{ textDecoration: "none" }}><Button style={{ textTransform: "none" }}><p>Recruiter</p></Button></NavLink>
                <NavLink exact to="/student" style={{ textDecoration: "none" }}><Button style={{ textTransform: "none" }}><p>Student</p></Button></NavLink>
                <NavLink exact to="/virtual-portfolio" style={{ textDecoration: "none" }}><Button style={{ textTransform: "none" }}><p>Virtual Portfolio</p></Button></NavLink>
                <NavLink exact to="/login" style={{ textDecoration: "none" }}><Button id="login" style={{ textTransform: "none" }}><p style={{ color: "#fff" }}>Login</p></Button></NavLink>
            </div>
        </header>
    </>
    )
}

export default Header
