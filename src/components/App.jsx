import React from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Home } from "pages/Home";
import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../pages/Login";
import { refreshUser } from "../redux/auth/operations";
import { Layout } from "./Layout";
import { RestrictedRoute } from "./RestrictedRoutes";
import { PrivateRoute } from "./PrivatRoutes";
import { Register } from "pages/Register";
import { Contacts } from "pages/Contacts";
import { useAuth } from "../hooks/AuthHook";


//const Home = lazy(() => import('../pages/Home'));
//const Register = lazy(() => import('../pages/Register'));
//const LoginPage = lazy(() => import('../pages/Login'));
//const Contacts = lazy(() => import('../pages/Contacts'));



export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Register />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
      </Route>
    </Routes>
    
    );
};