import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../../pages/LoginPage";
import { UserSignupPage } from "../../pages/UserSignupPage";
import { HomePage } from "../../pages/HomePage";
import { AuthenticatedRoutes } from "../AuthenticadedRoutes";
import { AccountFormPage } from "@/pages/AccountFormPage";
import { AccountListPage } from "@/pages/AccountListPage";
import { MovementListPage } from "@/pages/MovementListPage";
import { MovementFormPage } from "@/pages/MovementFormPage";

export function BaseRoutes() {
  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<UserSignupPage />} />

        {/* Protected Routes */}
        <Route element={<AuthenticatedRoutes />}>
            <Route path="/home" element={<HomePage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/accounts" element={<AccountListPage />} />
            <Route path="/accounts/new" element={<AccountFormPage />} />
            <Route path="/accounts/:id" element={<AccountFormPage />} />

            <Route path="/movements" element={<MovementListPage />} />
            <Route path="/movements/new" element={<MovementFormPage />} />
            <Route path="/movements/:id" element={<MovementFormPage />} />
        </Route>

      </Routes>
    </>
  );
}