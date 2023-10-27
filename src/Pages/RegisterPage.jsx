import React, { useState } from 'react'
import bgimage from "../assets/background.jpg";
import {
  Card,
  Input,
  Typography,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';
function RegisterPage() {
  return (
    <>
    <div
      className="bg-cover bg-fixed  h-screen flex justify-center items-center"
      style={{
        backgroundImage: `url(${bgimage})`,
      }}
    >
      <Card  shadow={true} className="border bg-opacity-60 px-10 py-20 sm:py-10">
        <Typography variant="h4" color="blue-gray">
        Create a Connection
        </Typography>
        <form className="mt-8 mb-2 w-full max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
          <Input variant="standard" label="First Name" />
          <Input variant="standard" label="Last Name" />
            <Input variant="standard" label="Email" />
            <Input variant="standard" label="Password" />
          </div>
         <div className="flex justify-center mt-8 items-center">
          <button className="font-bold text border border-gray-600 rounded-full px-4 py-1">
            Login
          </button>
         </div>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <Link to='/login' className="font-medium text-gray-900">
              Sign In
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  </>
  )
}

export default RegisterPage