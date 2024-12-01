import React from 'react';
import Sidebar from './Sidebar';
import auth from '../../firebase.config';
import { onAuthStateChanged } from "firebase/auth";
import  { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';


const Profile = () => {
    
    const email = "asheqmahmud@gmail.com"
    
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            setIsLoggedIn(true);
          } else {
            setIsLoggedIn(false);
          }
        });
      
        return () => unsubscribe(); // Clean up listener
      }, []);
      

    
    return (
        <div>
{
    isLoggedIn ? (<div>
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
    </div>):(<div className='flex items-center my-[250px]'> <Link className='mx-auto' to={"/login"}><button className='btn btn-accent w-auto text-3xl'>Please Login</button></Link> </div>)
}


        </div>
    );
};

export default Profile;