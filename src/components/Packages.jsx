import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useTravelService from '../Services/allAPI';
const PackageManagementComponent = () => {
  const { getPackagesApi, deletePackageApi } = useTravelService(); // Custom hook for API calls

  const [pdata, setPdata] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = () => {
    getPackagesApi()
      .then(result => {
        setPdata(result.message);
      })
      .catch(error => {
        console.error('Error fetching packages:', error);
      });
  };

  const remove = (id) => {
    deletePackageApi(id)
      .then(result => {
        alert(result.message);
        getAllProducts();
      })
      .catch(error => {
        console.error('Error deleting package:', error);
      });
  };

  return (
    <div className="container-fluid">
      <div className="text-end m-3">
        <Link to="/admin-add-pkg" className="btn text-end text-white p-2" style={{ backgroundColor: '#1c4af0e3' }}>Add New Package</Link>
      </div>

      <div className="table-responsive-md">
        <table className="table table-light table-hover table-striped p-0 m-0 mb-5">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Destination</th>
              <th scope="col">Image</th>
              <th scope="col">Duration</th>
              <th scope="col">Travellers</th>
              <th scope="col">Price</th>
              <th scope="col">Rating</th>
              <th scope="col">Images</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {pdata.map((item, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{item.title}</td>
                <td>{item.place}</td>
                <td><img style={{ height: '75px' }} src={item.image} alt="" /></td>
                <td>{item.duration}</td>
                <td>{item.travellers}</td>
                <td>Rs. {item.price}</td>
                <td>{item.rating}</td>
                <td>
                  <div className="row p-0 m-0">
                    <div className="col-lg-4 col-md-12"><img className="ps-1 pt-1" style={{ height: '75px', width: '100%' }} src={item.image1} alt="" /></div>
                    <div className="col-lg-4 col-md-12"><img className="ps-1 pt-1" style={{ height: '75px', width: '100%' }} src={item.image2} alt="" /></div>
                    <div className="col-lg-4 col-md-12"><img className="ps-1 pt-1" style={{ height: '75px', width: '100%' }} src={item.image3} alt="" /></div>
                  </div>
                </td>
                <td>
                  
                  <button onClick={() => remove(item._id)} className="btn btn-danger mt-1">
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

export default PackageManagementComponent;
