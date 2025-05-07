import React from 'react';

const TransactionList = ({ transactions }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
      <h2 className="text-xl font-semibold text-gray-800">Transactions</h2>
      <ul className="mt-4">
        {transactions.map((transaction) => (
          <li key={transaction.id} className="flex justify-between py-2 border-b">
            <span className="text-gray-600">{transaction.title}</span>
            <span className={`text-lg ${transaction.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>
              {transaction.amount > 0 ? '+' : ''}${transaction.amount}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
