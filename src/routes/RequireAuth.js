import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { getAllCountries, getUserData, refreshToken } from "../api/services";
import { getCountrySliceAction } from "../redux/slices";
import { masterUserSliceAction } from "../redux/slices/auth/authSlice";

const RequireAuth = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const expiry = +localStorage.getItem("EXPIRED_AT");
  const currentTime = Math.floor(new Date().getTime() / 1000);
  const refresh_session = localStorage.getItem("session_expired");
  const refresh_token = localStorage.getItem("refresh_token");

  // useEffect(() => {
  //   if (token && refresh_session > new Date().getTime()) {
  //     getUserData(token).then((res) => {
  //       dispatch(masterUserSliceAction.setMasterUserData(res?.data));
  //     });
  //     getAllCountries().then((res) => {
  //       dispatch(getCountrySliceAction.setCountries(res?.data));
  //     });
  //   } else if (token) {
  //     let payload = {
  //       refresh_token: refresh_token
  //     };
  //     refreshToken(payload).then((res) => {
  //       localStorage.setItem("cognito_id_token", res?.cognito_id_token);
  //       localStorage.setItem("session_expired", new Date().getTime() + 24 * 60 * 60 * 1000);
  //     });
  //   }
  // }, [token]);

  let message = "";

  if (expiry && currentTime > expiry) {
    localStorage.clear();
    localStorage.setItem("message", "Token Expired");
  }

  if (message || !token) {
    return <Navigate to="/" state={{ from: location, message }} replace />;
  }
  return <Outlet />;
};

export default RequireAuth;
