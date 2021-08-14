<<<<<<< HEAD
import React from 'react'
import { NavLink } from 'react-router-dom';
import SignUpHeader from './SignUpHeader';
import { Button } from '@material-ui/core';
import "./Homepage.css";
import homepage from "./images/homepage.png";
=======
import React from 'react';
import Landingpage from './Landingpage';
import Description from './Description';
import LegalTerms from './LegalTerms';


>>>>>>> 846c670 (my first commit 8/08/2021)

function Homepage() {
    return (
        <>
<<<<<<< HEAD
            <SignUpHeader />
            <main>
                <br />
                <br />
                <section id="homepage">
                    <div id="homepage_text">
                        <br />
                        <br />
                        <div id="heading">
                            <h1>Get industry ready candidates</h1>
                            <br />
                            <br />
                            <p>Create an account to sign up as a recruiter</p>
                        </div>
                        <br />
                        <br />
                        <div id="homepage_btns">
                            <NavLink exact to="/signup" style={{ textDecoration: "none" }} ><Button id="signup" style={{ textTransform: "none" }}>Register</Button></NavLink>
                        </div>
                        <br />
                        <br />
                    </div>
                    <div id="homepage_image">

                        <img src={homepage} alt=""></img>
                    </div>
                </section>
            </main>
=======
            <Landingpage />
            <Description />
            <LegalTerms />
>>>>>>> 846c670 (my first commit 8/08/2021)
        </>
    )
}

export default Homepage
