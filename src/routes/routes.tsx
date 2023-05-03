import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { RegisterPage } from "../pages/RegisterPage";
import { DashboardPage } from "../pages/DashboardPage";
import { LoginPage } from "../pages/loginPage";
import { ProtectedRoutes } from "./protectedRoutes";
import { UserProvider } from "../providers/userContext";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<ProtectedRoutes />} />
      <Route path="/dashboard" element={<ProtectedRoutes />}>
        <Route
          path="/dashboard"
          element={
            <UserProvider>
              <DashboardPage />
            </UserProvider>
          }
        />
      </Route>
    </Routes>
  );
};

export default Router;
