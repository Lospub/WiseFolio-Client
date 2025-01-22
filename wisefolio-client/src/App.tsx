import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Registration from './pages/Registration/Registration';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import ExpenseTracking from './pages/ExpenseTracking/ExpenseTracking';
import BudgetManagement from './pages/BudgetManagement/BudgetManagement';
import SavingsGoals from './pages/SavingsGoals/SavingsGoals';
import Profile from './pages/Profile/Profile';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/expenses" element={<ExpenseTracking />} />
          <Route path="/budgets" element={<BudgetManagement />} />
          <Route path="/savings" element={<SavingsGoals />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
