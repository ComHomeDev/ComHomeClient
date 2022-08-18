import "./App.css";
import { Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Board from "./pages/Board/Board";
import CreatePost from "./components/Post/CreatePost";
import ReadPost from "./components/Post/ReadPost";
import UpdatePost from "./components/Post/UpdatePost";
import MyPage from "./pages/MyPage/MyPage";
import Chat from "./pages/Chat/Chat";
import Temp from "./components/Post/Temp";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route path="/userid/:userid" element={<Login />} />
        <Route path="/chat/bubble/c/:id" element={<Chat />} />
        <Route
          exact
          path="/studentcouncil/student_council_notice/v1/11"
          element={<Temp />}
        />
        <Route path="/:board/:sub" element={<Board />} />
        <Route path="/:board/:sub/new" element={<CreatePost />} />
        <Route path="/:board/:sub/update" element={<UpdatePost />} />
        <Route path="/:board/:sub/v/:id" element={<ReadPost />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
