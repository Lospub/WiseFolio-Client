import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/SideBar/SideBar";

const BudgetManagement = () => {
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [duration, setDuration] = useState("");

  return (
    <div className="container">
      <Header />
      <div className="budget">
        <Sidebar />
        <section className="budget-section">

        </section>
      </div>
      <Footer />
    </div>
  );
};

export default BudgetManagement;
