// AdminHome.js
import React from 'react';
import { Link } from 'react-router-dom';
import "./AdminHome.css"

const AdminHome = () => {
  const logout = () => {
    localStorage.removeItem('admin');
    
    window.location.href = '/';
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-4 col-md-5" style={{ backgroundColor: 'rgba(197, 206, 194, 0.349)' }}>
          <div className="h1 pt-4">
            <button onClick={logout} className="btn btn-primary mb-2">
              <i className="fa-solid fa-right-to-bracket fa-rotate-180 me-2"></i>Logout
            </button>

            <h3 className="text-center mt-4" style={{ color: 'rgb(107, 172, 45)' }}>SERVICES</h3>

            <div className="col-md-12 ps-2 pb-4 pt-4 mb-4 mt-4" style={{ color: 'rgb(107, 172, 45)' }}>
              <i className="fa fa-solid fa-users"></i>
              <Link to="/admin-user-mng" className="p-4 mb-2 ms-5">Users Management</Link>
            </div>

            <div className="col-md-12 ps-2 pb-4 pt-4 mb-4 mt-4" style={{ color: 'rgb(107, 172, 45)' }}>
              <i className="fa fa-solid fa-person-walking-luggage"></i>
              <Link to="/admin-packagemng" className="p-4 pe-2 mb-2 ms-5">Package Management</Link>
            </div>

            <div className="col-md-12 ps-2 pb-4 pt-4 mb-4 mt-4" style={{ color: 'rgb(107, 172, 45)' }}>
              <i className="fa fa-solid fa-bookmark"></i>
              <Link to="/admin-booking-mng" className="p-4 pe-2 mb-2 ms-5">Bookings Management</Link>
            </div>

            <div className="col-md-12 ps-2 pb-4 pt-4 mb-4 mt-4" style={{ color: 'rgb(107, 172, 45)' }}>
              <i className="fa-solid fa-comments"></i>
              <Link to="/admin-reviews-mng" className="p-4 pe-2 ms-5">Reviews Management</Link>
            </div>
          </div>
        </div>

        <div className="col-lg-8 col-md-7 ps-5 mt-5 pt-3 mb-5 text-end">
          <div>
            <img src="https://i.postimg.cc/R0pBg7gg/travel-Admin.jpg" alt="Admin" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
