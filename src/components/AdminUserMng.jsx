import React, { useState, useEffect } from 'react';
import useTravelService from '../Services/allAPI';
const AdminUserMngComponent = () => {
  const { getUsersApi, deleteUserApi } = useTravelService(); 
  const [udata, setUdata] = useState([]); 
  useEffect(() => {
    getAllUsers(); 
  }, []); 

  
  const getAllUsers = () => {
    getUsersApi()
      .then(result => {
        setUdata(result.message); 
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  };

  
  const remove = (id) => {
    deleteUserApi(id)
      .then(result => {
        alert(result.message); 
        getAllUsers(); 
      })
      .catch(error => {
        console.error('Error deleting user:', error);
      });
  };

  return (
    <div className="container-fluid">
      <div className="text-center m-5">
        <h1 style={{ color: 'rgb(79, 138, 23)', textTransform: 'uppercase' }}>Users Management</h1>
      </div>

      <div className="table-responsive-md m-4 mt-4 pt-2">
        <table className="table table-light table-hover table-striped p-0 m-0 mb-5">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone No.</th>
              <th scope="col">Address</th>
              <th scope="col">State</th>
              <th scope="col">City</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {udata.map((i, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{i.uname}</td>
                <td>{i.email}</td>
                <td>{i.phn}</td>
                <td>{i.address}</td>
                <td>{i.state}</td>
                <td>{i.city}</td>
                <td>
                  <button onClick={() => remove(i._id)} className="btn btn-danger ms-1">
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminUserMngComponent;
