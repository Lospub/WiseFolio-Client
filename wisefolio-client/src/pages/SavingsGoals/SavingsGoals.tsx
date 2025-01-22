import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/SideBar/SideBar";
import CalenderIcon from "../../assets/icons/calendar.svg?react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./SavingsGoals.scss";
import CardList from "../../components/CardList/CardList";
import { calculateSavedAmount, createSaving, deleteSaving, getSavingsByUserId, updateSaving } from "../../api/savingServer";
import { createCategory, updateCategory, deleteCategory, } from "../../api/categoryServer";

const SavingsGoals = () => {
  const [goalName, setGoalName] = useState("");
  const [goalAmount, setGoalAmount] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [savings, setSavings] = useState<Saving[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editSavingId, setEditSavingId] = useState<string | null>(null);

  type Saving = {
    id: string;
    name: string;
    date: Date;
    amount: number;
    amountLimit: number;
  };

  const userId = localStorage.getItem("UserID");
  if (!userId) {
    throw new Error("UserID is null");
  }

  useEffect(() => {
    const fetchSavings = async () => {
      try {
        const fetchedSavings = await getSavingsByUserId(userId.toString());
        console.log(fetchedSavings);
        const savingsWithAmounts = await Promise.all(
          fetchedSavings.map(async (saving: any) => {
            const { saved } = await calculateSavedAmount(saving.id);
            console.log(saved);
            return {
              id: saving.id,
              name: saving.description,
              date: new Date(saving.end_date),
              amount: saved,
              amountLimit: saving.amount,
            };
          })
        );
        setSavings(savingsWithAmounts);
        console.log(savingsWithAmounts);
      } catch (error) {
        console.error("Error fetching savings:", error);
      }
    };
    fetchSavings();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const end_date = selectedDate;

    if (!end_date) {
      console.error("End date is required");
      return;
    }

    try {
      if (isEditing && editSavingId) {
        await updateSaving(editSavingId, {
          description: goalName,
          amount: parseFloat(goalAmount),
          end_date: end_date.toISOString().split("T")[0],
        });

        await updateCategory(editSavingId, `Saving Goal: ${goalName}`);

        setSavings((prevSavings) =>
          prevSavings.map((saving) =>
            saving.id === editSavingId
              ? {
                ...saving,
                name: goalName,
                date: end_date,
                amountLimit: parseFloat(goalAmount),
              }
              : saving
          )
        );

        setIsEditing(false);
        setEditSavingId(null);
      } else {
        const newSaving = await createSaving({
          user_id: userId,
          description: goalName,
          amount: parseFloat(goalAmount),
          end_date: end_date.toISOString().split("T")[0],
        });

        await createCategory({ id: newSaving.id, name: `Saving Goal: ${goalName}` });

        const { saved } = await calculateSavedAmount(newSaving.id);

        setSavings((prevSavings) => [
          ...prevSavings,
          {
            id: newSaving.id,
            name: newSaving.description,
            date: new Date(newSaving.end_date),
            amount: saved,
            amountLimit: newSaving.amount,
          },
        ]);
      }

      // Reset form
      setGoalName("");
      setGoalAmount("");
      setSelectedDate(new Date());
    } catch (error) {
      console.error("Error submitting savings goal:", error);
    }
  };

  const handleEdit = (id: string) => {
    const savingToEdit = savings.find((saving) => saving.id === id);
    if (savingToEdit) {
      setGoalName(savingToEdit.name);
      setGoalAmount(savingToEdit.amountLimit.toString());
      setSelectedDate(savingToEdit.date);
      setIsEditing(true);
      setEditSavingId(id);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteSaving(id);
      await deleteCategory(id);
      setSavings((prevSavings) => prevSavings.filter((saving) => saving.id !== id));
    } catch (error) {
      console.error("Error deleting savings goal:", error);
    }
  };

  return (
    <div className="container">
      <Header />
      <div className="savings">
        <Sidebar />
        <section className="savings__section">
          <form className="savings__form-details" onSubmit={handleSubmit}>
            <h2 className="savings__form-title">
              {isEditing ? "Edit Savings Goal" : "Create New Savings Goal"}
            </h2>
            <input
              className="savings__input"
              type="text"
              value={goalName}
              onChange={(e) => setGoalName(e.target.value)}
              placeholder="Goal Name"
              required
            />
            <input
              className="savings__input"
              type="number"
              value={goalAmount}
              onChange={(e) => setGoalAmount(e.target.value)}
              placeholder="Goal Amount"
              required
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
            <button type="submit" className="savings__button">
              {isEditing ? "Update Goal" : "Create Goal"}
            </button>
          </form>
          <h2 className="savings__card-header">Your Savings Goals</h2>
          <CardList
            componentList={savings}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        </section>
      </div>
    </div>
  );
};

export default SavingsGoals;
