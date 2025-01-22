import { useEffect, useState } from "react";
import Sidebar from "../../components/SideBar/SideBar";
import "./ExpenseTracking.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CalenderIcon from "../../assets/icons/calendar.svg?react";
import DropDownIcon from "../../assets/icons/dropdown.svg?react";
import ListView from "../../components/Listview/Listview";
import Header from "../../components/Header/Header";
import { createExpense, getExpensesByUserId, getExpenseById, updateExpense, deleteExpense } from "../../api/expenseServer";
import { getCategories } from "../../api/categoryServer";

const ExpenseTracking = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [description, setDescription] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editingExpenseId, setEditingExpenseId] = useState<number | null>(null);

  interface Expense {
    id: number;
    description: string;
    category: string;
    date: string;
    amount: number;
  }

  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  // get expenses by user id
  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const userId = localStorage.getItem("UserID");
        if (!userId) {
          throw new Error("userID is null");
        }
        const userExpenses = await getExpensesByUserId(userId.toString());
        setExpenses(userExpenses);
      } catch (error) {
        console.error("Error fetching expenses:", error);
      }
    };
    const fetchCategories = async () => {
      try {
        const fetchedCategories = await getCategories();
        const categoryNames = fetchedCategories.map((category) => category.name);
        setCategories(categoryNames);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchExpenses();
    fetchCategories();
  }, []);

  // adding or updating an expense
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userId = localStorage.getItem("UserID");
      if (!userId) {
        throw new Error("userID is null");
      }

      if (isEditing && editingExpenseId !== null) {
        // Update expense
        const updates = {
          description,
          amount: parseFloat(amount),
          category,
          date: selectedDate.toISOString().split("T")[0],
        };

        const updatedExpense = await updateExpense(editingExpenseId.toString(), updates);
        setExpenses((prevExpenses) =>
          prevExpenses.map((expense) =>
            expense.id === editingExpenseId ? { ...expense, ...updatedExpense } : expense
          )
        );

        // Reset form state
        setIsEditing(false);
        setEditingExpenseId(null);
      } else {
        // Create new expense
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
      }

      // Reset form 
      setDescription("");
      setAmount("");
      setCategory("");
      setSelectedDate(new Date());
    } catch (error) {
      console.error("Error submitting expense:", error);
    }
  };

  // Edit handler
  const handleEdit = async (id: number) => {
    try {
      const expense = await getExpenseById(id.toString());
      setDescription(expense.description);
      setAmount(expense.amount.toString());
      setCategory(expense.category);
      setSelectedDate(new Date(expense.date));
      setIsEditing(true);
      setEditingExpenseId(id);
    } catch (error) {
      console.error("Error fetching expense by ID:", error);
    }
  };

  // Delete handler (optional for completeness)
  const handleDelete = async (id: number) => {
    try {
      await deleteExpense(id.toString());
      const userId = localStorage.getItem("UserID");
      if (!userId) throw new Error("userID is null");

      // Re-fetch the updated expense list
      const updatedExpenses = await getExpensesByUserId(userId.toString());
      setExpenses(updatedExpenses);
    } catch (error) {
      console.error("Error deleting expense:", error);
    }
  };

  return (
    <div className="container">
      <Header />
      <div className="expense">
        <Sidebar />
        <section className="expense__section">
          <form className="expense__form-details" onSubmit={handleSubmit}>
            <h2 className="expense__form-title">
              {isEditing ? "Edit Expense" : "Add New Expense"}
            </h2>
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
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
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
              {isEditing ? "Update Expense" : "Add Expense"}
            </button>
          </form>
          <div className="expense__recent">
            <ListView
              expenses={expenses.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())}
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
