import { useState } from "react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/SideBar/SideBar";
import "./SavingsGoals.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CalenderIcon from "../../assets/icons/calendar.svg?react";
import CardList from "../../components/CardList/CardList";

const SavingsGoals = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [goalName, setGoalName] = useState<string>("");
  const [goalAmount, setGoalAmount] = useState<number>(0);
  const [savings, setSavings] = useState<Savings[]>([
    { name: "New Phone", amount: 200, amountLimit: 500, date: new Date() },
    { name: "New Laptop", amount: 600, amountLimit: 1000, date: new Date() },
  ]);
  type Savings = {
    name: string;
    date: Date;
    amount: number;
    amountLimit: number;
  };

  return (
    <div className="container">
      <Header />
      <div className="savings">
        <Sidebar />
        <section className="savings__section">
          <form className="savings__form-details">
            <h2 className="savings__form-title">Create New Savings Goal</h2>
            <input
              type="text"
              value={goalName}
              placeholder="Goal Name"
              onChange={(e) => setGoalName(e.target.value)}
              className="savings__input"
            />
            <input
              type="number"
              value={goalAmount}
              placeholder="Goal Amount"
              onChange={(e) => setGoalAmount(Number(e.target.value))}
              className="savings__input"
            />
            <div className="savings__date">
              <DatePicker
                selected={selectedDate}
                onChange={(date: Date | null) => {
                  if (date) {
                    setSelectedDate(date);
                  }
                }}
                dateFormat="MM/dd/yyyy"
                customInput={
                  <div className="savings__custom">
                    <input
                      className="savings__date-input"
                      type="text"
                      value={
                        selectedDate
                          ? selectedDate.toLocaleDateString("en-US")
                          : ""
                      }
                      readOnly
                    />
                    <CalenderIcon className="savings__date-icon" />
                  </div>
                }
              />
            </div>
            <button className="savings__button">Create</button>
          </form>
          <h2 className="savings__card-header">Your Savings Goals</h2>
          <CardList componentList={savings} />
        </section>
      </div>
    </div>
  );
};

export default SavingsGoals;
