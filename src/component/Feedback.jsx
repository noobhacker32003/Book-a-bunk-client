import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import { Link, useNavigate } from 'react-router-dom';
//import axios from 'axios';
import Swal from 'sweetalert2';

const Feedback = () => {
    const navigate = useNavigate();

    const [feedbacks, setFeedbacks] = useState([]);
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      rating: '',
      message: ''
    });
    
    
    useEffect(() => {
        fetch('http://localhost:5000/feedback')
        .then(res => res.json())
        .then(data => setFeedbacks(data))
        
        
    }, [])
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        

        fetch('http://localhost:5000/feedback', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                
                if (data.insertedId) {
                    
                    //console.log('successfully added');
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee added successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                    e.target.reset();
                    

                }
            })
      };
    
      return (
        <div className="max-w-4xl mx-auto p-8">
            <Sidebar></Sidebar>
          <h2 className="text-3xl font-bold text-center mb-6">Customer Feedback</h2>
    
          <form className="bg-white shadow-md rounded-lg p-6 mb-6" onSubmit={handleSubmit}>
            <h3 className="text-xl font-semibold mb-4">Add Your Feedback</h3>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700" htmlFor="rating">Rating (1-5)</label>
              <input
                type="number"
                id="rating"
                name="rating"
                value={formData.rating}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                min="1"
                max="5"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                rows="4"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit Feedback
            </button>
          </form>
    
          <div className="space-y-6">
            {feedbacks.length > 0 ? (
              feedbacks.map((feedback, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md rounded-lg p-6 border border-gray-200 hover:shadow-lg transition"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">{feedback.name}</h3>
                    <span className="text-yellow-500 font-medium">Rating: {feedback.rating} / 5</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">{feedback.email}</p>
                  <p className="text-gray-800 mt-4">{feedback.message}</p>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">No feedback available yet.</p>
            )}
          </div>
        </div>
      );
    };
  
export default Feedback;
