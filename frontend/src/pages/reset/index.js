import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./styles.css";
import { useState } from "react";
import SearchAccount from "./SearchAccount";
import SendEmail from "./SendEmail";
import CodeVerification from "./CodeVerification";
import Footer from "../../components/login/Footer";
import ChangePassword from "./ChangePassword";
const Reset = () => {
  const { user } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [visible, setVisible] = useState(0);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userInfo, setUserInfo] = useState("");

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    Cookies.set("user", "");
    navigate("/");
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
        {visible === 0 && (
          <SearchAccount
            email={email}
            setEmail={setEmail}
            error={error}
            setError={setError}
            setLoading={setLoading}
            setUserInfo={setUserInfo}
            setVisible={setVisible}
          />
        )}
        {visible === 1 && userInfo && (
          <SendEmail
            userInfo={userInfo}
            email={email}
            error={error}
            setError={setError}
            setLoading={setLoading}
            setVisible={setVisible}
            loading={loading}
          />
        )}
        {visible === 2 && (
          <CodeVerification
            code={code}
            error={error}
            email={email}
            userInfo={userInfo}
            setUserInfo={setUserInfo}
            setCode={setCode}
            setError={setError}
            setLoading={setLoading}
            setVisible={setVisible}
          />
        )}
        {visible === 3 && (
          <ChangePassword
            password={password}
            confirmPassword={confirmPassword}
            userInfo={userInfo}
            error={error}
            setPassword={setPassword}
            setConfirmPassword={setConfirmPassword}
            setError={setError}
            setLoading={setLoading}
          />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Reset;
