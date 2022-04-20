import React from "react";

import img from "../images/doctor1.svg";

function SignUpForm() {
  return (
    <form action="/" className="sign-up-form">
      <h2 className="title">Sign up</h2>
      <div className="input-field">
        <i className="fas fa-user"></i>
        <input type="text" placeholder="Username" />
      </div>
      <div className="input-field">
        <i className="fas fa-user"></i>
        <input type="email" placeholder="Enter Your Mail ID" />
      </div>
      <div className="input-field">
        <i className="fas fa-lock"></i>
        <input type="password" placeholder="Password" />
      </div>
      <div className="input-field">
        <i className="fas fa-lock"></i>
        <input type="password" placeholder="Confirm Password" />
      </div>
      <input type="submit" className="btn" value="Sign up" />
    </form>
  );
}

function SignUpPrompt(props) {
  const { setState } = props;
  return (
    <div className="panel left-panel">
      <div className="content">
        <h3>New here ?</h3>
        <p>Register your pet first by clicking register here</p>
        <button
          onClick={() => setState(" sign-up-mode")}
          className="btn transparent"
          id="sign-up-btn"
        >
          Sign up
        </button>
      </div>
      <img src={img} className="image" alt="" />
    </div>
  );
}

export { SignUpForm, SignUpPrompt };
