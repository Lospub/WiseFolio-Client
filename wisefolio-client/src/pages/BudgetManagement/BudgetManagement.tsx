import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/SideBar/SideBar";
import DropDownIcon from "../../assets/icons/dropdown.svg?react";
import CalenderIcon from "../../assets/icons/calendar.svg?react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./BudgetManagement.scss";
import CardList from "../../components/CardList/CardList";
import { deleteBudget, calculateBudgetSpent, createBudget, getBudgetsByUserId, updateBudget } from "../../api/budgetServer";
import { getCategories } from "../../api/categoryServer";

const BudgetManagement = () => {
  const [category, setCategory] = useState("");
  const [amountLimit, setAmountLimit] = useState("");
  const [duration, setDuration] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [budgets, setBudgets] = useState<Budget[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editBudgetId, setEditBudgetId] = useState<string | null>(null);
  const [categories, setCategories] = useState<string[]>([]);

  type Budget = {
    id: string;
    name: string;
    date: Date;
    amount: number;
    amountLimit: number;
  };

  const userId = localStorage.getItem("UserID");
  if (!userId) {
    throw new Error("userID is null");
  }

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const fetchedCategories = await getCategories();
        const categoryNames = fetchedCategories.map((category) => category.name);
        setCategories(categoryNames);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    const fetchBudgets = async () => {
      try {
        const fetchedBudgets = await getBudgetsByUserId(userId.toString());
        const budgetsWithSpent = await Promise.all(
          fetchedBudgets.map(async (budget: any) => {
            const { spent } = await calculateBudgetSpent(budget.id);
            return {
              id: budget.id,
              name: budget.category,
              date: new Date(budget.end_date),
              amount: spent,
              amountLimit: budget.amount,
            };
          })
        );
        setBudgets(budgetsWithSpent);
      } catch (error) {
        console.error("Error fetching budgets:", error);
      }
    };
    fetchBudgets();
    fetchCategories();
  }, []);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const start_date = new Date();
    let end_date;

    if (isEditing) {
      end_date = selectedDate;
    } else {
      // Calculate end date based on duration for new budgets
      switch (duration) {
        case "weekly":
          end_date = new Date();
          end_date.setDate(start_date.getDate() + 7);
          break;
        case "monthly":
          end_date = new Date();
          end_date.setMonth(start_date.getMonth() + 1);
          break;
        case "yearly":
          end_date = new Date();
          end_date.setFullYear(start_date.getFullYear() + 1);
          break;
        default:
          return;
      }
    }

    if (!end_date) return;

    try {
      if (isEditing && editBudgetId) {
        await updateBudget(editBudgetId, {
          category,
          amount: parseFloat(amountLimit),
          start_date: start_date.toISOString().split("T")[0],
          end_date: end_date.toISOString().split("T")[0],
        });

        setBudgets((prevBudgets) =>
          prevBudgets.map((budget) =>
            budget.id === editBudgetId
              ? {
                ...budget,
                name: category,
                date: new Date(end_date),
                amountLimit: parseFloat(amountLimit),
              }
              : budget
          )
        );

        setIsEditing(false);
        setEditBudgetId(null);
      } else {
        const newBudget = await createBudget({
          user_id: userId,
          category,
          amount: parseFloat(amountLimit),
          start_date: start_date.toISOString().split("T")[0],
          end_date: end_date.toISOString().split("T")[0],
        });

        const { spent } = await calculateBudgetSpent(newBudget.id);

        // Add new budget to the list
        setBudgets((prevBudgets) => [
          ...prevBudgets,
          {
            id: newBudget.id,
            name: newBudget.category,
            date: new Date(newBudget.end_date),
            amount: spent,
            amountLimit: newBudget.amount,
          },
        ]);
      }

      // Reset form
      setCategory("");
      setAmountLimit("");
      setDuration("");
      setSelectedDate(null);
    } catch (error) {
      console.error("Error submitting budget:", error);
    }
  };

  const handleEdit = async (id: string) => {
    const budgetToEdit = budgets.find((budget) => budget.id === id);
    if (budgetToEdit) {
      setCategory(budgetToEdit.name);
      setAmountLimit(budgetToEdit.amountLimit.toString());
      setSelectedDate(budgetToEdit.date);
      setIsEditing(true);
      setEditBudgetId(id);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteBudget(id);
      setBudgets((prevBudgets) => prevBudgets.filter((budget) => budget.id !== id));
    } catch (error) {
      console.error("Error deleting budget:", error);
    }
  };

  return (
    <div className="container">
      <Header />
      <div className="budget">
        <Sidebar />
        <section className="budget__section">
          <form className="budget__form-details" onSubmit={handleSubmit}>
            <h2 className="budget__form-title">
              {isEditing ? "Edit Budget" : "Create New Budget"}
            </h2>
            <div className="budget__dropdown-container">
              <select
                id="category"
                className="budget__dropdown"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              >
                <option value="" disabled hidden>Category</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <DropDownIcon className="budget__dropdown-icon" />
            </div>

            <input
              className="budget__input"
              type="number"
              id="amountLimit"
              value={amountLimit}
              onChange={(e) => setAmountLimit(e.target.value)}
              placeholder="Enter amount limit"
            />

            {isEditing ? (
              <div className="budget__date">
                <DatePicker
                  selected={selectedDate}
                  onChange={(date: Date | null) => setSelectedDate(date)}
                  dateFormat="MM/dd/yyyy"
                  customInput={
                    <div className="budget__custom">
                      <input
                        className="budget__date-input"
                        type="text"
                        value={
                          selectedDate
                            ? selectedDate.toLocaleDateString("en-US")
                            : ""
                        }
                        readOnly
                      />
                      <CalenderIcon className="budget__date-icon" />
                    </div>
                  }
                />
              </div>
            ) : (
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
            )}

            <button type="submit" className="budget__button">
              {isEditing ? "Update Budget" : "Create Budget"}
            </button>
          </form>
          <h2 className="budget__card-header">Your Budgets</h2>
          <CardList
            componentList={budgets}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        </section>
      </div>
    </div>
  );
};

export default BudgetManagement;
