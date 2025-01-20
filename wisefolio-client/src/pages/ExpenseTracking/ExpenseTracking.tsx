import { useEffect, useState } from "react";
import Sidebar from "../../components/SideBar/SideBar";
import "./ExpenseTracking.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CalenderIcon from "../../assets/icons/calendar.svg?react";
import DropDownIcon from "../../assets/icons/dropdown.svg?react";
import ListView from "../../components/Listview/Listview";
import Header from "../../components/Header/Header";
import { createExpense, getExpensesByUserId } from "../../api/expenseServer";
import { decodeIdToken } from "../../api/userServer";

const ExpenseTracking = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [description, setDescription] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  interface Expense {
    id: number;
    description: string;
    category: string;
    date: string;
    amount: number;
  }
  
  const [expenses, setExpenses] = useState<Expense[]>([]);

  // get expenses by user id
  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const IdToken = localStorage.getItem("idToken");
        if (!IdToken) {
          throw new Error("IdToken is null");
        }
        const userId = await decodeIdToken(IdToken);
        const userExpenses = await getExpensesByUserId(userId.toString());
        setExpenses(userExpenses);
      } catch (error) {
        console.error("Error fetching expenses:", error);
      }
    };

    fetchExpenses();
  }, []);

  // create new expense
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const IdToken = localStorage.getItem("idToken");
      if (!IdToken) {
        throw new Error("IdToken is null");
      }
      const userId = await decodeIdToken(IdToken);
      const expense = {
        user_id: userId.toString(),
        description: description,
        amount: parseFloat(amount),
        category: category,
        date: selectedDate.toISOString().split('T')[0],
      };
      const result = await createExpense(expense);

      setExpenses((prevExpenses) => [
        ...prevExpenses,
        {
          id: result.id,
          description: result.description,
          category: result.category,
          date: result.date,
          amount: result.amount,
        },
      ]);

      setDescription("");
      setAmount("");
      setCategory("");
      setSelectedDate(new Date());
    } catch (error) {
      console.error("Error creating expense:", error);
    }
  };

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
          <form className="expense__form-details" onSubmit={handleSubmit}>
            <h2 className="expense__form-title">Add New Expense</h2>
            <input
              type="text"
              placeholder="Description"
              className="expense__input"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <input
              type="number"
              placeholder="Amount"
              className="expense__input"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />

            <div className="expense__dropdown-container">
              <select
                className="expense__dropdown"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              >
                <option value="" disabled hidden>
                  Category
                </option>
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
              Confirm
            </button>
          </form>
          <div className="expense__recent">
            <ListView
              expenses={expenses}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default ExpenseTracking;
