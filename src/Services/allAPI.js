import { useState } from 'react';
import axios from 'axios';

const baseUrl = "http://localhost:4000";

const useTravelService = () => {
  const [login, setLogin] = useState(false);

  // Function to initialize login state based on localStorage
  const header = () => {
    if (localStorage.getItem("user")) {
      setLogin(true);
    }
  };

  // API functions
  const adminLoginApi = async (uname, psw) => {
    const body = { uname, psw };
    try {
      const response = await axios.post(`${baseUrl}/admin/login`, body);
      return response.data;
    } catch (error) {
      console.error('Admin Login Error:', error);
      throw new Error('Admin Login Failed');
    }
  };

  const addPackageApi = async (body) => {
    try {
      const response = await axios.post(`${baseUrl}/admin/add-package`, body);
      return response.data;
    } catch (error) {
      console.error('Add Package Error:', error);
      throw new Error('Add Package Failed');
    }
  };

  const getPackagesApi = async () => {
    try {
      const response = await axios.get(`${baseUrl}/admin/packages-access`);
      return response.data;
    } catch (error) {
      console.error('Get Packages Error:', error);
      throw new Error('Get Packages Failed');
    }
  };

  const getPackageApi = async (id) => {
    try {
      const response = await axios.get(`${baseUrl}/singleproduct-access/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Get Package ${id} Error:`, error);
      throw new Error(`Get Package ${id} Failed`);
    }
  };

  const editPackageApi = async (id, bodyData) => {
    try {
      const response = await axios.put(`${baseUrl}/product-update/${id}`, bodyData);
      return response.data;
    } catch (error) {
      console.error(`Edit Package ${id} Error:`, error);
      throw new Error(`Edit Package ${id} Failed`);
    }
  };

  const deletePackageApi = async (id) => {
    try {
      const response = await axios.delete(`${baseUrl}/package-delete/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Delete Package ${id} Error:`, error);
      throw new Error(`Delete Package ${id} Failed`);
    }
  };

  const userRegisterApi = async (body) => {
    try {
      const response = await axios.post(`${baseUrl}/user-register`, body);
      return response.data;
    } catch (error) {
      console.error('User Register Error:', error);
      throw new Error('User Register Failed');
    }
  };

  const userLoginApi = async (email, psw) => {
    const body = { email, psw };
    try {
      const response = await axios.post(`${baseUrl}/user-login`, body);
      return response.data;
    } catch (error) {
      console.error('User Login Error:', error);
      throw new Error('User Login Failed');
    }
  };

  const userBookingApi = async (body) => {
    try {
      const response = await axios.post(`${baseUrl}/user/add-booking`, body);
      return response.data;
    } catch (error) {
      console.error('User Booking Error:', error);
      throw new Error('User Booking Failed');
    }
  };

  const getAllUserBookingsApi = async () => {
    try {
      const response = await axios.get(`${baseUrl}/admin/user-choice-booking`);
      return response.data;
    } catch (error) {
      console.error('Get All User Bookings Error:', error);
      throw new Error('Get All User Bookings Failed');
    }
  };

  const getUsersApi = async () => {
    try {
      const response = await axios.get(`${baseUrl}/admin/users-access`);
      return response.data;
    } catch (error) {
      console.error('Get Users Error:', error);
      throw new Error('Get Users Failed');
    }
  };

  const deleteUserApi = async (id) => {
    try {
      const response = await axios.delete(`${baseUrl}/users-delete/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Delete User ${id} Error:`, error);
      throw new Error(`Delete User ${id} Failed`);
    }
  };

  const packageBookingApi = async (pid, bodyData) => {
    try {
      const response = await axios.post(`${baseUrl}/user/package-booking/${pid}`, bodyData);
      return response.data;
    } catch (error) {
      console.error(`Package Booking ${pid} Error:`, error);
      throw new Error(`Package Booking ${pid} Failed`);
    }
  };

  const getAllPackageBookingsApi = async () => {
    try {
      const response = await axios.get(`${baseUrl}/admin/pbooking-access`);
      return response.data;
    } catch (error) {
      console.error('Get All Package Bookings Error:', error);
      throw new Error('Get All Package Bookings Failed');
    }
  };

  const addReviewApi = async (uid, comments) => {
    const body = { uid, comments };
    try {
      const response = await axios.post(`${baseUrl}/user/add-review`, body);
      return response.data;
    } catch (error) {
      console.error('Add Review Error:', error);
      throw new Error('Add Review Failed');
    }
  };

  const getReviewsApi = async () => {
    try {
      const response = await axios.get(`${baseUrl}/user/reviews-access`);
      return response.data;
    } catch (error) {
      console.error('Get Reviews Error:', error);
      throw new Error('Get Reviews Failed');
    }
  };

  const deleteReviewApi = async (id) => {
    try {
      const response = await axios.delete(`${baseUrl}/review-delete/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Delete Review ${id} Error:`, error);
      throw new Error(`Delete Review ${id} Failed`);
    }
  };

  const getMyBookingsApi = async (email) => {
    try {
      const response = await axios.get(`${baseUrl}/user/my-bookings/${email}`);
      return response.data;
    } catch (error) {
      console.error(`Get My Bookings ${email} Error:`, error);
      throw new Error(`Get My Bookings ${email} Failed`);
    }
  };

  const getChoiceBookingsApi = async (email) => {
    try {
      const response = await axios.get(`${baseUrl}/user/choice-bookings/${email}`);
      return response.data;
    } catch (error) {
      console.error(`Get Choice Bookings ${email} Error:`, error);
      throw new Error(`Get Choice Bookings ${email} Failed`);
    }
  };

  const deleteUserPackageApi = async (id) => {
    try {
      const response = await axios.delete(`${baseUrl}/user/package-delete/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Delete User Package ${id} Error:`, error);
      throw new Error(`Delete User Package ${id} Failed`);
    }
  };

  const deleteUserChoiceApi = async (id) => {
    try {
      const response = await axios.delete(`${baseUrl}/user/choice-delete/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Delete User Choice ${id} Error:`, error);
      throw new Error(`Delete User Choice ${id} Failed`);
    }
  };

  return {
    login,
    header,
    adminLoginApi,
    addPackageApi,
    getPackagesApi,
    getPackageApi,
    editPackageApi,
    deletePackageApi,
    userRegisterApi,
    userLoginApi,
    userBookingApi,
    getAllUserBookingsApi,
    getUsersApi,
    deleteUserApi,
    packageBookingApi,
    getAllPackageBookingsApi,
    addReviewApi,
    getReviewsApi,
    deleteReviewApi,
    getMyBookingsApi,
    getChoiceBookingsApi,
    deleteUserPackageApi,
    deleteUserChoiceApi
  };
};

export default useTravelService;








