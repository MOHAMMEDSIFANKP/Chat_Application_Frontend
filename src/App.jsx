import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ChattingPage from "./Pages/ChattingPage";
import Protected from "./ProtectedRoutes/Protected";
import PrivateRoutes from "./ProtectedRoutes/PrivateRoutes";
import ChatPage from "./Pages/ChatPage";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route element={<PrivateRoutes/>}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/chat" element={<ChatPage />} />
        </Route>

        <Route element  ={<Protected/>}>
          <Route path="/" element={<ChattingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
