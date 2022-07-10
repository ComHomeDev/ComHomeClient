import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Home2 from "./pages/Home/Home2";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/2" element={<Home2 />} />
    </Routes>
  );
}

export default App;
