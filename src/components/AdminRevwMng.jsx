import React, { useState, useEffect } from 'react';
import useTravelService from '../Services/allAPI';
const AdminReviewMngComponent = () => {
  const { getReviewsApi, deleteReviewApi } = useTravelService(); 
  const [data, setData] = useState([]); 

  useEffect(() => {
    getReviews(); 
  }, []); 

  
  const getReviews = () => {
    getReviewsApi()
      .then(result => {
        setData(result.message); 
      })
      .catch(error => {
        console.error('Error fetching reviews:', error);
      });
  };

  
  const remove = (id) => {
    deleteReviewApi(id)
      .then(result => {
        alert(result.message); 
        getReviews(); 
      })
      .catch(error => {
        console.error('Error deleting review:', error);
      });
  };

  return (
    <div className="container-fluid">
      <div className="text-center mt-3 mb-3 m-5">
        <h1 style={{ color: 'rgb(79, 138, 23)', textTransform: 'uppercase' }}>Reviews Management</h1>
      </div>

      <div className="table-responsive-md m-4">
        <table className="table table-light table-hover table-striped p-0 m-0 mb-5">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col" className="ps-5">Comments</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((i, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{i.uname}</td>
                <td>{i.email}</td>
                <td className="ps-5">{i.comments}</td>
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

export default AdminReviewMngComponent;
