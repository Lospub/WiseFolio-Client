import { useState } from "react";
import Sidebar from "../../components/SideBar/SideBar";
import "./ExpenseTracking.scss"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CalenderIcon from "../../assets/icons/calendar.svg?react"
import DropDownIcon from "../../assets/icons/dropdown.svg?react"
import ListView from "../../components/Listview/Listview";
import Header from "../../components/Header/Header";

const ExpenseTracking = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [category, setCategory] = useState<string>("");
  // sample data
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Grocery Shopping", category: "Food", date: "March 15, 2025", amount: 45.99 },
    { id: 2, description: "Bus Ticket", category: "Transport", date: "March 14, 2025", amount: 2.50 },
  ]);

  const handleEdit = (id: number) => {
    console.log("Edit clicked for ID:", id);
  };

  const handleDelete = (id: number) => {
    console.log("Delete clicked for ID:", id);
  };


  return (
    <div className="container">
      <Header />
      <div className="expense">
        <Sidebar />
        <section className="expense__section">
          <form className="expense__form-details">
            <h2 className="expense__form-title">Add New Expense</h2>
            <input type="text" placeholder="Description" className="expense__input" />
            <input type="number" placeholder="Amount" className="expense__input" />

            <div className="expense__dropdown-container">
              <select
                className="expense__dropdown"
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
              <DropDownIcon className="expense__dropdown-icon" />
            </div>

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
                  <div className="expense__custom">
                    <input
                      className="expense__date-input"
                      type="text"
                      value={
                        selectedDate
                          ? selectedDate.toLocaleDateString("en-US")
                          : ""
                      }
                      readOnly
                    />
                    <CalenderIcon className="expense__date-icon" />
                  </div>
                }
              />
            </div>
            <button type="submit" className="expense__button">
              Add Expense
            </button>
          </form>
          <div className="expense__recent">
            <ListView expenses={expenses} onEdit={handleEdit} onDelete={handleDelete} />
          </div>
        </section>
      </div>
    </div>

  );
};

export default ExpenseTracking;
