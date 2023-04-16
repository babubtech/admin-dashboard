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
  RoleMaster,
  AddUser,
  Admins,
  Post,
  UserProfileList,
  ManageFeedback,
  UpdateProfile,
  ChangePassword,
  AddAnnouncement
} from './../screens';
import ManageAnouncement from "../screens/manageAnouncement";
import {  NetworkProvider } from '../context/NetworkContext';

const RouterApp = (props) => {
  
  return (
  <NetworkProvider>
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
          {/* admins Route */}
          <Route path={AppRoutes.admins} element={
          <PrivateRouter path={AppRoutes.admins}>
            <Admins />
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
        <Route path={AppRoutes.roleMaster} element={
          <PrivateRouter path={AppRoutes.roleMaster}>
            <RoleMaster />
          </PrivateRouter>
        } />
        {/* addUser */}
        <Route path={AppRoutes.addUser} element={
          <PrivateRouter path={AppRoutes.addUser}>
            <AddUser />
          </PrivateRouter>
        } />

        {/* post */}
        <Route path={AppRoutes.post} element={
          <PrivateRouter path={AppRoutes.post}>
            <Post />
          </PrivateRouter>
        } />

        {/* user profile list */}
        <Route path={AppRoutes.userProfileList} element={
          <PrivateRouter path={AppRoutes.userProfileList}>
            <UserProfileList />
          </PrivateRouter>
        } />

         {/* support */}
         <Route path={AppRoutes.support} element={
          <PrivateRouter path={AppRoutes.support}>
            <ManageFeedback />
          </PrivateRouter>
        } />
        {/* announcement */}
           <Route path={AppRoutes.announcement} element={
          <PrivateRouter path={AppRoutes.announcement}>
            <ManageAnouncement />
          </PrivateRouter>
        } />
          <Route path={AppRoutes.addannouncement} element={
          <PrivateRouter path={AppRoutes.addannouncement}>
            <AddAnnouncement />
          </PrivateRouter>
        } />
         {/* changepassword */}
         <Route path={AppRoutes.changepassword} element={
          <PrivateRouter path={AppRoutes.changepassword}>
            <ChangePassword />
          </PrivateRouter>
        } />

         {/* updateprofile */}
         <Route path={AppRoutes.updateprofile} element={
          <PrivateRouter path={AppRoutes.updateprofile}>
            <UpdateProfile />
          </PrivateRouter>
        } />

        {/* Login Route */}
        <Route path={AppRoutes.login} element={<Login />} />

        {/* For unknow/non-defined path */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </NetworkProvider>    
  );
};

export default RouterApp;
