import { useState } from 'react';
import './App.css';
import { Route, Routes, useLocation } from "react-router-dom";
import Login from "./pages/login";
import ForgetPassword from './pages/forgot-password';
import Home from './pages/user/Home';
import User from './components/Core/Dashboard/users/User';
import AddUser from './pages/user/AddUser';
import Navigation from './components/common/Navigation';
import UserDetails from './pages/user/UserDetails';
import SignInList from './pages/admin/SignInList';
import Feedback from './pages/admin/Feedback';
import UserFeedbackDetails from './pages/admin/UserFeedbackDetails';
import Sidebar from './components/common/Sidebar'
import LeaderBoard from './pages/admin/LeaderBoard/LeaderBoard';
import LeaderboardProfile from './components/Core/Dashboard/Admin/LeaderboardProfile';
import LiveClases from './pages/admin/LiveClasses/LiveClases';
import AddLiveClass from './pages/admin/LiveClasses/AddLiveClass';
import LiveClassDetails from './pages/admin/LiveClasses/LiveClassDetails';
import ManageLiveClass from './pages/admin/LiveClasses/ManageLiveClass';
import Teachers from './pages/admin/TeacherMangement/Teachers';
import TestDetails from './pages/admin/TeacherMangement/TestDetails';
import StudentManagement from './pages/admin/StudentMangemet/StudentManagement';
import AddStudent from './pages/admin/StudentMangemet/AddStudent';
import OneOnclass from './pages/admin/one-on-oneclass/OneOnclass';
import AddoneOnOneclass from './pages/admin/one-on-oneclass/AddoneOnOneclass';
import TeacherList from './pages/admin/TeacherList/TeacherList';
import TeacherDetails from './pages/admin/TeacherList/TeacherDetails';
import AddTeacher from './pages/admin/TeacherList/AddTeacher';
import SupportTicket from './pages/admin/supportTicket/SupportTicket';
import SupportTicketDetails from './pages/admin/supportTicket/SupportTicketDetails';
import ParentReportType from './pages/admin/ParentReportType/ParentReportType';
import AddParentReportType from './pages/admin/ParentReportType/AddParentReportType';
import ParentReportTypeDetails from './pages/admin/ParentReportType/ParentReportTypeDetails';
import ParentSuggestions from './pages/admin/ParentReportType/ParentSuggestions';
import ChangePassword from './pages/admin/ChangePassword/ChangePassword';
import AdminRole from './pages/admin/AdminRole/AdminRole';
import AddAdminRole from './pages/admin/AdminRole/AddAdminRole';
import AdminUser from './pages/admin/AdminUser/AdminUser';
import AdminUserDetails from './pages/admin/AdminUser/AdminUserDetails';
import AddAdminUser from './pages/admin/AdminUser/AddAdminUser';
import Profile from './pages/user/Profile/Profile';
import EditUser from './pages/user/EditUser';
import DataAnalytics from './pages/user/DataAnalytics/DataAnalytics';
import ViewAnalytics from './pages/user/DataAnalytics/ViewAnalytics';
import ConversionRates from './pages/user/DataAnalytics/CoversionRates';


function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(prevState => !prevState);
  };

  const location = useLocation();

  // Check if the current location matches the login page path
  const isLoginPage = location.pathname === '/';
  const isforgetPage = location.pathname === '/forgot-password';

  return (
    <>
      {/* Render Navigation only if it's not the login page */}
      {!isLoginPage && !isforgetPage && <Navigation isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />}
      {!isLoginPage && !isforgetPage && <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />}
      <Routes>
      <Route path='/' element={<Login />} />
        <Route path='/addusers' element={<AddUser isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />} />
        <Route path='/userdetails' element={<UserDetails isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />} />
        <Route path='/EditUser' element={<EditUser isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />} />
        <Route path='/forgot-password' element={<ForgetPassword/>} />
        <Route path='/Dashboard' element={<SignInList isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />} />
        <Route path='/users' element={<Home isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />} />
        <Route path='/Feedback' element={<Feedback isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />} />
        <Route path='/UserFeedBackDetails' element={<UserFeedbackDetails isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />} />
        <Route path='/LeaderBoard' element={<LeaderBoard isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />} />
        <Route path='/LeaderBoardProfile' element={<LeaderboardProfile isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />} />
        <Route path='/scheduleliveclasses' element={<LiveClases isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />} />
        <Route path='/AddLiveClass' element={<AddLiveClass isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />} />
        <Route path='/LiveClassDetails' element={<LiveClassDetails isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />} />
        <Route path='/ManageLiveClass' element={<ManageLiveClass isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />} />
        <Route path='/Teacher' element={<Teachers isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />} />
        <Route path='/TestDetails' element={<TestDetails isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />} />
        <Route path='/studentlistmanagement' element={<StudentManagement isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />} />
        <Route path='/AddLiveClassStudent' element={<AddStudent isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />} />
        <Route path='/one-on-oneclassmanagement' element={<OneOnclass isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />} />
        <Route path='/Addone-on-oneClass' element={<AddoneOnOneclass isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />} />
        <Route path='/teacherlistmanagement' element={<TeacherList isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />} />
        <Route path='/Teacher/TeacherDetails' element={<TeacherDetails   isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />} />
        <Route path='/Teacher/AddTeacher' element={<AddTeacher   isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />} />
        <Route path='/supportmanagement' element={<SupportTicket   isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />} />
        <Route path='/supportmanagemen/supportTicketDetails' element={<SupportTicketDetails   isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />} />
        <Route path='/ParentReportType' element={<ParentReportType  isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />} />
        <Route path='/AddParentReportType' element={<AddParentReportType  isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />} />
        <Route path='/ParentReportType/ParentReportTypeDetails' element={<ParentReportTypeDetails  isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />} />
        <Route path='/ParentSuggestions' element={<ParentSuggestions  isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />} />
        <Route path='/ChangePassword' element={<ChangePassword  isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />} />
        <Route path='/Adminrole' element={<AdminRole isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />} />
        <Route path='/Addadminrole' element={<AddAdminRole isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />} />
        <Route path='/AdminUser' element={<AdminUser isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />} />
        <Route path='/AdminUserDetails' element={<AdminUserDetails isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />} />
        <Route path='/AddAdminUser' element={<AddAdminUser isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />} />
        <Route path='/Profile' element={<Profile isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />} />
        <Route path='/DataAnalytics' element={ <DataAnalytics isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />} />
        <Route path='/DataAnalytics' element={ <DataAnalytics isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />} />
        <Route path='/ViewAnalytics' element={ <ViewAnalytics isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />} />
        <Route path='/ConversionRates' element={ <ConversionRates isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />} />
      </Routes>
    </>
  );
}

export default App;
