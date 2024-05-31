import React, { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import ButtonComponent from "src/Components/Button";
import Loginpagelogo from "src/Logos/Login Page Logo/Loginpagelogo";
import Googlelogo from "src/SVGs/Googlelogo";
import Passwordhide from "src/SVGs/Passwordhide";
import Passwordsee from "src/SVGs/Passwordsee";
import Usersvg from "src/SVGs/Usersvg";

const Login = (props: any) => {
  const [EmailorNumber, setEmailorNumber] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <div className="outercomp ">
        <div className="innercompleft">
          <Loginpagelogo />
        </div>
        <div className="innercompright">
          <div className="formouter">
            <div className="outer">
              <div className="txt">Hey, &nbsp; &nbsp; &nbsp; Welcome Back!</div>
              <div className="txt2">We are very happy to see you back!</div>
            </div>
            <div className="inner">
              <div>
                <label htmlFor="emailornumber">
                  Email Address/Mobile Number{" "}
                  <span style={{ color: "red" }}>*</span>
                </label>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <input
                    type="text"
                    id="emailornumber"
                    placeholder="Enter your Email or Mobile Number"
                    onChange={(e) => setEmailorNumber(e.target.value)}
                  ></input>
                  <Usersvg className="usersvg" />
                </div>
              </div>
              <div>
                <label htmlFor="password">
                  Password <span style={{ color: "red" }}>*</span>
                </label>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <input
                    type="password"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter Password"
                  />
                  <Passwordhide className="usersvg" />
                </div>
                <a href="">Forgot Password</a>
              </div>
              <div className="Remember">
                <input type="checkbox" name="" id="" className="" />
                Remember Me as <span>Member.</span>
              </div>
              <ButtonComponent className="loginbtn">Login</ButtonComponent>
              <div className="or">
                <svg
                  width="184"
                  height="2"
                  viewBox="0 0 184 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.121094 0.588959L183.621 0.961925"
                    stroke="#7E8B9E"
                    stroke-width="0.795144"
                  />
                </svg>
                OR
                <svg
                  width="184"
                  height="2"
                  viewBox="0 0 184 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.121094 0.588959L183.621 0.961925"
                    stroke="#7E8B9E"
                    stroke-width="0.795144"
                  />
                </svg>
              </div>
              <div>
                <ButtonComponent className="logingoogle">
                  <Googlelogo /> Login with Google
                </ButtonComponent>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
