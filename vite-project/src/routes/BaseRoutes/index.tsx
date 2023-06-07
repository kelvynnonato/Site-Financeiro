import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../../pages/LoginPage";
import { UserSignupPage } from "../../pages/UserSignupPage";
import { AccountListPage } from "../../pages/AccountListPage";
import { HomePage } from "../../pages/HomePage";
import { AuthenticatedRoutes } from "../AuthenticadedRoutes";
import { AccountFormPage } from "@/pages/AccountFormPage";
import { ProductListPage } from "@/pages/ProductListPage";
import { ProductFormPage } from "@/pages/ProductFormPage";
import { ProductListPageV2 } from "@/pages/ProductListPageV2";
import { ProductFormPageV2 } from "@/pages/ProductFormPageV2";
import { AccountFormPageTest } from "@/pages/AccountFormPageTest";

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
            <Route path="/accounts/new" element={<AccountFormPageTest />} />
            <Route path="/accounts/:id" element={<AccountFormPageTest />} />

            <Route path="/products" element={<ProductListPage />} />
            <Route path="/products/new" element={<ProductFormPage />} />
            <Route path="/products/:id" element={<ProductFormPage />} />

            <Route path="/products-v2" element={<ProductListPageV2 />} />
            <Route path="/products-v2/new" element={<ProductFormPageV2 />} />
            <Route path="/products-v2/:id" element={<ProductFormPageV2 />} />
        </Route>

      </Routes>
    </>
  );
}