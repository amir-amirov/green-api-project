import { Outlet, Navigate } from "react-router-dom";
import { useApp } from "../store/app";

const ProtectedRoutes = () => {
  const { app } = useApp();
  return app.id && app.phone && app.token ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
