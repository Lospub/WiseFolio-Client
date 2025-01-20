import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.scss';
import Footer from '../../components/Footer/Footer';
import { loginUser } from '../../api/userServer';
import Header from '../../components/Header/Header';


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const idToken =await loginUser(email, password);
      localStorage.setItem('idToken', idToken);
      navigate("/dashboard");
    } catch (error: any) {
      console.error("An Error Occurred: ", error.message)
      alert("Please check your email or password.")
    }
  };

  return (
    <div className='container'>
      <Header />
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
              <Link to="/register" className="login__link">
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
    </div>

  );
};

export default Login;
