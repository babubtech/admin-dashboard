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
  Login,
  Dashboard,
  Users,
  ManageAd,
  Profile,
  StatusMaster,
  CategoryMaster,
  KulamMaster,
  AddUser
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

        {/* Manage Ad Route */}
        <Route path={AppRoutes.manageAd} element={
          <PrivateRouter path={AppRoutes.manageAd}>
            <ManageAd />
          </PrivateRouter>
        } />

        {/* Profile Ad Route */}
        <Route path={AppRoutes.profile} element={
          <PrivateRouter path={AppRoutes.profile}>
            <Profile />
          </PrivateRouter>
        } />

        {/* Masters Ad Route */}
        <Route path={AppRoutes.statusMaster} element={
          <PrivateRouter path={AppRoutes.statusMaster}>
            <StatusMaster />
          </PrivateRouter>
        } />

        <Route path={AppRoutes.categoryMaster} element={
          <PrivateRouter path={AppRoutes.categoryMaster}>
            <CategoryMaster />
          </PrivateRouter>
        } />

        <Route path={AppRoutes.kulamMaster} element={
          <PrivateRouter path={AppRoutes.kulamMaster}>
            <KulamMaster />
          </PrivateRouter>
        } />

        {/* addUser */}
        <Route path={AppRoutes.addUser} element={
          <PrivateRouter path={AppRoutes.addUser}>
            <AddUser />
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
