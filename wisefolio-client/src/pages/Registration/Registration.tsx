import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import ShowIcon from "../../assets/icons/show.svg?react";
import HideIcon from "../../assets/icons/hide.svg?react";
import { Link } from "react-router-dom";
import "./Registration.scss";

const Registration: React.FC = () => {
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
      <div className="registration">
        <div className="registration__card">
          <h1 className="registration__title">Create your account</h1>
          <form onSubmit={handleSubmit} className="registration__form">
            <label className="registration__form__label" htmlFor="fullname">
              Full Name
            </label>
            <input
              className="registration__form__input"
              type="text"
              id="fullname"
              placeholder="John Doe"
              required
            />
            <label className="registration__form__label" htmlFor="email">
              Email
            </label>
            <input
              className="registration__form__input"
              type="email"
              id="email"
              placeholder="john@example.com"
              required
            />
            <label className="registration__form__label" htmlFor="password">
              Password
            </label>
            <div className="registration__form__password">
              <input
                className="registration__form__input"
                type={passwordVisible ? "text" : "password"}
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
              <button
                type="button"
                className="registration__form__icon"
                onClick={() => setPasswordVisible(!passwordVisible)}
                aria-label="Toggle password visibility"
              >
                {passwordVisible ? <HideIcon /> : <ShowIcon />}
              </button>
            </div>
            <p className="registration__form__hint">Must be at least 8 characters long</p>
            <label className="registration__form__label" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <div className="registration__form__password">
              <input
                className="registration__form__input"
                type={confirmPasswordVisible ? "text" : "password"}
                id="confirmPassword"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                required
              />
              <button
                type="button"
                className="registration__form__icon"
                onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
                aria-label="Toggle confirm password visibility"
              >
                {confirmPasswordVisible ? <HideIcon /> : <ShowIcon />}
              </button>
            </div>
            {!passwordsMatch && (
              <p className="registration__form__error">Passwords do not match</p>
            )}
            <div className="registration__form__agreement">
              <input type="checkbox" id="terms" required />
              <label htmlFor="terms">
                I agree to the
                <Link to="/terms" className="registration__form__link">
                  Terms of Service
                </Link>
                and
                <Link to="/privacy" className="registration__form__link">
                  Privacy Policy
                </Link>.
              </label>
            </div>
            <button type="submit" className="registration__button">
              Sign Up
            </button>
          </form>
          <Link to="/dashboard" className="registration__guest">
            Continue as Guest
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Registration;
