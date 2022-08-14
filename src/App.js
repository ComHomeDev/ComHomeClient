import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Board from "./pages/Board/Board";
import CreatePost from "./components/Post/CreatePost";
import ReadPost from "./components/Post/ReadPost";
import UpdatePost from "./components/Post/UpdatePost";
import MyPage from "./pages/MyPage/MyPage";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />

      <Route path="/userid/:userid" element={<Login />} />
      <Route path="/:board/:sub" element={<Board />} />
      <Route path="/:board/:sub/new" element={<CreatePost />} />
      <Route path="/:board/:sub/update" element={<UpdatePost />} />
      <Route path="/:board/:sub/v/:id" element={<ReadPost />} />
      <Route path="/:userid/mypage" element={<MyPage />} />
    </Routes>
  );
}

export default App;
