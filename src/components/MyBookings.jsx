import React, { useState, useEffect } from 'react';

import useTravelService from '../Services/allAPI';
const MyBookingsComponent = () => {
  const [email, setEmail] = useState('');
  const [pbdata, setPbdata] = useState([]);
  const [ubdata, setUbdata] = useState([]);

  const { getMyBookingsApi } = useTravelService();
  const { getChoiceBookingsApi } = useTravelService();
  const { deleteUserPackageApi } = useTravelService();
  const { deleteUserChoiceApi } = useTravelService();
  useEffect(() => {
    // Fetch myPackages and myChoiceBookings when component mounts
    myPackages();
    myChoiceBookings();
  }, []); // Empty dependency array ensures this runs only on mount

  const myPackages = () => {
    const userEmail = localStorage.getItem('userEmail');

    if (localStorage.getItem('user')) {
      setEmail(userEmail);

      // Make API call to get my packages
      getMyBookingsApi(userEmail)
        .then((result) => {
          setPbdata(result.message);
          console.log(result.message);
        })
        .catch((error) => console.error('Error fetching my packages:', error));
    }
  };

  const myChoiceBookings = () => {
    const userEmail = localStorage.getItem('userEmail');

    if (localStorage.getItem('user')) {
      setEmail(userEmail);

      // Make API call to get my choice bookings
      getChoiceBookingsApi(userEmail)
        .then((result) => {
          setUbdata(result.message);
          console.log(result.message);
        })
        .catch((error) => console.error('Error fetching my choice bookings:', error));
    }
  };

  const premove = (id) => {
    // Function to delete user package
    deleteUserPackageApi(id)
      .then((result) => {
        alert(result.message);
        myPackages(); // Refresh packages list after deletion
      })
      .catch((error) => console.error('Error deleting user package:', error));
  };

  const uremove = (id) => {
    // Function to delete user choice
    deleteUserChoiceApi(id)
      .then((result) => {
        alert(result.message);
        myChoiceBookings(); // Refresh choice bookings list after deletion
      })
      .catch((error) => console.error('Error deleting user choice:', error));
  };

  return (
    <div className="container-fluid">
     

      <div className="mt-4 ms-5">
        <h3 style={{ color: 'rgb(79, 138, 23)', textTransform: 'uppercase' }}>User Bookings</h3>
      </div>

      <div className="table-responsive-md m-4 mt-4 pt-2">
        <table className="table table-light table-hover table-striped p-0 m-0 mb-5">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col" className="">Destination</th>
              <th scope="col" className="">Duration</th>
              <th scope="col" className="">Starting Date</th>
              <th scope="col" className="">Travellers</th>
              <th scope="col" className="">Actions</th>
            </tr>
          </thead>
          <tbody>
            {ubdata.map((i, j) => (
              <tr key={j}>
                <th scope="row">{j + 1}</th>
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

export default MyBookingsComponent;
