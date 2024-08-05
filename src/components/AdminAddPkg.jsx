import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useTravelService from '../Services/allAPI'; // Assuming this is your custom hook for API calls
import "./AdminAddPkg.css"
const AdminAddPackageComponent = () => {
  const { addPackageApi } = useTravelService(); // Custom hook for API calls

  const [packageData, setPackageData] = useState({
    title: '',
    place: '',
    duration: '',
    travellers: '',
    image: '',
    rating: '',
    price: '',
    image1: '',
    image2: '',
    image3: ''
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    // Basic validation to ensure required fields are filled
    if (submitting) {
      if (!packageData.title || !packageData.place || !packageData.duration || !packageData.travellers || !packageData.image || !packageData.rating || !packageData.price || !packageData.image1 || !packageData.image2 || !packageData.image3) {
        setErrors(prevErrors => ({
          ...prevErrors,
          form: 'Please fill out all fields'
        }));
        setSubmitting(false);
      }
      else {
        setErrors({});
      }
    }
  }, [packageData, submitting]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPackageData(prevPackageData => ({
      ...prevPackageData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    addPackageApi(packageData)
      .then(result => {
        alert(result.message);
        setPackageData({
          title: '',
          place: '',
          duration: '',
          travellers: '',
          image: '',
          rating: '',
          price: '',
          image1: '',
          image2: '',
          image3: ''
        });
        setSubmitting(false);
        window.location.href = '/admin-packagemng';

        
      })
      .catch(error => {
        alert('Failed to add package');
        setSubmitting(false);
      });
  };

  return (
    <div className="container text-center mb-3">
      <h1 className="mt-4 mb-4" style={{ color: 'rgb(107 172 45)' }}>Package Details</h1>

      <form onSubmit={handleSubmit} className="mb-4">
        {/* Package Title */}
        <input
          type="text"
          name="title"
          placeholder="Package Title"
          className="form-control p-2 mb-2"
          value={packageData.title}
          onChange={handleChange}
          required
        />
        {errors.form && <p className="text-danger mt-1">{errors.form}</p>}

        {/* Destination */}
        <input
          type="text"
          name="place"
          placeholder="Destination"
          className="form-control p-2 mb-2"
          value={packageData.place}
          onChange={handleChange}
          required
        />
        {errors.form && <p className="text-danger mt-1">{errors.form}</p>}

        {/* Duration */}
        <input
          type="text"
          name="duration"
          placeholder="Duration"
          className="form-control p-2 mb-2"
          value={packageData.duration}
          onChange={handleChange}
          required
        />
        {errors.form && <p className="text-danger mt-1">{errors.form}</p>}

        {/* Number Of Travellers */}
        <input
          type="text"
          name="travellers"
          placeholder="Number Of Travellers"
          className="form-control p-2 mb-2"
          value={packageData.travellers}
          onChange={handleChange}
          required
        />
        {errors.form && <p className="text-danger mt-1">{errors.form}</p>}

        {/* Image */}
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          className="form-control p-2 mb-2"
          value={packageData.image}
          onChange={handleChange}
          required
        />
        {errors.form && <p className="text-danger mt-1">{errors.form}</p>}

        {/* Rating */}
        <input
          type="text"
          name="rating"
          placeholder="Rating"
          className="form-control p-2 mb-2"
          value={packageData.rating}
          onChange={handleChange}
          required
        />
        {errors.form && <p className="text-danger mt-1">{errors.form}</p>}

        {/* Price */}
        <input
          type="text"
          name="price"
          placeholder="Price"
          className="form-control p-2 mb-2"
          value={packageData.price}
          onChange={handleChange}
          required
        />
        {errors.form && <p className="text-danger mt-1">{errors.form}</p>}

        {/* Image 1 */}
        <input
          type="text"
          name="image1"
          placeholder="Image 1 URL"
          className="form-control p-2 mb-2"
          value={packageData.image1}
          onChange={handleChange}
          required
        />
        {errors.form && <p className="text-danger mt-1">{errors.form}</p>}

        {/* Image 2 */}
        <input
          type="text"
          name="image2"
          placeholder="Image 2 URL"
          className="form-control p-2 mb-2"
          value={packageData.image2}
          onChange={handleChange}
          required
        />
        {errors.form && <p className="text-danger mt-1">{errors.form}</p>}

        {/* Image 3 */}
        <input
          type="text"
          name="image3"
          placeholder="Image 3 URL"
          className="form-control p-2 mb-2"
          value={packageData.image3}
          onChange={handleChange}
          required
        />
        {errors.form && <p className="text-danger mt-1">{errors.form}</p>}

        <button
          type="submit"
          className="btn btn-primary me-3"
          disabled={submitting}
        >
          {submitting ? 'Adding...' : 'Add Package'}
          
        </button>

        <Link to="/admin-packagemng" className="btn btn-secondary">
          Go Back
        </Link>

        {errors.form && <p className="text-danger mt-3">{errors.form}</p>}
      </form>
    </div>
  );
};

export default AdminAddPackageComponent;
