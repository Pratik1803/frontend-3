import { Button } from '@material-ui/core';
import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Giveaway.css";
import giveaway from "./images/giveaway.jpg";
import SignUpHeader from './SignUpHeader';

function Giveaway() {
    return (
        <>
            <SignUpHeader />
            <br />
            <br />
            <section id="giveaway_page" >
                <div id="giveaway_image" >
                    <img src={giveaway} alt=""></img>
                </div>
                <div id="giveaway_text" >
                    <br />
                    <br />
                    <h1>Get more than 500+ legal agreements/ policies template for free.</h1>
                    <br />
                    <p>Drafted according to your requirements.</p>
                    <h4 style={{ display: "flex" }}><h4 style={{ textDecoration: "line-through" }}>Rs. 5,999/-</h4> <h4 style={{ color: "green", marginLeft: "20px" }}>FREE</h4></h4>
                    <br />
                    <NavLink exact to="/signup" style={{ textDecoration: "none" }}><Button>Sign Up</Button></NavLink>
                    <br />
                </div>
            </section>
            <br />
            <br />
        </>
    )
}

export default Giveaway
