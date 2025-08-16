import * as Yup from "yup";

export const contactSchema = Yup.object({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name can't exceed 50 characters")
    .required("Name is required"),

  phone: Yup.string()
    .matches(/^[0-9+() -]+$/, "Invalid phone number format")
    .min(5, "Phone number must be at least 5 characters")
    .max(15, "Phone number can't exceed 15 characters")
    .required("Phone number is required"),

  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),

  occupation: Yup.string()
    .max(100, "Occupation can't exceed 100 characters"),

  message: Yup.string()
    .min(10, "Message must be at least 10 characters")
    .required("Message is required"),
});
