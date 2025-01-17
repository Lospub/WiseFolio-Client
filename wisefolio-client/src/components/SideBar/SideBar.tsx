import DashboardIcon from "../../assets/icons/dashboard.svg?react";
import ExpenseIcon from "../../assets/icons/expense-side.svg?react";
import BudgetIcon from "../../assets/icons/budget-side.svg?react";
import SavingIcon from "../../assets/icons/saving-side.svg?react";
import './Sidebar.scss';

interface MenuItem {
  icon: React.ReactElement;
  label: string;
  active?: boolean;
}

const Sidebar = () => {
  const menuItems: MenuItem[] = [
    { icon: <DashboardIcon />, label: 'Dashboard', active: true },
    { icon: <ExpenseIcon />, label: 'Expense Tracking' },
    { icon: <BudgetIcon />, label: 'Budget Management' },
    { icon: <SavingIcon />, label: 'Savings Goals' },
  ];

  return (
    <div className="sidebar">
      <ul className="sidebar__menu">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`sidebar__item ${item.active ? 'sidebar__item--active' : ''}`}
          >
            <span className="sidebar__icon">{item.icon}</span>
            <span className="sidebar__label">{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
