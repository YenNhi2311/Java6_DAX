import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./component/Navbar";
import Sidebar from "./component/Sidebar";
import "./assets/style.css";

const MainLayout = () => {
  return (
    <div className="App">
      <Sidebar />
      <section id="content">
        <Navbar />
        <Outlet />
      </section>
    </div>
  );
};

export default MainLayout;
