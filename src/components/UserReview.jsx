import React, { useState, useEffect } from 'react';
import useTravelService from '../Services/allAPI';
const UserReview = () => {
  const [uid, setUid] = useState('');
  const [comments, setComments] = useState('');
  const [data, setData] = useState([]);
  const { addReviewApi, getReviewsApi } = useTravelService(); 

  useEffect(() => {
    const uidFromLocalStorage = localStorage.getItem('user');
    setUid(uidFromLocalStorage);
    getReviews();
  }, []); 

  const handleInputChange = (e) => {
    setComments(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!uid) {
        alert('Login First');
        return;
      }

      const response = await addReviewApi(uid, comments);
      alert(response.message);
      setComments('');
      getReviews();
    } 
    catch (error) {
      console.error('Add Review Error:', error);
      alert('Failed to add review. Please try again.');
    }
  };

  const getReviews = async () => {
    try {
      const response = await getReviewsApi();
      setData(response.message);
    } catch (error) {
      console.error('Get Reviews Error:', error);
      alert('Failed to fetch reviews. Please try again.');
    }
  };

  return (
    <div id="br" className="container-fluid" style={{ backgroundImage: `url('https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjkzNi1iYWNrZ3JvdW5kLWFkai0wOC5qcGc.jpg')`, height: 'auto' ,backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
      <div className="row">
        <div className="col-lg-8 col-md-12"></div>

        <div id="r1" className="col-lg-4 col-md-12 mt-5">
          <form onSubmit={handleSubmit} className="text-center mt-2 pt-2 ps-5 pe-5 pb-3 container w-100" style={{ background: 'linear-gradient(to right, #a0b478,#eff1eb )' }}>
            <textarea
              name="comments"
              value={comments}
              onChange={handleInputChange}
              id="cm"
              cols="40"
              rows="5"
              placeholder="Comments..."
              className="form-control mt-4"
              required
            ></textarea>
            <br />
            <button type="submit" className="btn w-100 text-black p-2 mb-4" style={{ background: 'linear-gradient(to left, #a0b478,#eff1eb )', fontSize: '20px', fontWeight: '500' }}>Add</button>
          </form>
        </div>
      </div>

      <div className="container-fluid py-1">
        <div className="container pb-3">
          <div className="text-start mb-4 ms-4 ps-5">
            <h1 style={{ color: 'green' }}  id="rh1"><i className="fa-solid fa-comments fa-xl me-2"></i> Reviews</h1>
          </div>
          <div className="row pb-3">
            {data.map((item, index) => (
              <div key={index} className="col-lg-6 col-md-12 pb-2 pe-2">
                <div className="blog-item me-3">
                  <div className="p-4 mb-2">
                    <h6 style={{ color: 'black' }}>{item.comments}</h6>
                    <h6 style={{ color: 'green' }} className="text-end mt-0 pt-0">-{item.uname}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserReview;
