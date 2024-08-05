import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useTravelService from '../Services/allAPI';
import "./AdminLogin.css"
const AdminLogin = () => {
  const [adminLoginForm, setAdminLoginForm] = useState({
    auname: '',
    apsw: ''
  });

  const [formErrors, setFormErrors] = useState({
    auname: '',
    apsw: ''
  });

  const [loggedIn, setLoggedIn] = useState(false); 
  const { adminLoginApi } = useTravelService(); 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAdminLoginForm({
      ...adminLoginForm,
      [name]: value
    });
  };

  const adminlogin = async (e) => {
    e.preventDefault();

    if (!adminLoginForm.auname) {
      setFormErrors({ ...formErrors, auname: '*Accept Numbers and Characters Only' });
      return;
    }

    if (!adminLoginForm.apsw) {
      setFormErrors({ ...formErrors, apsw: '*Please Include Characters, Numbers, and Special Characters' });
      return;
    }

    try {
      const response = await adminLoginApi(adminLoginForm.auname, adminLoginForm.apsw);

      if (response.status === true) {
        alert(response.message);
        localStorage.setItem('admin', response._id);
        setLoggedIn(true); 
      } else {
        alert(response.message);
      }
    } catch (error) {
      console.error('Admin Login Error:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  
  if (loggedIn) {
    
    window.location.href = '/admin-home';

  }

  return (
    <div className="mb-3 pb-4">
      <div className="container-fluid mt-5 pb-2 bg-primary" id="ad" style={{ background: 'linear-gradient(to right, #a0b478,#eff1eb )'}}>
        <h1 className="text-center pt-2 mt-5 text-black">Admin Login</h1>
      </div>

      <form onSubmit={adminlogin} className="text-center p-5 bg-white container mb-5"  >
        <input
          name="auname"
          type="text"
          placeholder="Username"
          className="form-control"
          value={adminLoginForm.auname}
          onChange={handleInputChange}
          required
        />
        {formErrors.auname && <p className="text-danger">{formErrors.auname}</p>}

        <input
          name="apsw"
          type="password"
          placeholder="Password"
          className="form-control"
          value={adminLoginForm.apsw}
          onChange={handleInputChange}
          required
        />
        {formErrors.apsw && <p className="text-danger">{formErrors.apsw}</p>}

        <button type="submit" className="btn w-100 text-black p-2 bg-primary" style={{ background: 'linear-gradient(to right, #a0b478,#eff1eb )'}}>
          Login
        </button>

        <p>
          Not an admin? <Link to="/user-login">Go to User Login</Link>
        </p>
      </form>
    </div>
  );
};

export default AdminLogin;
