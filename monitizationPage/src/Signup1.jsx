import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import "./Signup1.css";
import SignUpHeader from './SignUpHeader';
import Signup from "./images/signup.png";
import { NavLink, Redirect } from 'react-router-dom';




function Signup1() {
    const history = useHistory();
    let [nameOfTheCompany, setNameOfTheCompany] = useState("");
    let [representative, setRepresentative] = useState("");
    let [email, setEmail] = useState("");

    function companynameChange(e) {
        setNameOfTheCompany(e.target.value);
    }
    function emailChange(e) {
        setEmail(e.target.value);
    }
    function representativeChange(e) {
        setRepresentative(e.target.value);
    }

    function submit() {
        let emailFlag = false;
        let emailLetters = email.split("");
        emailLetters.map((ele) => {
            if (ele === "@") {
                emailFlag = !emailFlag;
            };
        })
        let date = document.querySelector("#date");
        let nameCompanyError = document.querySelector(".nameCompanyError");
        let representativeNameError = document.querySelector(".representativeNameError");
        let emailError = document.querySelector(".emailError");

        if (nameOfTheCompany === "") {
            nameCompanyError.innerHTML = "Enter the Company Name."
            representativeNameError.innerHTML = "";
            emailError.innerHTML = "";
        } else if (representative === "") {
            representativeNameError.innerHTML = "Enter the Name of Representative.";
            nameCompanyError.innerHTML = "";
            emailError.innerHTML = "";
        } else if (email === "" || emailFlag === false) {
            emailError.innerHTML = "Enter a valid Email";
            nameCompanyError.innerHTML = "";
            representativeNameError.innerHTML = "";
        } else {
            nameCompanyError.innerHTML = "";
            representativeNameError.innerHTML = "";
            emailError.innerHTML = "";
            history.push("signup2");
        };

        console.log(
            nameOfTheCompany.value
        )
    }

    return (
        <>
            <SignUpHeader />
            <br />
            <br />
            <br />
            <section id="signup_page" >
                <div id="signup_page_text">
                    <h1>Get industry ready candidates</h1>
                    <br />
                    <p>Create an account to sign up as a recruiter</p>
                    <br />
                    <br />
                    <div id="form">
                        <br />
                        <label>Name of the Company</label>
                        <br />
                        <TextField type="text" required onChange={companynameChange} value={nameOfTheCompany} className="input" className="nameOfTheCompany" variant="outlined" label="Type here" />
                        <p className="nameCompanyError"></p>
                        <br />
                        <label>Name of Company Representative</label>
                        <br />
                        <TextField required onChange={representativeChange} value={representative} className="input" className="nameOfTheRepresentative" variant="outlined" label="Type the name here" />
                        <p className="representativeNameError"></p>
                        <br />
                        <label>Email Address</label>
                        <br />
                        <TextField onChange={emailChange} value={email} type="email" required className="input" className="email" variant="outlined" label="Type your email here" />
                        <p className="emailError"></p>
                        <br />
                        <label>Date of Registration of Company</label>
                        <br />
                        <TextField
                            id="date"
                            label="mm/dd/yy"
                            type="date"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            required
                        />
                        <br />
                        <br />
                        <Button type="submit" onClick={submit} style={{ height: "50px", width: "100px", backgroundColor: "#0063ff", color: "#fff" }}>Next</Button>
                    </div>
                    <br />
                    <br />
                </div>
                <div id="signup_page_image">
                    <img src={Signup} alt="" />
                </div>
            </section>
        </>
    )
}

export default Signup1
