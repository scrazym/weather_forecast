import * as Yup from "yup";

const validateNameRegEx = /^[A-Z][\p{L} ,.'-]+$/u;

export const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required")
    .matches(validateNameRegEx, "Invalid Name"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .matches(validateNameRegEx, "Invalid Name")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .required("Required")
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/,
      "min-6,max-12, 1-UpperCase,1-number,1-special"
    ),
});
