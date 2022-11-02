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
  Dashboard
} from './../screens';

const RouterApp = (props) => {
  
  return (
    <BrowserRouter>
      <Routes>

        {/* Home Route */}
        <Route path={AppRoutes.home} element={
          <PrivateRouter path={AppRoutes.home}>
            <Home />
          </PrivateRouter>
        } />

        {/* Home Route */}
        <Route path={AppRoutes.dashboard} element={
          <PrivateRouter path={AppRoutes.dashboard}>
            <Dashboard />
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
