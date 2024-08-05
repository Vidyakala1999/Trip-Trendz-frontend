import React, { useState, useEffect } from 'react';
import useTravelService from '../Services/allAPI';
import { Link } from 'react-router-dom'; // Import Link for routing

const AdminBookingMngComponent = () => {
  const { getAllPackageBookingsApi, getAllUserBookingsApi, deleteUserPackageApi, deleteUserChoiceApi } = useTravelService();
  const [pbdata, setPbdata] = useState([]);
  const [ubdata, setUbdata] = useState([]);

  useEffect(() => {
    getpBookings();
    getUBookings();
  }, []);

  const getpBookings = () => {
    getAllPackageBookingsApi()
      .then(data => {
        setPbdata(data.message);
      })
      .catch(error => {
        console.error('Error fetching package bookings:', error);
      });
  };

  const getUBookings = () => {
    getAllUserBookingsApi()
      .then(data => {
        setUbdata(data.message);
      })
      .catch(error => {
        console.error('Error fetching user choice bookings:', error);
      });
  };

  const premove = (id) => {
    deleteUserPackageApi(id)
      .then(response => {
        alert(response.message);
        getpBookings();
      })
      .catch(error => {
        console.error('Error deleting package booking:', error);
      });
  };

  const uremove = (id) => {
    deleteUserChoiceApi(id)
      .then(response => {
        alert(response.message);
        getUBookings();
      })
      .catch(error => {
        console.error('Error deleting user choice booking:', error);
      });
  };

  return (
    <div className="container-fluid">
      {/* <div className="mt-4 ms-5">
        <h3 style={{ color: 'rgb(79, 138, 23)', textTransform: 'uppercase' }}>Package Bookings</h3>
      </div>

      <div className="table-responsive-md m-4 mt-4 pt-2">
        <table className="table table-light table-hover table-striped p-0 m-0 mb-5">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone No.</th>
              <th scope="col">Package Title</th>
              <th scope="col">Destination</th>
              <th scope="col">Duration</th>
              <th scope="col">Starting Date</th>
              <th scope="col">Travellers</th>
              <th scope="col">Amount</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {pbdata.map((i, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{i.name}</td>
                <td>{i.email}</td>
                <td>{i.phn}</td>
                <td>{i.title}</td>
                <td>{i.destination}</td>
                <td>{i.duration}</td>
                <td>{new Date(i.sdate).toLocaleDateString()}</td>
                <td>{i.travellers}</td>
                <td>Rs. {i.price}</td>
                <td>
                  <button onClick={() => premove(i._id)} className="btn btn-danger ms-1">Cancel</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}

      <div className="mt-4 ms-5">
        <h3 style={{ color: 'rgb(79, 138, 23)', textTransform: 'uppercase' }}>User Bookings</h3>
      </div>

      <div className="table-responsive-md m-4 mt-4 pt-2">
        <table className="table table-light table-hover table-striped p-0 m-0 mb-5">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone No.</th>
              <th scope="col">Destination</th>
              <th scope="col">Duration</th>
              <th scope="col">Starting Date</th>
              <th scope="col">Travellers</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {ubdata.map((i, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{i.name}</td>
                <td>{i.email}</td>
                <td>{i.phn}</td>
                <td>{i.destination}</td>
                <td>{i.duration}</td>
                <td>{new Date(i.sdate).toLocaleDateString()}</td>
                <td>{i.travellers}</td>
                <td>
                  <button onClick={() => uremove(i._id)} className="btn btn-danger ms-1">Cancel</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminBookingMngComponent;
