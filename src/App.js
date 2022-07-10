import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import DepartmentNotice from "./pages/Department/DepartmentNotice";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/DepartmentNotice" element={<DepartmentNotice />} />
    </Routes>
  );
}

export default App;
