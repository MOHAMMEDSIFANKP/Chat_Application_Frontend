import React, { useEffect, useRef, useState } from "react";
import bgimage from "../assets/background.jpg";
import { Card, Input, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  ToastError,
  ToastSuccess,
  ToastWarning,
} from "../Components/Toast/Toast";
import { BaseUrl } from "../constants/constants";
import { useNavigate } from "react-router-dom";

import './LoginPage.css'
// Google authendication
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';

// Formic
import { useFormik } from 'formik';
import { RegisterSchema } from "../Formik/Validations";
import { UserDetails } from "../Service/Services";
import { useDispatch } from "react-redux";
import { setUserDetails } from "../Redux/UserSlice";
import { jwtDecode } from "jwt-decode";
function RegisterPage() {
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const [isGoogle, setIsGoogle] = useState(false)
  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    password: ""
  }
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleSubmit,
    handleChange,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: RegisterSchema,
    onSubmit: (values, { setSubmitting }) => {
      RegisterhandleSubmitForm(values, setSubmitting);
    },
  });

  const RegisterhandleSubmitForm = async (values, setSubmitting) => {
    try {

      if (!isGoogle) {
        const response = await axios.post(`${BaseUrl}/auth/registration/`, values);
        if (response.status === 201) {
          ToastSuccess('Registration completed successfully!');
          navigate("/login");
        }
      }else {
        const response = await axios.post(`${BaseUrl}/auth/googeregister/`, values);
        if (response.status === 201) {
          setIsGoogle(false)
          console.log(response,'google');
          const token = JSON.stringify(response.data.token);
          localStorage.setItem("token", token);
          const decoded = jwtDecode(token);
          ReduxStoring(decoded.user_id);
          ToastSuccess(response.data?.msg || 'Registration compleated');
          navigate("/", {
            state: { user_id: decoded?.user_id ? decoded?.user_id : null },
          });
        }
      }
      
    } catch (error) {
      setIsGoogle(false)
      console.log(error);
      ToastError(error.response?.data?.email[0] || 'An error occurred');
    } finally {
      setSubmitting(false);
    }
  };
  // Google Login Function
  const [guser, setgUser] = useState([]);
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setgUser(codeResponse),
    onError: (error) => console.log('Login Failed:', error)
  });

  useEffect(() => {
    if (guser && guser.access_token) {
      axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${guser.access_token}`)
        .then((res) => {
          RegisterhandleSubmitForm({first_name: res.data.given_name, last_name: res.data.family_name, profile_image: res.data.picture, email: res.data.email, password: res.data.id })
        })
        .catch((err) => {
          setIsGoogle(false);
        });
    }
  }, [guser, login]);
  


  // usedata storing Redux
  const ReduxStoring = async (id) => {
    try {
      const res = await UserDetails(id);
    if (res.status === 200) {
      const data = {
        id: res.data.id,
        first_name: res.data.first_name,
        last_name: res.data.last_name,
        email: res.data.email,
        profile_image: res.data.profile_image,
        state: res.data.state,
        district: res.data.district,
        place: res.data.place,
        bio: res.data.bio,
        is_google : res.data?.is_google,
      };
      dispatch(setUserDetails({ UserInfo: data }));
    }
    } catch (error) {
      console.log(error);
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
          <div className='mt-8 mb-3 w-full'>
            <button className="gsi-material-button w-full" onClick={()=>{login(),setIsGoogle(true)}}>
              <div className="gsi-material-button-state"></div>
              <div className="gsi-material-button-content-wrapper">
                <div className="gsi-material-button-icon">
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" xmlnsXlink="http://www.w3.org/1999/xlink" style={{ display: 'block' }}>
                    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                    <path fill="none" d="M0 0h48v48H0z"></path>
                  </svg>
                </div>
                <span className="gsi-material-button-contents">Sign in with Google</span>
                <span style={{ display: 'none' }}>Sign in with Google</span>
              </div>
            </button>
          </div>
          <div className='flex justify-center items-center w-full'>
            <hr className='w-full border-t-2 border-gray-300' />
            <p className='mx-4'>or</p>
            <hr className='w-full border-t-2 border-gray-300' />
          </div>
          <form
            className="mt-3 mb-2 w-full max-w-screen-lg sm:w-96"
            onSubmit={handleSubmit}
          >
            <div className="mb-1 flex flex-col gap-6">
              <div>
                <Input
                  autoFocus={true}
                  variant="standard"
                  label="First Name"
                  name="first_name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.first_name}
                />
                {touched.first_name && errors.first_name && (
                  <div className="text-red-500 text-sm ">{errors.first_name}</div>
                )}
              </div>
              <div>
                <Input
                  variant="standard"
                  label="Last Name"
                  name="last_name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.last_name}
                />
                {touched.last_name && errors.last_name && (
                  <div className="text-red-500 text-sm ">{errors.last_name}</div>
                )}
              </div>
              <div>
                <Input
                  variant="standard"
                  label="Email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {touched.email && errors.email && (
                  <div className="text-red-500 text-sm ">{errors.email}</div>
                )}
              </div>
              <div>
                <Input
                  type="password"
                  variant="standard"
                  label="Password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                {touched.password && errors.password && (
                  <div className="text-red-500 text-sm ">{errors.password}</div>
                )}
              </div>
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
