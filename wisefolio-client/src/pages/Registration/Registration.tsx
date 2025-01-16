import Footer from "../../components/Footer/Footer";
import ShowIcon from "../../assets/icons/show.svg?react";
import HideIcon from "../../assets/icons/hide.svg?react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Registration.scss";

const Registration = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setPasswordsMatch(e.target.value === confirmPassword);
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
    setPasswordsMatch(password === e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!passwordsMatch) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Registration Submitted");
  };

  return (
    <>
      {/* Registration Card */}
      <section className="registration">
        <div className="registration__card">
          <h1 className="registration__title">Create your account</h1>

          {/* Registration form */}
          <form onSubmit={handleSubmit} className="registration__form">

            {/* Username Input */}
            <div className="registration__container">
              <label className="registration__label" htmlFor="fullname">
                Username
              </label>
              <input
                className="registration__input"
                type="text"
                id="fullname"
                placeholder="John Doe"
                required
              />
            </div>

            {/* Email Input */}
            <div className="registration__container">
              <label className="registration__label" htmlFor="email">
                Email
              </label>
              <input
                className="registration__input"
                type="email"
                id="email"
                placeholder="john@example.com"
                required
              />
            </div>

            {/* Password Input */}
            <div className="registration__container">
              <label className="registration__label" htmlFor="password">
                Password
              </label>
              <div className="registration__password">
                <input
                  className="registration__input"
                  type={passwordVisible ? "text" : "password"}
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={handlePasswordChange}
                  minLength={8}
                  required
                />
                <button
                  type="button"
                  className="registration__icon"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                  aria-label="Toggle password visibility"
                >
                  {passwordVisible ? <HideIcon /> : <ShowIcon />}
                </button>
              </div>
              <p className="registration__hint">Must be at least 8 characters long</p>
            </div>

            {/* Confirm Password */}
            <div className="registration__container">
              <label className="registration__label" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <div className="registration__password">
                <input
                  className="registration__input"
                  type={confirmPasswordVisible ? "text" : "password"}
                  id="confirmPassword"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  required
                />
                <button
                  type="button"
                  className="registration__icon"
                  onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
                  aria-label="Toggle confirm password visibility"
                >
                  {confirmPasswordVisible ? <HideIcon /> : <ShowIcon />}
                </button>
              </div>
              {!passwordsMatch && (
                <p className="registration__error">Passwords do not match</p>
              )}
            </div>
            
            {/* Agreement checkbox */}
            <div className="registration__agreement">
              <input type="checkbox" id="terms" required />
              <label htmlFor="terms" className="registration__links">
                I agree to the 
                <Link to="#" className="registration__link">
                  Terms of Service
                </Link>
                and 
                <Link to="#" className="registration__link">
                  Privacy Policy
                </Link>.
              </label>
            </div>

            {/* Handle submit */}
            <button type="submit" className="registration__button">
              Sign Up
            </button>
          </form>
          <Link to="/dashboard" className="registration__guest">
            Continue as Guest
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Registration;
