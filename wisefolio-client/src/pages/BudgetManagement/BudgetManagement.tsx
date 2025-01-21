import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/SideBar/SideBar";
import DropDownIcon from "../../assets/icons/dropdown.svg?react";
import "./BudgetManagement.scss";
import CardList from "../../components/CardList/CardList";
import { calculateBudgetSpent, createBudget, getBudgetsByUserId } from "../../api/budgetServer";


const BudgetManagement = () => {
  const [category, setCategory] = useState("");
  const [amountLimit, setAmountLimit] = useState("");
  const [duration, setDuration] = useState("");
  const [budgets, setBudgets] = useState<Budget[]>([]);


  type Budget = {
    name: string;
    date: Date;
    amount: number;
    amountLimit: number;
  };

  const userId = localStorage.getItem("UserID");
  if (!userId) {
    throw new Error("userID is null");
  }
  
  // Fetch budgets on component mount
  useEffect(() => {
    const fetchBudgets = async () => {
      try {

        const fetchedBudgets = await getBudgetsByUserId(userId.toString());

        // Fetch spent amount for each budget
        const budgetsWithSpent = await Promise.all(
          fetchedBudgets.map(async (budget: any) => {
            const { spent } = await calculateBudgetSpent(budget.id);
            return {
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
  }, []);

  // Handle form submission
  const handleCreateBudget = async (e: React.FormEvent) => {
    e.preventDefault();

    const start_date = new Date();
    let end_date;

    // Calculate end date based on duration
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

    try {
      const newBudget = await createBudget({
        user_id: userId,
        category: category,
        amount: parseFloat(amountLimit),
        start_date: start_date.toISOString().split("T")[0],
        end_date: end_date.toISOString().split("T")[0],
      });

      const { spent } = await calculateBudgetSpent(newBudget.id);

      // Add new budget to the list
      setBudgets((prevBudgets) => [
        ...prevBudgets,
        {
          name: newBudget.category, 
          date: new Date(newBudget.end_date), 
          amount: spent, 
          amountLimit: newBudget.amount, 
        },
      ]);

      // Reset form
      setCategory("");
      setAmountLimit("");
      setDuration("");
    } catch (error) {
      console.error("Error creating budget:", error);
    }
  };

  return (
    <div className="container">
      <Header />
      <div className="budget">
        <Sidebar />
        <section className="budget__section">
          <form className="budget__form-details" onSubmit={handleCreateBudget}>
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
              id="amountLimit"
              value={amountLimit}
              onChange={(e) => setAmountLimit(e.target.value)}
              placeholder="Enter amount limit"
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
