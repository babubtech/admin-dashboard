import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { AppRoutes } from "./routes";
import PrivateRouter from "./privateRouter";

import {
  NotFound,
  Home,
  Login,
  Dashboard,
  Users
} from './../screens';

const RouterApp = (props) => {
  
  return (
    <BrowserRouter>
      <Routes>

        {/* Home Route */}
        <Route path={AppRoutes.home} element={
          <PrivateRouter path={AppRoutes.dashboard}>
            {/* <Home /> */}
            <Dashboard />
          </PrivateRouter>
        } />

        {/* Dashboard Route */}
        <Route path={AppRoutes.dashboard} element={
          <PrivateRouter path={AppRoutes.dashboard}>
            <Dashboard />
          </PrivateRouter>
        } />

        {/* users Route */}
        <Route path={AppRoutes.users} element={
          <PrivateRouter path={AppRoutes.users}>
            <Users />
          </PrivateRouter>
        } />

        {/* Login Route */}
        <Route path={AppRoutes.login} element={<Login />} />

        {/* For unknow/non-defined path */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterApp;
