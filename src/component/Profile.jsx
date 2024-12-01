import React from 'react';
import Sidebar from './Sidebar';

const Profile = () => {
    const email = "asheqmahmud@gmail.com"
    return (
        <div>
<Sidebar></Sidebar>
<div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Asheq mahmud</h1>
      <p className="py-6">
        <span className='underline'>Email Address</span>: {email}
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Profile;