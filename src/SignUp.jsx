import React from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";
import { FiMail, FiLock, FiUser } from "react-icons/fi";

const LogIn = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h4 className="login-subtitle">Sign Up</h4>
        <h2 className="login-title">Sign up to your account</h2>

        <form className="login-form">
            {/* Name input with icon */}
            <div className="input-group">
                <FiUser className="input-icon" />
                <input type="text" placeholder="Full Name" required />
            </div>

            {/* Email input with icon */}
            <div className="input-group">
                <FiMail className="input-icon" />
                <input type="email" placeholder="Email" required />
            </div>

            {/* Password input with icon */}
            <div className="input-group">
                <FiLock className="input-icon" />
                <input type="password" placeholder="Create Password" required />
            </div>

            <button type="submit" className="login-btn">
                Sign Up
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
          Already Have An Account?{" "}
          <Link to="/SignIn" className="signup-link">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LogIn;
