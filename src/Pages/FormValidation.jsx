import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as yup from "yup";
function FormValidation() {
  const defaultValue = {
    name: "",
    email: "",
    password: "",
    gender: "",
    acceptTerms: false,
  };

  const validationSchema = yup.object().shape({
    name: yup.string().required("Please enter your name"),
    email: yup
      .string()
      .required("Please enter your email")
      .email("please enter a valid email"),
    password: yup
      .string()
      .required("Please enter your password")
      .min(6)
      .max(18),
    gender: yup.string().required("Please select your gender"),
    acceptTerms: yup
      .boolean()
      .oneOf([true], "please accept term and conditions"),
  });
  const handleSubmit = (values) => {
    console.log("values", values);
  };
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-6 text-center">
            Form Validation With Formik and Yup
          </h1>
          <Formik
            initialValues={defaultValue}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className="flex flex-col gap-4">
              <Field
                type="text"
                name="name"
                placeholder="Enter your name"
                className="border p-2 rounded"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
              <Field
                type="email"
                name="email"
                placeholder="Enter your email"
                className="border p-2 rounded"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
              <Field
                type="password"
                name="password"
                placeholder="Enter your password"
                className="border p-2 rounded"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
              <Field
                component="select"
                name="gender"
                placeholder="select your gender"
                className="border p-2 rounded"
              >
                <option value="" disabled>
                  Select gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Field>
              <ErrorMessage
                name="gender"
                component="div"
                className="text-red-500 text-sm mt-1"
              />

              <div className="flex items-center">
                <Field
                  type="checkbox"
                  name="acceptTerms"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="acceptTerms"
                  className="ml-2 text-sm text-gray-700"
                >
                  I accept the terms and conditions
                </label>
              </div>
              <ErrorMessage
                name="acceptTerms"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Submit
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
}

export default FormValidation;
