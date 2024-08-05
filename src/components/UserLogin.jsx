import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useTravelService from '../Services/allAPI';
import './UserLogin.css';

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formErrors, setFormErrors] = useState({ email: '', password: '' });
  const { userLoginApi } = useTravelService(); // Custom hook for API calls

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await userLoginApi(email, password);
      console.log('API Response:', response); 
      
      if (response.status) {
        localStorage.setItem('user', response._id); 
        localStorage.setItem('userEmail', email);
        alert(response.message);
        
        window.location.href = '/';
      } else {
        alert(response.message); 
      }
    } catch (error) {
      console.error('Login Error:', error);
      alert('Something went wrong. Please try again.');
    }
  };
  
  

  return (
    <div className="row container-fluid mt-5 mb-5" >
      <div className="col-lg-3 col-md-12" ></div>

      <div className="col-lg-6 col-md-12" >
        <form onSubmit={handleSubmit} className="text-center pt-5 ps-5 pe-5 pb-3 bg-white container w-75" style={{ background: 'linear-gradient(to right, #a0b478,#eff1eb )' }}>
          <h1 className="mb-4" style={{   color: 'black' }}>
            Sign In
          </h1>

          <input
            name="email"
            type="email"
            placeholder="Email"
            className="form-control"
            value={email}
            onChange={handleInputChange}
            required
          />
          {formErrors.email && (
            <p className="text-danger">*Provide Valid Email-Id</p>
          )}

          <input
            name="password"
            type="password"
            placeholder="Password"
            className="form-control"
            value={password}
            onChange={handleInputChange}
            required
          />
          {formErrors.password && (
            <p className="text-danger">
              *Accept Characters, Numbers and Special Characters Only
            </p>
          )}

          <button
            type="submit"
            className="btn w-100 text-white p-2 mb-2"
            style={{
              backgroundColor: 'rgb(107, 172, 45)',
              fontSize: '20px',
              fontWeight: '500',
               
            }}
          >
            Login
          </button>

          <p>
            Not registered yet? <Link to="/user-register" >Register</Link>
          </p>
        </form>
      </div>

      <div className="col-lg-3 col-md-12" ></div>
    </div>
  );
};

export default UserLogin;
