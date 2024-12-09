import React from 'react';
import { useParams } from 'react-router-dom';

const RoomDetails = () => {


  const cards = [
    {
        id: 1,
        image: "https://static-otelico.com/cache/hotel_aragon_perpignan/1000020937_1.jpg",
        title: "Room 1",
        description: "Spacious and well-furnished room with a great view.",
    },
    {
        id: 2,
        image: "https://static-otelico.com/cache/hotel_aragon_perpignan/1000020937_1.jpg",
        title: "Room 2",
        description: "Cozy room with modern amenities for a comfortable stay.",
    },
    {
        id: 3,
        image: "https://static-otelico.com/cache/hotel_aragon_perpignan/1000020937_1.jpg",
        title: "Room 3",
        description: "A luxurious room with elegant decor and top-notch facilities.",
    },
    {
        id: 4,
        image: "https://static-otelico.com/cache/hotel_aragon_perpignan/1000020937_1.jpg",
        title: "Room 4",
        description: "Budget-friendly room with all basic amenities.",
    },
    {
        id: 5,
        image: "https://static-otelico.com/cache/hotel_aragon_perpignan/1000020937_1.jpg",
        title: "Room 5",
        description: "A perfect space for relaxation and rejuvenation.",
    },
    {
        id: 6,
        image: "https://static-otelico.com/cache/hotel_aragon_perpignan/1000020937_1.jpg",
        title: "Room 6",
        description: "Elegant room with premium services for business travelers.",
    },
];


const { id } = useParams();
  

const room = cards.find(card => card.id === parseInt(id));

if (!room) {
  return (
    <div className="container mx-auto my-10">
      <h1 className="text-3xl font-bold text-center mb-6 text-red-500">Room not found</h1>
      <p className="text-center">The room with the specified ID could not be found.</p>
    </div>
  );
}

return (
  <div className="container mx-auto my-10 px-4">
    {/* Room Header */}
    <h1 className="text-4xl font-bold text-center mb-6">{room.title}</h1>
    
    {/* Room Image */}
    <div className="flex justify-center mb-8">
      <img src={room.image} alt={room.title} className="w-full max-w-2xl rounded-lg shadow-lg" />
    </div>

    {/* Room Data */}
    <div className="text-lg">
      <p className="text-xl font-semibold mb-4">Room ID: <span className="text-blue-500">{room.id}</span></p>
      <p className="text-xl font-semibold mb-4">Description:</p>
      <p>{room.description}</p>
    </div>

    {/* Additional Information (can be extended for more fields in the future) */}
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">More Details</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>ID:</strong> {room.id}</li>
        <li><strong>Title:</strong> {room.title}</li>
        <li><strong>Description:</strong> {room.description}</li>
        <li><strong>Image URL:</strong> <a href={room.image} target="_blank" rel="noopener noreferrer" className="text-blue-500">{room.image}</a></li>
      </ul>
    </div>

    {/* Book Now Button */}
    <div className="mt-6 text-center">
      <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600">
        Book Now
      </button>
    </div>
  </div>
);
};

export default RoomDetails;