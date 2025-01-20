import { useState } from "react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/SideBar/SideBar";
import DropDownIcon from "../../assets/icons/dropdown.svg?react"
import "./BudgetManagement.scss"
import CardList from "../../components/CardList/CardList";

const BudgetManagement = () => {
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [duration, setDuration] = useState("");
  const [budgets, setBudgets] = useState<Budget[]>([{
    category: "Transportation",
    date: new Date(),
    amountUsed: 225,
    amountLimit: 500,
},
{
    category: "Food & Dining",
    date: new Date(),
    amountUsed: 750,
    amountLimit: 1000,
},]);

  type Budget = {
    category: string;
    date: Date;
    amountUsed: number;
    amountLimit: number;
};

  return (
    <div className="container">
      <Header />
      <div className="budget">
        <Sidebar />
        <section className="budget__section">
          <form className="budget__form-details">
            <h2 className="budget__form-title">Create New Budget</h2>
            <div className="budget__dropdown-container">
              <select
                id="category"
                className="budget__dropdown"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              >
                <option value="" disabled hidden>Category</option>
                <option value="food">Food</option>
                <option value="transport">Transport</option>
                <option value="entertainment">Entertainment</option>
                <option value="others">Others</option>
              </select>
              <DropDownIcon className="budget__dropdown-icon" />
            </div>

            <input
              className="budget__input"
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
            />

            <div className="budget__dropdown-container">
              <select
                id="duration"
                className="budget__dropdown"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                required
              >
                <option value="" disabled hidden>Duration</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
                <option value="yearly">Yearly</option>
              </select>
              <DropDownIcon className="budget__dropdown-icon" />
            </div>

            <button type="submit" className="budget__button">
              Create Budget
            </button>
          </form>
          <h2 className="budget__card-header">Your Budgets</h2>
          <CardList componentList={budgets} />
        </section>
      </div>
    </div>
  );
};

export default BudgetManagement;
