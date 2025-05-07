import React from 'react';

const IncomeExpenseSummary = ({ transactions }) => {
  // Calculate income and expense totals
  const income = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, curr) => acc + curr.amount, 0);
  const expense = transactions
    .filter((transaction) => transaction.amount < 0)
    .reduce((acc, curr) => acc + Math.abs(curr.amount), 0);

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
      <h2 className="text-xl font-semibold text-gray-800">Income/Expense Summary</h2>
      <div className="mt-4 flex justify-between">
        <div className="text-center">
          <h3 className="text-gray-600">Income</h3>
          <p className="text-xl text-green-600">${income}</p>
        </div>
        <div className="text-center">
          <h3 className="text-gray-600">Expenses</h3>
          <p className="text-xl text-red-600">${expense}</p>
        </div>
      </div>
    </div>
  );
};

export default IncomeExpenseSummary;
