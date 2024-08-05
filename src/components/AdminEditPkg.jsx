import React, { useState, useEffect } from 'react';
import useTravelService from '../Services/allAPI';

const AdminEditPackageComponent = ({ match, history }) => {
  const { id } = match.params; // Accessing id from match.params
  const { getPackageApi, editPackageApi } = useTravelService(); // Destructure API functions from custom hook

  const [pdata, setPdata] = useState({}); // State for package data
  const [formData, setFormData] = useState({
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

  useEffect(() => {
    // Fetch package data on component mount
    getPackageApi(id).then(result => {
      setPdata(result.message);
      // Set initial form data from package data
      setFormData({
        title: result.message.title || '',
        place: result.message.place || '',
        duration: result.message.duration || '',
        travellers: result.message.travellers || '',
        image: result.message.image || '',
        rating: result.message.rating || '',
        price: result.message.price || '',
        image1: result.message.image1 || '',
        image2: result.message.image2 || '',
        image3: result.message.image3 || ''
      });
    }).catch(error => {
      console.error('Error fetching package:', error);
    });
  }, [id, getPackageApi]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedPackage = {
      title: formData.title,
      place: formData.place,
      duration: formData.duration,
      travellers: formData.travellers,
      image: formData.image,
      rating: formData.rating,
      price: formData.price,
      image1: formData.image1,
      image2: formData.image2,
      image3: formData.image3
    };

    editPackageApi(id, updatedPackage).then(result => {
      alert(result.message);
      // Redirect or handle success as needed
      history.push('/admin-packagemng'); // Example redirect
    }).catch(error => {
      console.error('Error updating package:', error);
    });
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4" style={{ color: 'rgb(107, 172, 45)' }}>Edit Package Details</h1>
      <form onSubmit={handleSubmit} className="container text-center mb-3">
        {/* Your form inputs */}
      </form>
    </div>
  );
};

export default AdminEditPackageComponent;
