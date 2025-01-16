import { useNavigate } from 'react-router-dom';
import './Login.scss';
import Footer from '../../components/Footer/Footer';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sign-In Submitted");
  };

  return (
    <div className="login">
      <div className="login__card">
        <h2 className="login__title">Welcome Back</h2>
        <p className="login__subtitle">Sign in to continue to WiseFolio</p>
        <form onSubmit={handleSignIn} className="login__form">
          <label htmlFor="email" className="login__label">Email</label>
          <input
            type="email"
            id="email"
            className="login__input"
            placeholder="Enter your email"
            required
          />
          <label htmlFor="password" className="login__label">Password</label>
          <input
            type="password"
            id="password"
            className="login__input"
            placeholder="Enter your password"
            required
          />
          <button type="submit" className="login__button login__button--primary">
            Sign In
          </button>
        </form>
        <div className="login__links">
          <a href="/forgot-password" className="login__link">Forgot Password?</a>
          <p className="login__text">
            Don't have an account? <a href="/signup" className="login__link">Sign Up</a>
          </p>
          <button
            className="login__button login__button--secondary"
            onClick={() => navigate('/dashboard')}
          >
            Continue as Guest
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
