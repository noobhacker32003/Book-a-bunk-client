import React from 'react';
import { useParams } from 'react-router-dom';

const StudyRoomDetails = () => {

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

  // Fetch study room details based on the id
  // For now, we'll just display the id
  return (
    <div className="container mx-auto my-10">
      <h1 className="text-3xl font-bold text-center mb-6">Study Room Details</h1>
      <p>Details for Study Room ID: {id}</p>
      {/* Add more study room details here */}
    </div>
  );
};

export default StudyRoomDetails;