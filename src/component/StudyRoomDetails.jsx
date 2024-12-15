import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
const StudyRoomDetails = () => {

  // Sample study room data (this would come from a database in a real-world app)
  const studyRooms = [
    {
      id: 1,
      image: "https://libraries.uh.edu/images/studyrooms-018.jpg",
      title: "Study Room 1",
      description: "Spacious and quiet study room perfect for group study or individual work.",
      price: 20, // Example price for renting a study room
    },
    {
      id: 2,
      image: "https://libraries.uh.edu/images/studyrooms-018.jpg",
      title: "Study Room 2",
      description: "Cozy and modern study room with ample space for your books and materials.",
      price: 15,
    },
    {
      id: 3,
      image: "https://libraries.uh.edu/images/studyrooms-018.jpg",
      title: "Study Room 3",
      description: "A luxurious study room with great lighting and comfortable seating for long hours of study.",
      price: 25,
    },
    {
      id: 4,
      image: "https://libraries.uh.edu/images/studyrooms-018.jpg",
      title: "Study Room 4",
      description: "Budget-friendly study room with all essential amenities.",
      price: 12,
    },
    {
      id: 5,
      image: "https://libraries.uh.edu/images/studyrooms-018.jpg",
      title: "Study Room 5",
      description: "Perfect study room for focused work with a serene environment.",
      price: 18,
    },
    {
      id: 6,
      image: "https://libraries.uh.edu/images/studyrooms-018.jpg",
      title: "Study Room 6",
      description: "Premium study room with high-speed internet and all the necessary equipment.",
      price: 30,
    },
  ];

  // Retrieve the study room id from the URL params
  const { id } = useParams();

  // Find the study room that matches the ID from the URL
  const studyRoom = studyRooms.find(room => room.id === parseInt(id));

  // If the study room is not found, show a "Room not found" message
  if (!studyRoom) {
    return (
      <div className="container mx-auto my-10">
        <h1 className="text-3xl font-bold text-center mb-6 text-red-500">Study Room not found</h1>
        <p className="text-center">The study room with the specified ID could not be found.</p>
      </div>
    );
  }

  // Booking state for study room (if needed)
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [error, setError] = useState('');

  // Handle booking logic for study room
  const handleBooking = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const selectedDate = new Date(date);

    if (selectedDate < today) {
      setError('You cannot book a study room for a past date. Please select a future date.');
      return;
    }

    if (selectedDate.getTime() === today.getTime()) {
      const selectedTime = new Date(`${date}T${time}`);
      const currentTime = new Date();

      if (selectedTime < currentTime) {
        setError('You cannot book a study room for a past time today. Please select a future time.');
        return;
      }
    }

    if (date && time) {
      alert(`Booking successful for ${studyRoom.title} on ${date} at ${time}.`);
    } else {
      setError('Please select both date and time to proceed with the booking.');
    }
  };

  return (
    <div className="container mx-auto my-10 px-4">
      <Sidebar></Sidebar>
      {/* Study Room Header */}
      <h1 className="text-4xl font-bold text-center mb-6">{studyRoom.title}</h1>
      
      {/* Study Room Image */}
      <div className="flex justify-center mb-8">
        <img src={studyRoom.image} alt={studyRoom.title} className="w-full max-w-2xl rounded-lg shadow-lg" />
      </div>

      {/* Study Room Description */}
      <div className="text-lg mb-8">
        <p className="text-xl font-semibold mb-4">Study Room ID: <span className="text-blue-500">{studyRoom.id}</span></p>
        <p className="mb-4">{studyRoom.description}</p>
        <p className="text-xl font-semibold mb-4">Price: <span className="text-green-500">${studyRoom.price} per hour</span></p>
      </div>

      {/* Error Message */}
      {error && (
        <div className="text-red-500 font-semibold mb-4 text-center">
          {error}
        </div>
      )}

      {/* Booking Form */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Book This Study Room</h2>
        
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

      {/* Back Button */}
      <div className="text-center mt-6">
        <Link to="/studyRoom" className="text-blue-500">Back to Available Study Rooms</Link>
      </div>
    </div>
  );
};

export default StudyRoomDetails;
