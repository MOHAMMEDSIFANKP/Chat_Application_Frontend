import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Protected from "./ProtectedRoutes/Protected";
import PrivateRoutes from "./ProtectedRoutes/PrivateRoutes";
import Homepage from "./Pages/Homepage";
import ChatComponents from "./Components/ChatComponents/ChatComponents";
import PeopleListComponents from "./Components/PeopleList/PeopleList";
import Settings from "./Components/Settings/Settings";
import UserProfile from "./Components/Profile/UserProfile";
function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route element={<PrivateRoutes/>}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>

        <Route element ={<Protected/>}>
          <Route path="/" element={<Homepage />} >
          <Route path="/" element={<ChatComponents />} />
          <Route path="/users" element={<PeopleListComponents />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/settings" element={<Settings />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
