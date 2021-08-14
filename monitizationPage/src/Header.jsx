import { Button } from '@material-ui/core';
import React from 'react';
import "./Header.css";
import { NavLink } from 'react-router-dom';

function Header() {
    return (<>
        <header>
            <div>
                <h3 id="logo">thesocialcomment</h3>
            </div>
            <nav>
                <ul>
                    <li><NavLink style={{ textDecoration: "none", paddingBottom: "10px" }} activeClassName="active_link" exact to="/about"><Button><p>About</p></Button></NavLink></li>
                    <li><NavLink style={{ textDecoration: "none", paddingBottom: "10px" }} activeClassName="active_link" exact to="/recruiter"><Button><p>Recruiter</p></Button></NavLink></li>
                    <li><NavLink style={{ textDecoration: "none", paddingBottom: "10px" }} activeClassName="active_link" exact to="/student"><Button><p>Student</p></Button></NavLink></li>
                    <li><NavLink style={{ textDecoration: "none", paddingBottom: "10px" }} activeClassName="active_link" exact to="/portfolio"><Button><p>Virtual Portfolio</p></Button></NavLink></li>
                    <li><NavLink style={{ textDecoration: "none", paddingBottom: "10px" }} activeClassName="active_link" exact to="/login"><Button style={{ backgroundColor: "#000aff", color: "#ffffff" }}><h4>Log In</h4></Button></NavLink></li>
                </ul>
            </nav>
        </header>
    </>
    )
}

export default Header
