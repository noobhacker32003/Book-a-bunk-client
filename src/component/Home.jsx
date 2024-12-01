import React from 'react';

import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';
import Carousel from './Carousel';
import RoomBooking from './RoomBooking';

const Home = () => {
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

    
    return (
        <div>
            
<Sidebar></Sidebar>
<div className='flex w-full justify-end'>
    
    
    <Link to="/login"><button className={`p-2 mr-9 mt-5 btn btn-accent w-28 `}>Login</button> </Link>
</div>

<div className=''><h1 className='text-center text-5xl '>Book a bunk</h1></div>
<Carousel></Carousel>
<div className="container mx-auto my-10">
    
      <h1 className="text-3xl font-bold text-center mb-6">Available Rooms</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div key={card.id} className="card bg-base-100 shadow-xl">
            <figure>
              <img src={card.image} alt={card.title} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{card.title}</h2>
              <p>{card.description}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Book Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

<div className="w-full flex mx-[700px]">
<Link to="/rooms"><button className='btn btn-accent'>More rooms</button></Link>
</div>

    <div className="container mx-auto my-10">

    <h1 className="text-3xl font-bold text-center mb-6">Available Study rooms</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {cards.map((card) => (
        <div key={card.id} className="card bg-base-100 shadow-xl">
        <figure>
            <img src="https://libraries.uh.edu/images/studyrooms-018.jpg" alt={card.title} />
        </figure>
        <div className="card-body">
            <h2 className="card-title">{card.title}</h2>
            <p>{card.description}</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary">Book Now</button>
            </div>
        </div>
        </div>
    ))}
    </div>
</div>

<div className="w-full flex mx-[700px] mb-10">
<button className='btn btn-accent'>More study rooms</button>
</div>

        </div>
    );
};

export default Home;