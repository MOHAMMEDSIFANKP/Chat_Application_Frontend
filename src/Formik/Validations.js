import * as Yup from "yup";

export const LoginSchema = Yup.object({
  email: Yup.string().trim().email().required("Please enter your email id"),
  password: Yup.string().trim().min(4).required("Please enter password"),
});

export const RegisterSchema = Yup.object({
  first_name: Yup.string().trim().min(4).required("Please enter first_name"),
  last_name: Yup.string().trim().min(2).required("Please enter last_name"),
  email: Yup.string().trim().email().required("Please enter your email id"),
  password: Yup.string().trim().min(4).required("Please enter password"),
});
