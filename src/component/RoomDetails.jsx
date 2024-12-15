import React, { useState } from 'react';
import { useParams, Link, useLoaderData } from 'react-router-dom';
import Sidebar from './Sidebar';
const RoomDetails = () => {

  const roomData = useLoaderData();
  const [rooms, setrooms] = useState(roomData);
//   // Sample room data (this would come from a DB in real-world use)
// const cards = [
//     {
//       id: 1,
//       image: "https://static-otelico.com/cache/hotel_aragon_perpignan/1000020937_1.jpg",
//       title: "Room 1",
//       description: "Spacious and well-furnished room with a great view.",
//       price: 150, // Example price from DB
//     },
//     {
//       id: 2,
//       image: "https://static-otelico.com/cache/hotel_aragon_perpignan/1000020937_1.jpg",
//       title: "Room 2",
//       description: "Cozy room with modern amenities for a comfortable stay.",
//       price: 120, // Example price from DB
//     },
//     {
//       id: 3,
//       image: "https://static-otelico.com/cache/hotel_aragon_perpignan/1000020937_1.jpg",
//       title: "Room 3",
//       description: "A luxurious room with elegant decor and top-notch facilities.",
//       price: 250, // Example price from DB
//     },
//     {
//       id: 4,
//       image: "https://static-otelico.com/cache/hotel_aragon_perpignan/1000020937_1.jpg",
//       title: "Room 4",
//       description: "Budget-friendly room with all basic amenities.",
//       price: 80, // Example price from DB
//     },
//     {
//       id: 5,
//       image: "https://static-otelico.com/cache/hotel_aragon_perpignan/1000020937_1.jpg",
//       title: "Room 5",
//       description: "A perfect space for relaxation and rejuvenation.",
//       price: 200, // Example price from DB
//     },
//     {
//       id: 6,
//       image: "https://static-otelico.com/cache/hotel_aragon_perpignan/1000020937_1.jpg",
//       title: "Room 6",
//       description: "Elegant room with premium services for business travelers.",
//       price: 180, // Example price from DB
//     },
//   ];

  // Retrieve the room id from the URL
  const { id } = useParams();
  
  // Find the room that matches the id from the URL
  const room = rooms.find(card => card.id === parseInt(id));

  if (!room) {
    return (
      <div className="container mx-auto my-10">
        <h1 className="text-3xl font-bold text-center mb-6 text-red-500">Room not found</h1>
        <p className="text-center">The room with the specified ID could not be found.</p>
      </div>
    );
  }

  // Booking state (date and time)
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [error, setError] = useState('');

  // Handle booking logic with date and time validation
  const handleBooking = () => {
    // Reset error message on new booking attempt
    setError('');

    // Get today's date at midnight for comparison
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Reset time to midnight for comparison

    // Convert the selected date to a Date object
    const selectedDate = new Date(date);
    
    // Check if the selected date is in the past
    if (selectedDate < today) {
      setError('You cannot book a room on a past date. Please select a future date.');
      return;
    }

    // If the selected date is today, check if the time is in the future
    if (selectedDate.getTime() === today.getTime()) {
      const selectedTime = new Date(`${date}T${time}`);
      const currentTime = new Date();

      if (selectedTime < currentTime) {
        setError('You cannot book a room for a past time today. Please select a future time.');
        return;
      }
    }

    // Check if both date and time are selected
    if (date && time) {
      alert(`Booking successful for ${room.title} on ${date} at ${time}.`);
    } else {
      setError('Please select both date and time to proceed with the booking.');
    }
  };

  return (
    <div className="container mx-auto my-10 px-4">
    <Sidebar></Sidebar>
      {/* Room Header */}
      <h1 className="text-4xl font-bold text-center mb-6">{room.title}</h1>
      
      {/* Room Image */}
      <div className="flex justify-center mb-8">
        <img src={room.image} alt={room.title} className="w-full max-w-2xl rounded-lg shadow-lg" />
      </div>

      {/* Room Data */}
      <div className="text-lg mb-8">
        <p className="text-xl font-semibold mb-4">Room ID: <span className="text-blue-500">{room.id}</span></p>
        <p className="mb-4">{room.description}</p>
        <p className="text-xl font-semibold mb-4">Price: <span className="text-green-500">${room.pricePerNight} per night</span></p>
      </div>

      {/* Error Message */}
      {error && (
        <div className="text-red-500 font-semibold mb-4 text-center">
          {error}
        </div>
      )}

      {/* Booking Form */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Book This Room</h2>
        
        <label className="block mb-2">Select Date</label>
        <input
          type="date"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        
        <label className="block mb-2">Select Time</label>
        <input
          type="time"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        
        <button
          onClick={handleBooking}
          className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600"
        >
          Confirm Booking
        </button>
      </div>

      {/* Navigation Back to Room List */}
      <div className="text-center mt-6">
        <Link to="/rooms" className="text-blue-500">Back to Available Rooms</Link>
      </div>
    </div>
  );
};

export default RoomDetails;
