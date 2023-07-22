import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../container/Dashboard";
import Login from "../container/Login";
import Signup from "../container/SignUpPage";
import ChildDashboard from "../container/ChildDashboard";
import NotFound from "../container/PageNotFound";
import RequireAuth from "./RequireAuth";
import ChangePassword from "../container/ChangePassword";
import AdminScreen from "../container/Admins";

const App = () => {
  return (
    <React.Suspense fallback="Loading...">
      <Routes>
        {/* General Routes With No Auth Required */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify" element={<Signup />} />
        <Route path="/patrons/change-password" element={<ChangePassword />} />

        {/* Master Admin Routes */}
        <Route path="/pages" element={<RequireAuth />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="child-dashboard" element={<ChildDashboard />} />
          <Route path="admins" element={<AdminScreen />} />
        </Route>

        {/* Parent Admin Routes */}
        <Route path="/:version/pages" element={<RequireAuth />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="child-dashboard" element={<ChildDashboard />} />
          <Route path="admins" element={<AdminScreen />} />
        </Route>

        {/* Not Found Routes */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </React.Suspense>
  );
};

export default App;
