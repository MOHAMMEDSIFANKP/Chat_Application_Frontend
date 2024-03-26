import * as Yup from "yup";

export const LoginSchema = Yup.object({
  email: Yup.string().trim().email().required("Please enter your email id"),
  password: Yup.string().trim().min(4).required("Please enter password"),
});

export const RegisterSchema = Yup.object({
  first_name: Yup.string().trim().min(4).required("Please enter first name"),
  last_name: Yup.string().trim().min(2).required("Please enter last name"),
  email: Yup.string().trim().email().required("Please enter your email id"),
  password: Yup.string().trim().min(4).required("Please enter password"),
});

export const EditUserProfileSchema = Yup.object({
  first_name: Yup.string().trim().min(4).required("Please enter first name"),
  last_name: Yup.string().trim().min(2).required("Please enter last name"),
  district: Yup.string().trim().min(4).required("Please enter your country"),
  state: Yup.string().trim().min(4).required("Please enter your state"),
  place: Yup.string().trim().min(4).required("Please enter your place"),
  bio: Yup.string().trim().min(4, "Bio must be at least 4 characters long").test(
    'word-count',
    'Bio must not exceed 40 words',
    value => {
      if (!value) return true; 
      const wordCount = value.trim().split(/\s+/).length;
      return wordCount <= 40;
    }
  ).required("Please enter your bio"),
});

export const ResetpasswordSchema = Yup.object({
  new_password: Yup.string().trim().min(4).required("Please enter new password"),
  old_password: Yup.string().trim().min(4).required("Please enter old password"),
});