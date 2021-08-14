import React from 'react';
import LoginHeader from "./LoginHeader";
import "./Signup2.css";
import login from "./images/login.png";
import { Button, TextField } from '@material-ui/core'

function Login() {
    return (
        <>
            <LoginHeader />
            <br />
            <br />
            <br />
            <section id="signup2_page" >
                <div id="signup2_page_text">
                    <h1>Get industry ready candidates</h1>
                    <br />
                    <p>Log in to get started!</p>
                    <br />
                    <br />
                    <div id="form">
                        <br />
                        <label>Enter your Email</label>
                        <br />
                        <TextField id="input" variant="outlined" label="email" />
                        <br />
                        <label>Enter your Password</label>
                        <TextField id="input" variant="standard" label="password" />
                    </div>
                    <br />
                    <br />
                    <Button style={{ backgroundColor: "#0063ff", color: "#fff", height: "50px", width: "100px" }} >Login</Button>
                    <br />
                    <br />
                </div>
                <br />

                <div id="signup_page_image">
                    <img src={login} alt="" />
                </div>
                <br />

            </section>
            <br />
            <br />
        </>
    )
}

export default Login
