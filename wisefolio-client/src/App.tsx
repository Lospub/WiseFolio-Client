import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Registration from './pages/Registration';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ExpenseTracking from './pages/ExpenseTracking';
import BudgetManagement from './pages/BudgetManagement';
import SavingsGoals from './pages/SavingsGoals';
import Profile from './pages/Profile';

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
          <Route path="/goals" element={<SavingsGoals />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
