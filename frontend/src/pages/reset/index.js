import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import "./styles.css";
import { useState } from "react";
import axios from "axios";
import LoginInput from "../../components/inputs/loginInput";

const Reset = () => {
  const { user } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    Cookies.set("user", "");
    navigate("/");
  };

  const registerSubmit = async () => {
    try {
    } catch (error) {}
  };
  return (
    <div className="reset">
      <div className="reset_header">
        <img src="../../../icons/facebook.svg" alt="" />
        {user ? (
          <div className="right_reset">
            <Link to="/profile">
              <img src={user.picture} alt="" />
            </Link>
            <button className="blue_btn" onClick={() => logout()}>
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login" className="right_reset">
            <button className="blue_btn">Login</button>
          </Link>
        )}
      </div>
      <div className="reset_wrap">
        <div className="reset_form">
          <div className="reset_form_header">Find Your Account</div>
          <div className="reset_form_text">
            Please enter your email address or mobile number to search for your
            account
          </div>
          <Formik>
            {(formik) => (
              <Form>
                <LoginInput
                  type="text"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address or mobile number"
                />
                {error && <div className="error_text">{error}</div>}
                <div className="reset_form_btns">
                  <Link to="/login" className="gray_btn">
                    Cancel
                  </Link>
                  <button type="submit" className="blue_btn">
                    Search
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Reset;
