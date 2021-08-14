import { Button, Checkbox, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import "./Signup2.css";
import SignUpHeader from './SignUpHeader';
import Signup from "./images/signup.png";
import { NavLink } from 'react-router-dom';
import ImageUpload from "./ImageUpload";

function SignUp2() {
    const history = useHistory();
    const galleryImageList = [
        "https://raw.githubusercontent.com/dxyang/StyleTransfer/master/style_imgs/mosaic.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1280px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
        "https://raw.githubusercontent.com/ShafeenTejani/fast-style-transfer/master/examples/dora-maar-picasso.jpg",
        "https://pbs.twimg.com/profile_images/925531519858257920/IyYLHp-u_400x400.jpg",
        "https://raw.githubusercontent.com/ShafeenTejani/fast-style-transfer/master/examples/dog.jpg",
        "http://r.ddmcdn.com/s_f/o_1/cx_462/cy_245/cw_1349/ch_1349/w_720/APL/uploads/2015/06/caturday-shutterstock_149320799.jpg"
    ];

    let flag1 = false;
    let flag2 = false;

    let [alternativeEmail, setAlternativeEmail] = useState("");
    let [referalCode, setReferralCode] = useState("");
    let [password, setPassword] = useState("");

    function submit() {
        let alternativeEmailFlag = false;
        let alternativeEmailLetters = alternativeEmail.split("");
        alternativeEmailLetters.map((ele) => {
            if (ele === "@") {
                alternativeEmailFlag = !alternativeEmailFlag;
            }
        })
        let alternativeError = document.querySelector(".alternativeError");
        let referralError = document.querySelector(".referralError");
        let passwordError = document.querySelector(".passwordError");

        if (alternativeEmail === "" || alternativeEmailFlag === false) {
            alternativeError.innerHTML = "Enter a valid Email address";
            referralError.innerHTML = "";
            passwordError.innerHTML = "";
        } else if (referalCode === "") {
            alternativeError.innerHTML = "";
            referralError.innerHTML = "Enter your Referal Code";
            passwordError.innerHTML = "";
        } else if (password === "" || password.length < 6) {
            alternativeError.innerHTML = "";
            referralError.innerHTML = "";
            passwordError.innerHTML = "Minimun 6 charecters required";
        } else if (flag1 == false || flag2 == false) {
            alternativeError.innerHTML = "";
            referralError.innerHTML = "";
            passwordError.innerHTML = "";
        } else {
            alternativeError.innerHTML = "";
            referralError.innerHTML = "";
            passwordError.innerHTML = "";
            history.push("signup");
        }
    }

    return (
        <>
            <SignUpHeader />
            <br />
            <br />
            <section id="signup2_page" >
                <div id="signup2_page_text">
                    <h1>Get industry ready candidates</h1>
                    <p>Create an account to sign up as a recruiter</p>
                    <br />
                    <div id="form">
                        <br />
                        <label>Upload Company Logo</label>
                        <br />
                        <p style={{ color: "rgb(75,75,75)", fontSize: "12px" }}>Max-size = 10mb (.jpeg, .jpg, .png)</p>
                        <br />
                        <div style={{ width: "300px", height: "fit-content" }}><ImageUpload cardName="Input Image" imageGallery={galleryImageList} style={{ color: "#0063ff" }} /></div>
                        <br />
                        <br />
                        <label>Alternative Email Address</label>
                        <br />
                        <TextField value={alternativeEmail} onChange={(e) => { setAlternativeEmail(e.target.value) }} className="input" variant="outlined" label="Type here" />
                        <p className="alternativeError"></p>
                        <br />
                        <label>Referral Code</label>
                        <br />
                        <TextField value={referalCode} onChange={(e) => { setReferralCode(e.target.value) }} className="input" variant="outlined" label="Type here" />
                        <p className="referralError" ></p>
                        <br />
                        <label>Create a Password</label>
                        <TextField value={password} onChange={(e) => { setPassword(e.target.value) }} className="input" type="password" variant="standard" label="password" />
                        <p className="passwordError"></p>
                        <br />
                        <br />
                        <div style={{ display: "flex" }}><Checkbox onClick={() => { flag1 = !flag1 }} style={{ width: "25px", height: "25px", marginRight: "5px", color: "#0063ff" }} /><p style={{ color: "rgb(75,75,75)" }}>I agree to the Terms and Conditions.</p></div>
                        <div style={{ display: "flex" }} ><Checkbox onClick={() => { flag2 = !flag2 }} style={{ width: "25px", height: "25px", marginRight: "5px", color: "#0063ff" }} /><p style={{ color: "rgb(75,75,75)" }}>I have read the recruiter policy.</p></div>
                        <br />
                        <br />
                        <Button onClick={submit} style={{ height: "50px", width: "250px", backgroundColor: "#0063ff", color: "#fff" }}>Register as a Recruiter</Button>
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

export default SignUp2
