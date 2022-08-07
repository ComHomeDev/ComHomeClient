import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Home2 from "./pages/Home/Home2";
import Notice from "./pages/Notice/Notice";
import Bachelor from "./pages/Bachelor/Bachelor";
import StudentCouncil from "./pages/StudentCouncil/StudentCouncil";
import StudentActivity from "./pages/StudentActivity/StudentActivity";
import Community from "./pages/Community/Community";
import CreatePost from "./components/Post/CreatePost";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route exact path="/" element={<Home />} />
      <Route path="/2" element={<Home2 />} />
      <Route path="/notice/:sub" element={<Notice />} />
      <Route path="/notice/:sub/:post" element={<Notice />} />
      <Route path="/bachelor/:sub" element={<Bachelor />} />
      <Route path="/studentcouncil/:sub" element={<StudentCouncil />} />
      <Route path="/studentcouncil/:sub/:post" element={<StudentCouncil />} />
      <Route path="/student/:sub" element={<StudentActivity />} />
      <Route path="/community/:sub" element={<Community />} />
      <Route path="/community/:sub/:post" element={<Community />} />
      <Route path="/:menu/new" element={<CreatePost />} />
    </Routes>
  );
}

export default App;
