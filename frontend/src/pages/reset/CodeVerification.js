import { Form, Formik } from "formik";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginInput from "../../components/inputs/loginInput";
import * as Yup from "yup";
import axios from "axios";

const CodeVerification = ({
  code,
  error,
  userInfo,
  setCode,
  setError,
  setVisible,
  setUserInfo,
  setLoading,
}) => {
  const validateCode = Yup.object({
    code: Yup.string()
      .required("Verification code is required")
      .min("5", "Code must be 5 characters.")
      .max("5", "Code must be 5 characters"),
  });
  const { email } = userInfo;
  const handleResetCode = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/validateresetcode`,
        {
          email,
          code,
        }
      );
      // console.log(Object.getOwnPropertyNames(data));
      setUserInfo(data.user);
      setVisible(3);
      setError("");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.response.data.message);
    }
  };
  return (
    <div className="reset_form">
      <div className="reset_form_header">Code Verification</div>
      <div className="reset_form_text">
        Please enter the code that has been sent to your email
      </div>
      <Formik
        enableReinitialize
        initialValues={{
          code,
        }}
        onSubmit={() => handleResetCode()}
        validationSchema={validateCode}
      >
        {(formik) => (
          <Form>
            <LoginInput
              type="text"
              name="code"
              onChange={(e) => setCode(e.target.value)}
              placeholder="Code"
            />
            {error && <div className="error_text">{error}</div>}
            <div className="reset_form_btns">
              <Link to="/login" className="gray_btn">
                Cancel
              </Link>
              <button type="submit" className="blue_btn">
                Continue
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CodeVerification;
