import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import useTravelService from '../Services/allAPI';
const UserRegister = () => {
  const [pswCheck, setPswCheck] = useState(false);
  const [formValues, setFormValues] = useState({
    uname: '',
    email: '',
    phn: '',
    address: '',
    state: '',
    city: '',
    psw: '',
    cpsw: '',
  });
  const { userRegisterApi } = useTravelService(); 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formValues.psw !== formValues.cpsw) {
      setPswCheck(true);
      return;
    }

    try {
      const response = await userRegisterApi(formValues);
      alert(response.message);
      
      window.location.href = '/user-login'; 
    } catch (error) {
      console.error('Registration Error:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="row mt-5 mb-5">
      <div className="col-lg-3 col-md-12"></div>

      <div className="col-lg-6 col-md-12">
        <form onSubmit={handleSubmit} className="text-center pt-5 ps-5 pe-5 pb-3 bg-white container w-75">
          <h1 className="mb-4" style={{ color: 'rgb(107, 172, 45)' }}>Sign Up</h1>

          <input
            type="text"
            name="uname"
            value={formValues.uname}
            onChange={handleInputChange}
            placeholder="Name"
            className="form-control"
            required
          />
          <br />
         
          
          <input
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleInputChange}
            placeholder="Email"
            className="form-control"
            required
          />
          <br />
          
          
          <input
            type="text"
            name="phn"
            value={formValues.phn}
            onChange={handleInputChange}
            placeholder="Phone Number"
            className="form-control"
            required
          />
          <br />
         
          
          <textarea
            name="address"
            value={formValues.address}
            onChange={handleInputChange}
            placeholder="Address"
            className="form-control"
            required
          ></textarea>
          <br />
          
          
          <input
            type="text"
            name="state"
            value={formValues.state}
            onChange={handleInputChange}
            placeholder="State"
            className="form-control"
            required
          />
          <br />
         
          
          <input
            type="text"
            name="city"
            value={formValues.city}
            onChange={handleInputChange}
            placeholder="City"
            className="form-control"
            required
          />
          <br />
          
          
          <input
            type="password"
            name="psw"
            value={formValues.psw}
            onChange={handleInputChange}
            placeholder="Password"
            className="form-control"
            required
          />
          <br />
          
          
          <input
            type="password"
            name="cpsw"
            value={formValues.cpsw}
            onChange={handleInputChange}
            placeholder="Confirm Password"
            className="form-control"
            required
          />
          <br />
          {pswCheck && <p className="text-danger">* Passwords do not match</p>}
          
          <button type="submit" className="btn w-100 text-white p-2 mb-2" style={{ backgroundColor: 'rgb(107, 172, 45)', fontSize: '20px', fontWeight: '500' }}>Register</button>
        </form>
        <p className="mt-3">Already registered? <Link to="/user-login">Login</Link></p>
      </div>

      <div className="col-lg-3 col-md-12"></div>
    </div>
  );
};

export default UserRegister;
