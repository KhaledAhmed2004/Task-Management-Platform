import Navbar from "../components/navbar/Navbar";
import Completed from "../pages/Completed";
import Ongoing from "../pages/Ongoing";
import Todo from "../pages/Todo";

const DashboardLayout = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <div className="flex pt-5 gap-5">
        <Todo></Todo>
        <Ongoing></Ongoing>
        <Completed></Completed>
      </div>
    </div>
  );
};

export default DashboardLayout;
