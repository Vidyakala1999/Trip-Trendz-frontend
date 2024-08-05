import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useTravelService from '../Services/allAPI';
const BookNowComponent = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phn, setPhn] = useState('');
    const [destination, setDestination] = useState('');
    const [duration, setDuration] = useState('');
    const [sdate, setSdate] = useState('');
    const [travellers, setTravellers] = useState('');

    const { userBookingApi } = useTravelService();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'phn':
                setPhn(value);
                break;
            case 'destination':
                setDestination(value);
                break;
            case 'duration':
                setDuration(value);
                break;
            case 'sdate':
                setSdate(value);
                break;
            case 'travellers':
                setTravellers(value);
                break;
            default:
                break;
        }
    };

    const book = (e) => {
        e.preventDefault();
        const body = {
            name,
            email,
            phn,
            destination,
            duration,
            sdate,
            travellers
        };

        if (name && email && phn && destination && duration && sdate && travellers) {
           
            if (localStorage.getItem('user')) {
                const response = userBookingApi(body);
                alert('Booking submitted successfully!');
                // Optionally, reset form fields
                setName('');
                setEmail('');
                setPhn('');
                setDestination('');
                setDuration('');
                setSdate('');
                setTravellers('');
            } else {
                alert('Login First');
                
                return <Link to="/user-login" className="btn btn-primary">Login First</Link>;
            }
        } else {
            alert('Please fill out all fields');
        }
    };
    const viewbook = () => {
        window.location.href = '/my-bookings';

    }

    return (
        <div className="container-fluid">
            <div id="book" className="row">
                <div className="col-lg-3 col-md-12"></div>
                <div className="col-lg-6 col-md-12">
                    <form onSubmit={book} className="text-center pt-4 ps-5 pe-5 pb-3 bg-white container w-75 mt-3 mb-3">
                        <h1 className="mb-4" style={{ color: 'rgb(107, 172, 45)' }}>Let's Plan Your Trip</h1>

                        <input
                            name="name"
                            type="text"
                            placeholder="Name"
                            className="form-control"
                            value={name}
                            onChange={handleInputChange}
                            required
                        />
                        <br />

                        <input
                            name="email"
                            type="email"
                            placeholder="Email-Id"
                            className="form-control"
                            value={email}
                            onChange={handleInputChange}
                            required
                        />
                        <br />

                        <input
                            name="phn"
                            type="number"
                            placeholder="Phone Number"
                            className="form-control"
                            value={phn}
                            onChange={handleInputChange}
                            required
                        />
                        <br />

                        <input
                            name="destination"
                            type="text"
                            placeholder="Travel Destination"
                            className="form-control"
                            value={destination}
                            onChange={handleInputChange}
                            required
                        />
                        <br />

                        <input
                            name="duration"
                            type="text"
                            placeholder="Duration"
                            className="form-control"
                            value={duration}
                            onChange={handleInputChange}
                            required
                        />
                        <br />

                        <input
                            name="sdate"
                            type="text"
                            onFocus={(e) => e.target.type = 'date'}
                            onBlur={(e) => e.target.type = 'text'}
                            placeholder="Starting Date"
                            className="form-control"
                            value={sdate}
                            onChange={handleInputChange}
                            required
                        />
                        <br />

                        <input
                            name="travellers"
                            type="text"
                            placeholder="No. of Travellers"
                            className="form-control"
                            value={travellers}
                            onChange={handleInputChange}
                            required
                        />
                        <br />

                        <button type="submit" className="w-100 text-white p-2 mb-2"
                            style={{ backgroundColor: 'rgb(107, 172, 45)', fontSize: '20px', fontWeight: '500', border: 'none' }}>
                            Submit
                        </button>
                    </form>
                </div>
                <div className="col-lg-3 col-md-12"> 
                    <button onClick={viewbook} class="btn btn-primary py-md-3 px-md-5 mt-2" id="button-default">view booking</button>
                </div>
            </div>
        </div>
    );
};

export default BookNowComponent;
