import { useState } from "react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/SideBar/SideBar";
import "./SavingsGoals.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CalenderIcon from "../../assets/icons/calendar.svg?react"

const SavingsGoals = () => {
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  
  return (
    <div className="container">
      <Header />
      <div className="savings">
        <Sidebar />
        <section className="savings__section">
          <form className="savings__form-details">
            <h2 className="savings__form-title">Create New Savings Goal</h2>
            <input type="text" placeholder="Goal Name" className="savings__input" />
            <input type="number" placeholder="Goal Amount" className="savings__input" />
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
        </section>
      </div>
    </div>
  );
};

export default SavingsGoals;
