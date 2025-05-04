import Header from "../../components/Header/Header";
import Sidebar from "../../components/SideBar/SideBar";
import "./Dashboard.scss";

const Dashboard = () => {
  return (
    <div className="container">
      <Header />
      <div className="dashboard">
        <Sidebar />
        <main className="dashboard__main">
          <h2 className="dashboard__title">Dashboard</h2>
          <p className="dashboard__welcome">Welcome back, Alex!</p>

          <section className="dashboard__card dashboard__transactions">
            <h3>Recent Transactions</h3>
            <ul>
              <li className="transaction">
                <div>
                  <span>🛒 Grocery Shopping</span>
                  <p>Today</p>
                </div>
                <span className="amount negative">- $55.20</span>
              </li>
              <li className="transaction">
                <div>
                  <span>⛽ Gas Station</span>
                  <p>Yesterday</p>
                </div>
                <span className="amount negative">- $45.00</span>
              </li>
            </ul>
          </section>

          <section className="dashboard__card dashboard__actions">
            <h3>Quick Actions</h3>
            <div className="actions">
              <button className="btn btn-primary">Track Expenses</button>
              <button className="btn btn-success">Evaluate Goals</button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
