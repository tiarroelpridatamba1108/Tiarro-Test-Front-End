import React from 'react';
import {frameComp, logo_icon} from "../assets";
import {Input, InputAdornment} from "@mui/material";
import {useNavigate} from "react-router-dom";
import "../css/login..css"

function LoginPage(props) {
    const navigate = useNavigate();
    const toHomePage = () => {
        setTimeout(
            () => navigate("/home"),
            1000
        );
    }

    return (
        <div>
            <div className="flex items-center h-screen bg-white absolute">
                <div className="flex flex-col justify-center p-10 mx-32">
                    <div className="flex flex-col items-center">
                        <img src={logo_icon} alt="logo-icon"/>
                        <h3 className="animate text-xl mt-16">Welcome Back, Please login into your account</h3>
                    </div>
                    <div className="mt-5">
                        <p>Username / Email</p>
                        <Input
                            className="input px-4 py-2"
                            type="email"
                            placeholder="username / email"
                            disableUnderline={true}
                            fullWidth={true}
                        />
                    </div>
                    <div className="my-4">
                        <p>Password</p>
                        <Input
                            className="input px-4 py-2"
                            type='password'
                            placeholder="password"
                            disableUnderline={true}
                            fullWidth={true}
                            endAdornment={
                                <InputAdornment position="end">
                                    <span>| Forgot?</span>
                                </InputAdornment>
                            }
                        />
                    </div>
                    <div className="flex justify-center items-center">
                        <button className="hover:bg-rose-500" onClick={toHomePage}>sign in</button>
                    </div>
                </div>
            </div>
            <img src={frameComp} alt="frame-comp" className="w-full h-screen"/>
        </div>
    );
}

export default LoginPage;