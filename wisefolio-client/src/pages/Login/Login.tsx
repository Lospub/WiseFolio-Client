import React from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';
import Footer from '../../components/Footer/Footer';

const Login: React.FC = () => {
  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sign-In Submitted");
  };

  return (
    <>
      <section className="login">

        {/* Login Card */}
        <div className="login__card">
          <h1 className="login__title">Welcome Back</h1>
          <p className="login__subtitle">Sign in to continue to WiseFolio</p>

          {/* Login Form */}
          <form onSubmit={handleSignIn} className="login__form">

            {/* Email */}
            <div className="login__container">
              <label className="login__label" htmlFor="email">
                Email
              </label>
              <input
                className="login__input"
                type="email"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Password */}
            <div className="login__container">
              <label className="login__label" htmlFor="password">
                Password
              </label>
              <input
                className="login__input"
                type="password"
                id="password"
                placeholder="Enter your password"
                required
              />
            </div>

            <Link to="#" className="login__link">
              Forgot Password?
            </Link>
            <button type="submit" className="login__button">
              Sign In
            </button>
          </form>
          <div className="login__links">
            <p className="login__text">
              Don't have an account?{" "}
              <Link to="/signup" className="login__link">
                Create one
              </Link>
            </p>
            <Link to="/dashboard" className="login__guest">
              Continue as Guest
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>

  );
};

export default Login;
