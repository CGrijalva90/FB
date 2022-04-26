import { Form, Formik } from "formik";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginInput from "../../components/inputs/loginInput";

const ChangePassword = ({
  password,
  setPassword,
  confirmedPassword,
  setConfirmedPassword,
  error,
}) => {
  return (
    <div className="reset_form" style={{ height: "310px" }}>
      <div className="reset_form_header">Change Password</div>
      <div className="reset_form_text">Create a new password</div>
      <Formik
        enableReinitialize
        initialValues={{
          password,
        }}
      >
        {(formik) => (
          <Form>
            <LoginInput
              type="text"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="New Password"
            />
            <LoginInput
              type="text"
              name="confirmPassword"
              onChange={(e) => setConfirmedPassword(e.target.value)}
              placeholder="Confirm new Password"
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

export default ChangePassword;
