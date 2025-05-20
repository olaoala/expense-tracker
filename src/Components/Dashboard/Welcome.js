import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCalculation } from '../../redux/slices/authslices' // adjust path
import Dashboard from './Dashboard';

const WelcomePage = () => {
  const { isCalculated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [income, setIncome] = useState('');
  const [goal, setGoal] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setCalculation({ income, goal }));
  };

  if (isCalculated) return <Dashboard />;

  return (
    <div className="flex flex-col md:flex-row h-screen w-full">
      <div className="hidden md:flex flex-col justify-between bg-creame w-1/2 p-10 text-white">
        <div className="text-4xl font-semibold mt-10">
          Calculate smarter,<br />
          spend wiser ...
        </div>
        <div className="w-full">
          <img
            src="https://via.placeholder.com/300x200"
            alt="mock"
            className="w-full object-contain"
          />
        </div>
      </div>

      <div className="bg-black text-white w-full h-full md:w-1/2 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Monthly <span className="text-green-500">Budget</span>
          </h2>
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <input
              type="number"
              placeholder="Insert your Income"
              value={income}
              onChange={(e) => setIncome(e.target.value)}
              className="bg-black border-b border-gray-400 py-2 px-1 placeholder-gray-400 focus:outline-none text-center"
              onFocus={(e) => (e.target.placeholder = '')}
              onBlur={(e) => (e.target.placeholder = 'Insert your Income')}
            />
            <input
              type="text"
              placeholder="Insert your Name"
              value={income}
              onChange={(e) => setIncome(e.target.value)}
              className="bg-black border-b border-gray-400 py-2 px-1 placeholder-gray-400 focus:outline-none text-center"
              onFocus={(e) => (e.target.placeholder = '')}
              onBlur={(e) => (e.target.placeholder = 'Insert your Name')}
            />
            <input
              type="text"
              placeholder="Insert your Goal"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              className="bg-black border-b border-gray-400 py-2 px-1 placeholder-gray-400 focus:outline-none text-center"
              onFocus={(e) => (e.target.placeholder = '')}
              onBlur={(e) => (e.target.placeholder = 'Insert your Goal')}
            />
            <button
              type="submit"
              className="bg-yellow text-black py-2 rounded transition"
            >
              Start your calculation
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
