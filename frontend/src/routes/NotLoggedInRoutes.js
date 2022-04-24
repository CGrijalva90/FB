import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Login from "../pages/login";

export default function NotLoggedInRoutes() {
  const { user } = useSelector((state) => ({ ...state }));
  return user ? <Navigate to="/" /> : <Login />;
}
