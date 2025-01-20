import Header from "../../components/Header/Header";
import Sidebar from "../../components/SideBar/SideBar";
import "./Dashboard.scss";

const Dashboard = () => {
  return (
    <div className="container">
      <Header />
      <div className="dashboard">
        <Sidebar />
        <h1>Dashboard</h1>
      </div>
    </div>
  );
};

export default Dashboard;
