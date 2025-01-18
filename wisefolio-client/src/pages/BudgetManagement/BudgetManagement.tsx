import { useState } from "react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/SideBar/SideBar";
import DropDownIcon from "../../assets/icons/dropdown.svg?react"
import "./BudgeManagement.scss"

const BudgetManagement = () => {
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [duration, setDuration] = useState("");

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
                <option value="" disabled hidden>Please select category</option>
                <option value="food">Food</option>
                <option value="transport">Transport</option>
                <option value="entertainment">Entertainment</option>
                <option value="others">Others</option>
              </select>
              <DropDownIcon className="budget__dropdown-icon" />
            </div>

            <div className="form-group">
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
              />
            </div>

            <div className="budget__dropdown-container">
              <select
                id="duration"
                className="budget__dropdown"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              >
                <option value="" disabled hidden>
                  Please select duration
                </option>
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
        </section>
      </div>
    </div>
  );
};

export default BudgetManagement;
