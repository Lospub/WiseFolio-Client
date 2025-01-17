import DashboardIcon from "../../assets/icons/dashboard.svg?react";
import ExpenseIcon from "../../assets/icons/expense-side.svg?react";
import BudgetIcon from "../../assets/icons/budget-side.svg?react";
import SavingIcon from "../../assets/icons/saving-side.svg?react";
import './Sidebar.scss';

const Sidebar = () => {


  return (
    <div className="sidebar">
      <ul className="sidebar__menu">
      <li className="sidebar__item sidebar__item--active">
          <DashboardIcon />
          Dashboard
        </li>
        <li className="sidebar__item">
          <ExpenseIcon />
          Expense Tracking
        </li>
        <li className="sidebar__item">
          <BudgetIcon />
          Budget Management
        </li>
        <li className="sidebar__item">
          <SavingIcon />
          Savings Goals
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
