import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';

const foodItems = [
  {
    id: 1,
    name: "Pizza",
    description: "Delicious cheese pizza with fresh toppings.",
    imageUrl: "/Images/pizza.jpg",
    price: 12.99,
  },
  {
    id: 2,
    name: "Burger",
    description: "Juicy beef burger with crispy lettuce and tomatoes.",
    imageUrl: "/Images/burger.jpg",
    price: 8.99,
  },
  {
    id: 3,
    name: "Pasta",
    description: "Creamy Alfredo pasta with garlic bread.",
    imageUrl: "/Images/pasta.jpg",
    price: 10.99,
  },
  {
    id: 4,
    name: "Salad",
    description: "Fresh garden salad with a variety of vegetables.",
    imageUrl: "/Images/salad.jpg",
    price: 6.99,
  },
  {
    id: 5,
    name: "Biriyani",
    description: "Assorted biriyani platter with fresh meat.",
    imageUrl: "/Images/biriyani.jpg",
    price: 15.99,
  },
  {
    id: 6,
    name: "Tacos",
    description: "Spicy chicken tacos with fresh salsa.",
    imageUrl: "/Images/tacos.jpg",
    price: 9.99,
  },
  {
    id: 7,
    name: "Steak",
    description: "Grilled steak cooked to perfection.",
    imageUrl: "/Images/steak.jpg",
    price: 19.99,
  },
  {
    id: 8,
    name: "Ice Cream",
    description: "Creamy vanilla ice cream with chocolate sauce.",
    imageUrl: "/Images/ice cream.jpg",
    price: 4.99,
  },
  {
    id: 9,
    name: "Soup",
    description: "Warm and comforting tomato soup.",
    imageUrl: "/Images/soup.jpg",
    price: 5.99,
  },
];


const Foodorder = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeFromCart = (indexToRemove) => {
    setCart((prevCart) => prevCart.filter((_, index) => index !== indexToRemove));
  };

  const handleProceed = () => {
    navigate('/billing', { state: { cart } }); // Navigate to Billing Page with cart data
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <Sidebar></Sidebar>
      <h1 className="text-4xl font-bold text-center mb-8">Food Order </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {foodItems.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={item.imageUrl}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">{item.name}</h2>
              <p className="text-gray-700 text-sm mb-2">{item.description}</p>
              <p className="text-gray-900 font-bold">${item.price.toFixed(2)}</p>
              <button
                onClick={() => addToCart(item)}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 bg-white shadow-md p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Cart</h2>
        {cart.length > 0 ? (
          <ul>
            {cart.map((item, index) => (
              <li key={index} className="flex justify-between items-center text-gray-700 mb-2">
                <span>{item.name} - ${item.price.toFixed(2)}</span>
                <button
                  onClick={() => removeFromCart(index)}
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-700">Your cart is empty.</p>
        )}
        {cart.length > 0 && (
          <button
            onClick={handleProceed}
            className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
          >
            Proceed
          </button>
        )}
      </div>
    </div>
  );
};



export default Foodorder;