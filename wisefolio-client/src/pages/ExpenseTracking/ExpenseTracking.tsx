import { useState } from "react";
import Sidebar from "../../components/SideBar/SideBar";
import "./ExpenseTracking.scss"
import DatePicker from "react-datepicker";
import CalenderIcon from "../../assets/icons/calendar.svg?react"

const ExpenseTracking = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [category, setCategory] = useState<string>("");

  return (
    <div className="expense">
      <Sidebar />
      <section className="expense__section">
        <div className="expense__form">
          <h2 className="expense__form-title">Add New Expense</h2>
          <form>
            <input type="text" placeholder="Description" className="expense__input" />
            <input type="number" placeholder="Amount" className="expense__input" />

            <select
              className="expense__dropdown"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="" disabled hidden>Please select category</option>
              <option value="food">Food</option>
              <option value="transport">Transport</option>
              <option value="entertainment">Entertainment</option>
              <option value="others">Others</option>
            </select>

            <div className="expense__date">
              <DatePicker
                selected={selectedDate}
                onChange={(date: Date | null) => {
                  if (date) {
                    setSelectedDate(date);
                  }
                }}
                dateFormat="MM/dd/yyyy"
                customInput={
                  <div className="custom-date-input">
                    <input
                      type="text"
                      value={
                        selectedDate
                          ? selectedDate.toLocaleDateString("en-US")
                          : ""
                      }
                      readOnly
                    />
                    <CalenderIcon />
                  </div>
                }
              />
            </div>
            <button type="submit" className="expense__form-button">
              Add Expense
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ExpenseTracking;
