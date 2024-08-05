
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useTravelService from '../Services/allAPI';

const Header = () => {
  const { login, header, logout } = useTravelService();

  useEffect(() => {
    header(); 
  }, []);

  const addReview = () => {
    if (localStorage.getItem('user')) {
      
      window.location.href = '/user-add-review'; 
    } else {
      alert('Login First');
      
      window.location.href = '/user-login';
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('userEmail');
    logout(); 
    window.location.href = '/';
  };

  return (
    <nav className="navbar navbar-expand-lg" style={{ background: 'linear-gradient(to right, #a0b478,#eff1eb )' }}>
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-5">
            <li className="nav-item">
              

<div className="name" style={{ display: 'flex', alignItems: 'center' }} >
                            <img id='imga' src="https://i.pinimg.com/originals/0e/1b/f6/0e1bf6f40d99a2d4738fae95ce3a4b3e.png" alt="" width={80} height={80} style={{borderRadius:'50%'}}/>
                            <h1 className='fd-bolder' style={{ fontSize: '50px', fontFamily: 'serif', textShadow: '0 0 5px black', fontWeight: 'bold' }}>Trip Trendz </h1>
                            </div>
            </li>
          </ul>
          <ul className="navbar-nav me-4 mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link" style={{ color: "black" }}>
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={addReview} style={{ color: "black" }}>
                REVIEWS
              </a>
            </li>
            <li className="nav-item">
              <Link to="/user-login" className="nav-link" style={{ color: "black" }}>
                LOGIN
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin-login" className="nav-link" style={{ color: "black" }}>
                ADMIN LOGIN
              </Link>
            </li>
            {login && (
              <li className="nav-item dropdown">
                <button className="btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="fa-solid fa-circle-user fa-2x" style={{ color: '#a0b478' }}></i>
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <Link to="/my-bookings" className="dropdown-item">
                      My Bookings
                    </Link>
                  </li>
                  <li>
                    <a onClick={handleLogout} className="dropdown-item" href="#">
                      Logout
                    </a>
                  </li>
                </ul>
              </li>
            )}

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;












