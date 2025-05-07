import React from 'react';

const Balance = () => {
  const balance = 1500;  // Mocked balance data

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
      <h2 className="text-xl font-semibold text-gray-800">Balance</h2>
      <p className="text-2xl text-gray-600 mt-2">${balance}</p>
    </div>
  );
};

export default Balance;
