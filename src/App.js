import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Home2 from "./pages/Home/Home2";
import Community from "./pages/Community/Community";
import CreatePost from "./components/Post/CreatePost";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route exact path="/" element={<Home />} />
      <Route path="/2" element={<Home2 />} />
      <Route path="/community/:sub" element={<Community />} />
      <Route path="/community/:sub/:post" element={<Community />} />
      <Route path="/:menu/new" element={<CreatePost />} />
    </Routes>
  );
}

export default App;
