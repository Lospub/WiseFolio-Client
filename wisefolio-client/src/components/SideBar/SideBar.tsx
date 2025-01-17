import DashboardIcon from "../../assets/icons/dashboard.svg?react";
import ExpenseIcon from "../../assets/icons/expense-side.svg?react";
import BudgetIcon from "../../assets/icons/budget-side.svg?react";
import SavingIcon from "../../assets/icons/saving-side.svg?react";
import './Sidebar.scss';
import { NavLink } from "react-router-dom";

interface MenuItem {
  icon: React.ReactElement;
  label: string;
  path: string;
}

const Sidebar = () => {
  const menuItems: MenuItem[] = [
    { icon: <DashboardIcon />, label: 'Dashboard', path: '/dashboard' },
    { icon: <ExpenseIcon />, label: 'Expense Tracking', path: '/expenses' },
    { icon: <BudgetIcon />, label: 'Budget Management', path: '/budget' },
    { icon: <SavingIcon />, label: 'Saving Goals', path: '/savings' },
  ];

  return (
    <div className="sidebar">
      <ul className="sidebar__menu">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="sidebar__item"
          >
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `sidebar__link ${isActive ? 'sidebar__link--active' : ''}`}>
              <span className="sidebar__icon">{item.icon}</span>
              <span className="sidebar__label">{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
