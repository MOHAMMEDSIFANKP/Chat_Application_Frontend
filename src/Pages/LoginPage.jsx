import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import bgimage from "../assets/background.jpg";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import {
  ToastError,
  ToastSuccess,
} from "../Components/toastService/toastService";
import axios from "axios";
import { BaseUrl } from "../constants/constants";
import { UserDetails } from "../Service/Services";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { setUserDetails } from "../Redux/UserSlice";
function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [Form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, seterror] = useState({
    email: false,
    password: false,
  });
  //   Validation
  function Validation() {
    if (Form.email.trim() === "") {
      seterror({ ...error, email: true });
      ToastWarning("Email name should be empty");
      return false;
    } else if (!isValidEmail(Form.email.trim())) {
      seterror({ ...error, email: true });
      ToastWarning("Please enter Valid email");
      return false;
    } else if (Form.password.trim() === "") {
      seterror({ ...error, password: true });
      ToastWarning("Password should be empty");
      return false;
    }
    return true;
  }
  function isValidEmail(email) {
    const Regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return Regex.test(email);
  }
  //   Form Submission
  const FormSubmit = async (e) => {
    e.preventDefault();
    if (Validation()) {
      try {
        const response = await axios.post(`${BaseUrl}/auth/token/`, Form);
        if (response.status === 200) {
          const token = JSON.stringify(response.data);
          localStorage.setItem("token", token);
          const decoded = jwtDecode(token);
          ReduxStoring(decoded.user_id);
          ToastSuccess("Login completed successfully!");
          navigate("/", {
            state: { user_id: decoded?.user_id ? decoded?.user_id : null },
          });
        }
      } catch (error) {
        ToastError(error.response.data.detail);
        console.log(error);
      }
    }
  };

  // usedata storing Redux
  const ReduxStoring = async (id) => {
    const res = await UserDetails(id);
    if (res.status === 200) {
      const data = {
        id: res.data.id,
        first_name: res.data.first_name,
        last_name: res.data.last_name,
        email: res.data.email,
        profile_image: res.data.profile_image,
      };
      dispatch(setUserDetails({ UserInfo: data }));
    }
  };
  useEffect(() => {
    document.title = "Login Page";
  }, []);
  return (
    <>
      <div
        className="bg-cover bg-fixed  h-screen flex justify-center items-center"
        style={{
          backgroundImage: `url(${bgimage})`,
        }}
      >
        <Card
          shadow={true}
          className="border bg-opacity-60 px-10 py-20 sm:py-10"
        >
          <Typography variant="h4" color="blue-gray">
            Connect To People{" "}
          </Typography>
          <form
            className="mt-8 mb-2 w-full max-w-screen-lg sm:w-96"
            onSubmit={FormSubmit}
          >
            <div className="mb-1 flex flex-col gap-6">
              <div>
                <Input
                  variant="standard"
                  label="Email"
                  error={error.email ? error : ""}
                  onChange={(e) => {
                    setForm({ ...Form, email: e.target.value });
                    seterror({ ...error, email: false });
                  }}
                />
                {error.email && (
                  <p className="text-sm text-red-400  italic">
                    email field is requred
                  </p>
                )}
              </div>
              <div>
                <Input
                  type="password"
                  variant="standard"
                  label="Password"
                  error={error.password ? error : ""}
                  onChange={(e) => {
                    setForm({ ...Form, password: e.target.value });
                    seterror({ ...error, password: false });
                    
                  }}
                />
                {error.password && (
                  <p className="text-sm text-red-400  italic">
                    password field is requred
                  </p>
                )}
              </div>
            </div>

            <div className="flex justify-center mt-8 items-center">
              <button className="font-bold text border border-gray-600 rounded-full px-4 py-1">
                Login
              </button>
            </div>
            <Typography color="gray" className="mt-4 text-center font-normal">
              Don't have an account?
              <Link
                to="/register"
                href="#"
                className="font-medium text-gray-900"
              >
                Sign Up
              </Link>
            </Typography>
          </form>
        </Card>
      </div>
    </>
  );
}

export default LoginPage;
