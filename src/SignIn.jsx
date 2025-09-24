import React from "react";
import { Link } from "react-router-dom";
import "./SignIn.css";
import { FiMail, FiLock } from "react-icons/fi";

const LogIn = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h4 className="login-subtitle">Sign In</h4>
        <h2 className="login-title">Sign in to your account</h2>

        <form className="login-form">
          {/* Email input with icon */}
          <div className="input-group">
            <FiMail className="input-icon" />
            <input type="email" placeholder="Email" required />
          </div>

          {/* Password input with icon */}
          <div className="input-group">
            <FiLock className="input-icon" />
            <input type="password" placeholder="Password" required />
          </div>

          <button type="submit" className="login-btn">
            Sign In
          </button>
        </form>

        <div className="divider">
          <span>Or</span>
        </div>

        <button className="google-btn">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
          />
          Continue with Google
        </button>

        <p className="signup-text">
          Not Register Yet?{" "}
          <Link to="/SignUp" className="signup-link">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LogIn;
