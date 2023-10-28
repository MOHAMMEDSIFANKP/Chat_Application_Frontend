import React, { useEffect, useRef, useState } from "react";
import bgimage from "../assets/background.jpg";
import { Card, Input, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  ToastError,
  ToastSuccess,
  ToastWarning,
} from "../Components/toastService/toastService";
import { BaseUrl } from "../constants/constants";
import { useNavigate } from "react-router-dom";
function RegisterPage() {
  const navigate = useNavigate()
  const [Form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });
  const [error, seterror] = useState({
    first_name: false,
    last_name: false,
    email: false,
    password: false,
  });
  //   Validation
  function Validation() {
    if (Form.first_name.trim() === "") {
      seterror({ ...error, first_name: true });
      ToastWarning("First name should be empty");
      return false;
    } else if (Form.last_name.trim() === "") {
      seterror({ ...error, last_name: true });
      ToastWarning("Last name should be empty");
      return false;
    } else if (Form.email.trim() === "") {
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
        const response = await axios.post(`${BaseUrl}/auth/registration/`, Form);
          if (response.status === 201){
            ToastSuccess("Registration completed successfully!");
            navigate('/login')
          }
      } catch (error) {
        if (error.response.data){
          ToastError(error.response.data.email[0])
        }else{
          console.log(error);
        }
      }
    }
  };
  useEffect(() => {
    document.title = "Register Page";
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
            Create a Connection
          </Typography>
          <form
            className="mt-8 mb-2 w-full max-w-screen-lg sm:w-96"
            onSubmit={FormSubmit}
          >
            <div className="mb-1 flex flex-col gap-6">
              <Input
                autoFocus={true}
                variant="standard"
                label="First Name"
                error={error.first_name ? error : ""}
                onChange={(e) => {
                  setForm({ ...Form, first_name: e.target.value });
                  seterror({ ...error, first_name: false });
                }}
              />
              <Input
                variant="standard"
                label="Last Name"
                error={error.last_name ? error : ""}
                onChange={(e) => {
                  setForm({ ...Form, last_name: e.target.value });
                  seterror({ ...error, last_name: false });
                }}
              />
              <Input
                variant="standard"
                label="Email"
                error={error.email ? error : ""}
                onChange={(e) => {
                  setForm({ ...Form, email: e.target.value });
                  seterror({ ...error, email: false });
                }}
              />
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
            </div>
            <div className="flex justify-center mt-8 items-center">
              <button
                type="submit"
                className="font-bold text border border-gray-600 rounded-full px-4 py-1"
              >
                Sign Up
              </button>
            </div>
            <Typography color="gray" className="mt-4 text-center font-normal">
              Already have an account?{" "}
              <Link to="/login" className="font-medium text-gray-900">
                Sign In
              </Link>
            </Typography>
          </form>
        </Card>
      </div>
    </>
  );
}

export default RegisterPage;
