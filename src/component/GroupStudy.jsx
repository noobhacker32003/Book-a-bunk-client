import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { Link, useLoaderData } from 'react-router-dom';

const GroupStudy = () => {

  const room = useLoaderData();
  const [rooms, setrooms] = useState(room);



    // const cards = [
    //     {
    //       id: 1,
    //       image: "https://libraries.uh.edu/images/studyrooms-018.jpg",
    //       title: "Room 1",
    //       description: "Spacious and well-furnished room with a great view.",
    //     },
    //     {
    //       id: 2,
    //       image: "https://blogs.bodleian.ox.ac.uk/science/wp-content/uploads/sites/140/2023/10/Group-Study-Room-1.png",
    //       title: "Room 2",
    //       description: "Cozy room with modern amenities for a comfortable stay.",
    //     },
    //     {
    //       id: 3,
    //       image: "https://www.lib.utk.edu/wp-content/uploads/sites/44/files/2020/01/hodges-commons-group-study-rooms-scaled.jpg",
    //       title: "Room 3",
    //       description: "A luxurious room with elegant decor and top-notch facilities.",
    //     },
    //     {
    //       id: 4,
    //       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcr6xAjRJP41TA4RLGS3NzoluCBUeD7cgKww&s",
    //       title: "Room 4",
    //       description: "Budget-friendly room with all basic amenities.",
    //     },
    //     {
    //       id: 5,
    //       image: "https://libraries.usc.edu/sites/default/files/inline-images/NML%20group%20room_0.jpg",
    //       title: "Room 5",
    //       description: "A perfect space for relaxation and rejuvenation.",
    //     },
    //     {
    //       id: 6,
    //       image: "https://library.fresnostate.edu/sites/all/assets/img/content/spaces-group-room.jpg",
    //       title: "Room 6",
    //       description: "Elegant room with premium services for business travelers.",
    //     },
    //   ];
    return (
<div className="container mx-auto my-10">
<Sidebar></Sidebar>
    <h1 className="text-3xl font-bold text-center mb-6">Available Study Rooms</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {rooms.map((card) => (
        <div key={card.id} className="card bg-base-100 shadow-xl">
        <figure>
            <img className='w-[490px] h-[368px]' src={card.image} alt={card.title} />
        </figure>
        <div className="card-body">
            <h2 className="card-title">{card.title}</h2>
            <p>{card.description}</p>
            <div className="card-actions justify-end">
            <Link to={`/studyRoom/${card.id}`}><button className="btn btn-primary">Book Now</button></Link>
            
            </div>
        </div>
        </div>
    ))}
    </div>
</div>
    );
};

export default GroupStudy;