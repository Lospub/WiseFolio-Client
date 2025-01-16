import "./Home.scss"
import Footer from "../../components/Footer/Footer";
import ExpenseIcon from "../../assets/icons/expense.svg?react";
import BudgetIcon from "../../assets/icons/budget.svg?react";
import SavingsIcon from "../../assets/icons/saving.svg?react";
import AIIcon from "../../assets/icons/AI.svg?react";
import RobotIcon from "../../assets/icons/robot.svg?react";
import SecurityIcon from "../../assets/icons/locker.svg?react";
import RealTimeIcon from "../../assets/icons/time.svg?react";
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const handleSignupClick = () => {
        navigate("/register");
    };

    const handleLoginClick = () => {
        navigate("/login");
    };

    return (
        <>
            <div className="home">

                {/* Home page hero section */}
                <header className="home__hero">
                    <h1 className="home__hero-title">Simplify Your Finances with AI</h1>
                    <p className="home__hero-subtitle">Take control of your financial future with smart tracking and intelligent insights</p>
                    <article className="home__features">
                        <div className="home__feature">
                            <ExpenseIcon />
                            <p>Expense Tracking</p>
                        </div>
                        <div className="home__feature">
                            <BudgetIcon />
                            <p>Budget Management</p>
                        </div>
                        <div className="home__feature">
                            <SavingsIcon />
                            <p>Savings Goals</p>
                        </div>
                        <div className="home__feature">
                            <AIIcon />
                            <p>AI Insights</p>
                        </div>
                    </article>

                    {/* User Login or User register or Guest usage */}
                    <div className="home__buttons">
                        <button className="home__signup-btn" onClick={handleSignupClick}>Sign Up</button>
                        <button className="home__login-btn" onClick={handleLoginClick}>Login</button>
                        <Link to="/dashboard" className="home__guest-link">Continue as Guest</Link>
                    </div>
                </header>

                {/* Benefits */}
                <section className="home__choose">
                    <h2 className="home__choose-title">Why Choose WiseFolio?</h2>
                    <div className="home__benefits">
                        <div className="home__benefit">
                            <RobotIcon />
                            <h3 className="home__benefit-title">AI-Powered Analysis</h3>
                            <p className="home__benefit-content">Get personalized insights and recommendations based on your spending patterns.</p>
                        </div>
                        <div className="home__benefit">
                            <SecurityIcon />
                            <h3 className="home__benefit-title">Bank-Level Security</h3>
                            <p className="home__benefit-content">Your financial data is protected with state-of-the-art encryption.</p>
                        </div>
                        <div className="home__benefit">
                            <RealTimeIcon />
                            <h3 className="home__benefit-title">Real-Time Updates</h3>
                            <p className="home__benefit-content">Track your finances with instant synchronization across all devices.</p>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default Home;
