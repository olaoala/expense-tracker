import React, { useState } from 'react';

const AddTransaction = ({ addTransaction }) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a new transaction object
    const newTransaction = {
      id: Date.now(), // Use Date.now() as a unique ID
      title,
      amount: parseFloat(amount),
    };
    // Pass the new transaction to the parent component
    addTransaction(newTransaction);
    // Reset the form fields
    setTitle('');
    setAmount('');
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
      <h2 className="text-xl font-semibold text-gray-800">Add Transaction</h2>
      <form className="mt-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Transaction Title"
          className="w-full p-2 mb-4 border rounded-md"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          className="w-full p-2 mb-4 border rounded-md"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md">
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;
