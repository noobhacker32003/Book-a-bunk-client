import React from 'react';

const BillingPage = () => {
  // Array containing all the billing page data
  const billingData = [
    { name: 'Pizza', price: 12.99 },
    { name: 'Burger', price: 8.99 },
    { name: 'Pasta', price: 10.99 },
  ];

  // Calculate the total price
  const totalPrice = billingData.reduce((total, item) => total + item.price, 0);

  // Function to return billing data
  const getBillingData = () => {
    return billingData;
  };

  console.log('Billing Data:', getBillingData()); // Example usage

  const handlePaymentChoice = (method) => {
    alert(`You chose ${method} payment.`);
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">Make your payment using any option given below!</h1>
      <div className="bg-white shadow-md p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
        <ul className="mb-4">
          {billingData.map((item, index) => (
            <li key={index} className="flex justify-between items-center text-gray-700 mb-2">
              <span>{item.name}</span>
              <span>${item.price.toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <div className="flex justify-between items-center text-xl font-bold text-gray-900">
          <span>Total:</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
      </div>
      <div className="mt-6 flex justify-center gap-4">
        <button
          onClick={() => handlePaymentChoice('Cash')}
          className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition"
        >
          Cash Payment
        </button>
        <button
          onClick={() => handlePaymentChoice('Online')}
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
        >
          Online Payment
        </button>
      </div>
    </div>
  );
};

export default BillingPage;
