import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "app/login/Login";
import { Products } from "app/products/Products";

import { AppRoute } from "./AppRoute.enum";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={AppRoute.Home} element={<Products />} />
      <Route path={AppRoute.Login} element={<Login />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
