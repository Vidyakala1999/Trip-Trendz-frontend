
import { Route, Routes } from 'react-router-dom';
import './App.css';


import Home from './pages/Home';


import Footer from './components/Footer';

import Header from './components/Header';
import UserLogin from './components/UserLogin';
import UserRegister from './components/UserRegister';
import UserReview from './components/UserReview';
import AdminLogin from './components/AdminLogin';
import AdminHome from './components/AdminHome';
import BookNowComponent from './components/BookNow';
import MyBookingsComponent from './components/MyBookings';
import AdminBookingMngComponent from './components/AdminBookMng';
import AdminReviewMngComponent from './components/AdminRevwMng';
import AdminUserMngComponent from './components/AdminUserMng';
import AdminAddPackageComponent from './components/AdminAddPkg';
import PackageManagementComponent from './components/Packages';
import AdminEditPackageComponent from './components/AdminEditPkg';


function App() {
  return (
    <div >
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/user-login' element={<UserLogin />} />
        <Route path='/user-register' element={<UserRegister />} />
        <Route path='/user-add-review' element={<UserReview />} />
        <Route path='/admin-login' element={<AdminLogin />} />
        <Route path='/admin-home' element={<AdminHome />} />
        <Route path='/user-booknow' element={<BookNowComponent />} />
        <Route path='/my-bookings' element={<MyBookingsComponent />} />
        <Route path='/admin-booking-mng' element={<AdminBookingMngComponent />} />
        <Route path='/admin-reviews-mng' element={<AdminReviewMngComponent />} />
        <Route path='/admin-user-mng' element={<AdminUserMngComponent />} />
        <Route path='/admin-add-pkg' element={<AdminAddPackageComponent />} />
        <Route path='/admin-packagemng' element={<PackageManagementComponent />} />
        <Route path='admin-edit-package/:id' element={<AdminEditPackageComponent />} />


      </Routes>
      <Footer />
    </div>
  );
}

export default App;
