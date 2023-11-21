import * as Yup from "yup"


export const SignInSchema = Yup.object({
    email: Yup.string().email().required("Please Enter Your email"),
    password: Yup.string().min(4).required("Please enter password"),
})