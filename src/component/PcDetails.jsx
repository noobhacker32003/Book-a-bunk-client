import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';

const data = [
  {
    id: 1,
    title: "PC 01",
    description: "For Daily Use",
    pricePerHour: 10,
    imageUrl: "/Images/Image1.jpg",
  },
  {
    id: 2,
    title: "PC 02",
    description: "For Programming Purpose",
    pricePerHour: 15,
    imageUrl: "/Images/Image1.jpg",
  },
  {
    id: 3,
    title: "PC 03",
    description: "For Programming Purpose",
    pricePerHour: 15,
    imageUrl: "/Images/Image1.jpg",
  },
  {
    id: 4,
    title: "PC 04",
    description: "For Gaming Purpose",
    pricePerHour: 20,
    imageUrl: "/Images/Image1.jpg",
  },
  {
    id: 5,
    title: "PC 05",
    description: "For Gaming Purpose",
    pricePerHour: 20,
    imageUrl: "/Images/Image1.jpg",
  },
];

const PcDetails = () => {
  const { id } = useParams(); // Get the PC ID from the URL params
  const navigate = useNavigate(); // For navigation after booking
  const pc = data.find((item) => item.id === parseInt(id)); // Find the PC based on the ID

  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [duration, setDuration] = useState(1); // Default duration in hours
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleBooking = async () => {
    setError('');
    setSuccess('');

    // Validate input
    if (!date || !time || duration <= 0) {
      setError('Please select a valid date, time, and duration.');
      return;
    }

    const selectedDateTime = new Date(`${date}T${time}`);
    const now = new Date();

    if (selectedDateTime < now) {
      setError('You cannot book a PC for a past date or time.');
      return;
    }

    const bookingDetails = {
      pcId: pc.id,
      title: pc.title,
      date,
      time,
      duration,
      totalCost: pc.pricePerHour * duration,
    };

    try {
      const response = await fetch('http://localhost:5000/pc-bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingDetails),
      });

      const result = await response.json();

      if (result.acknowledged) {
        setSuccess(`Booking confirmed for ${pc.title} on ${date} at ${time}.`);
        setTimeout(() => navigate('/pcaccess'), 2000); // Redirect after 2 seconds
      } else {
        setError('Failed to book the PC. Please try again.');
      }
    } catch (error) {
      setError('An error occurred while booking. Please try again later.');
    }
  };

  if (!pc) {
    return (
      <div className="container mx-auto my-10">
        <h1 className="text-3xl font-bold text-center text-red-500">PC not found</h1>
        <p className="text-center">The PC with the specified ID could not be found.</p>
      </div>
    );
  }

  return (
    <div>
    <Sidebar></Sidebar>
    <div className="container mx-auto my-10 px-4">
      <h1 className="text-4xl font-bold text-center mb-6">{pc.title}</h1>
      <div className="flex justify-center mb-8">
        <img src={pc.imageUrl} alt={pc.title} className="w-full max-w-2xl rounded-lg shadow-lg" />
      </div>
      <p className="text-lg mb-4">{pc.description}</p>
      <p className="text-lg font-semibold mb-4">
        Price: <span className="text-green-500">${pc.pricePerHour} per hour</span>
      </p>
      <div className="mb-4">
        {error && <p className="text-red-500 mb-2">{error}</p>}
        {success && <p className="text-green-500 mb-2">{success}</p>}
        <div className="mb-4">
          <label className="block text-sm font-medium">Select Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Select Time</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Duration (hours)</label>
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
            className="w-full p-2 border border-gray-300 rounded"
            min="1"
          />
        </div>
        <button
          onClick={handleBooking}
          className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600"
        >
          Confirm Booking
        </button>
      </div>
    </div>
    </div>
  );
};

export default PcDetails;
