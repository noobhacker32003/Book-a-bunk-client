import React from 'react';
import {  NavLink, useNavigate } from 'react-router-dom';
import Slidebar from './Sidebar';
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase.config"


const Login = () => {
    const navigate = useNavigate()
    const handleLogin = e =>
    
        {
            e.preventDefault();
            const email = e.target.email.value;
            const password = e.target.password.value;
            

            signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log("yes");
            navigate("/")
            
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
            
            
            
            
            
        }
       
        
        

    return (
        <div>
            <Slidebar></Slidebar>
            <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold w-[500px]">Login now!</h1>
                <p className="py-6">
                    
                    
                </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form className="card-body" onSubmit={handleLogin}>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input name ="email" type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input name ="password" type="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                    <label className="label">
                        <a  className="label-text-alt text-base ">You haven't any account? Please <NavLink to="/register"><span className='text-blue-700  link'>register</span></NavLink></a>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                    <button className="btn btn-primary mt-2 "><img className='' src="https://i.ibb.co.com/W5ZPQrC/google.png" alt="" /> Google</button>
                    <button className="btn btn-primary mt-2 "><img className='bg-white rounded-2xl' src="https://i.ibb.co.com/Dbnh7YZ/icons8-github-32.png" alt="" />Github</button>
                    </div>
                </form>
                </div>
            </div>
            </div>        
        </div>
    );
};

export default Login;