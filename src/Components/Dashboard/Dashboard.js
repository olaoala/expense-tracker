import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { FiShoppingCart } from 'react-icons/fi';
import CalculationSection from './Calculation';
import OptionalSection from './Optional';

const COLORS = ['#00C49F', '#FFBB28'];
const data = [
  { name: 'Spent', value: 400 },
  { name: 'Remaining', value: 600 }
];

const Dashboard = () => {
  const isMobile = window.innerWidth < 768;

  const expenses = []; // Replace with real data if available

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="flex justify-between items-center px-12 py-4">
        <h1 className="text-xl font-bold">
        <span className="text-yellow text-sm">Expense</span> <br/>
           Monthly <span className="text-green-500">Budget</span>
        </h1>
        <div className="flex items-center gap-4">
          <button className="bg-yellow text-black px-4 py-2 rounded">New Expense</button>
          <span>Welcome Alex</span>
        </div>
      </header>
      <hr className='mx-10'/>
      

      {/* Body */}
      <main className="flex flex-col md:flex-row p-6 gap-6">
        {/* Expenses Section */}
        <section className="md:w-1/2 w-full bg-black p-3">
          <div className="flex justify-between items-center mb-4">
            <span className="text-yellow text-sm">Description</span>
            <div className="bg-black border w-13 border-yellow text-white  ">
            <span>Filter|</span>
            <select className="bg-black" >
              <option> All</option>
              <option>Today</option>
              <option>This Week</option>
              <option>This Month</option>
            </select>
            </div>
     
          </div>
          {isMobile ? (
            <ul className="space-y-3">
              {['Debt', 'Food', 'Transport', 'Hobbies', 'Rent', 'Savings'].map((item, i) => (
                <li key={i} className="flex justify-between border-b border-gray-700 pb-2">
                  <span>{item}</span>
                  <span className="text-gray-400 text-sm">₦{(i + 1) * 5000} - 2025-04-29</span>
                </li>
              ))}
            </ul>
          ) : (
            <div className="text-center mt-20">
              <p className="text-lg">Looks like you haven't added any expenses yet.</p>
              <p className="text-sm text-gray-400 mt-2">
                No worries, just hit the <span className="text-green-500">'Add'</span> button to get started
              </p>
              <div className="flex justify-center mt-6">
                <FiShoppingCart size={48} className="text-gray-500" />
              </div>
            </div>
          )}
        </section>

        {/* Calculation Section */}
        <section className="bg-off text-black p-6 rounded w-full md:w-1/4">
         <CalculationSection/>
        </section>

        {/* Optional Section */}
        <section className="bg-off text-black p-6 rounded w-full md:w-1/4">
         <OptionalSection/>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
