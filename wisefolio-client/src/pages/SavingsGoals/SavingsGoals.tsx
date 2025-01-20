import Header from "../../components/Header/Header";
import Sidebar from "../../components/SideBar/SideBar";
import "./SavingsGoals.scss";

const SavingsGoals = () => {
  return (
    <div className="container">
      <Header />
      <div className="savings">
        <Sidebar />
        <section className="savings__section">
          <form className="savings__form-details">
            <h2 className="savings__form-title">Create New Savings Goal</h2>
            <button className="savings__button">Create</button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default SavingsGoals;
