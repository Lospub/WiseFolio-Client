import "./Home.scss"
import Footer from "../../components/Footer/Footer";
import ExpenseIcon from "../../assets/icons/expense.svg";
import BudgetIcon from "../../assets/icons/budget.svg";
import SavingsIcon from "../../assets/icons/saving.svg";
import AIIcon from "../../assets/icons/AI.svg";
import SecurityIcon from "../../assets/icons/locker.svg";
import RealTimeIcon from "../../assets/icons/time.svg";

const Home = () => {
    return (
        <>
            <div className="home">
                <header className="home__hero">
                    <h1 className="home__hero-title">Simplify Your Finances with AI</h1>
                    <p className="home__hero-subtitle">Take control of your financial future with smart tracking and intelligent insights</p>
                    <article className="home__features">
                        <div className="home__feature">
                            <img src={ExpenseIcon} alt="Expense Tracking" className="feature-icon" />
                            <p>Expense Tracking</p>
                        </div>
                        <div className="home__feature">
                            <img src={BudgetIcon} alt="Budget Management" className="feature-icon" />
                            <p>Budget Management</p>
                        </div>
                        <div className="home__feature">
                            <img src={SavingsIcon} alt="Savings Goals" className="feature-icon" />
                            <p>Savings Goals</p>
                        </div>
                        <div className="home__feature">
                            <img src={AIIcon} alt="AI Insights" className="feature-icon" />
                            <p>AI Insights</p>
                        </div>
                    </article>
                    <div className="home__buttons">
                        <button className="home__signup-btn">Sign Up</button>
                        <button className="home__login-btn">Login</button>
                        <a href="#" className="home__guest-link">Continue as Guest</a>
                    </div>
                </header>
                <section className="home__choose">
                    <h2>Why Choose WiseFolio?</h2>
                    <div className="home__benefits">
                        <div className="home__benefit">
                            <img src={AIIcon} alt="AI-Powered Analysis" className="home__benefit-icon" />
                            <h3>AI-Powered Analysis</h3>
                            <p>Get personalized insights and recommendations based on your spending patterns.</p>
                        </div>
                        <div className="home__benefit">
                            <img src={SecurityIcon} alt="Bank-Level Security" className="home__benefit-icon" />
                            <h3>Bank-Level Security</h3>
                            <p>Your financial data is protected with state-of-the-art encryption.</p>
                        </div>
                        <div className="home__benefit">
                            <img src={RealTimeIcon} alt="Real-Time Updates" className="home__benefit-icon" />
                            <h3>Real-Time Updates</h3>
                            <p>Track your finances with instant synchronization across all devices.</p>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default Home;
