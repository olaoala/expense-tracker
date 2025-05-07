import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const data = [{ name: 'Spent', value: 20 }, { name: 'Remaining', value: 80 }];
const COLORS = ['#22C55E', '#E5E7EB']; // green & gray

const CalculationSection = () => {
  const totalIncome = 12000000;
  const spent = 2400000;
  const available = totalIncome - spent;
  const spentPercentage = ((spent / totalIncome) * 100).toFixed(0);

  return (
    <div className="bg-off  rounded ">
      <div className="text-md text-center font-semibold text-black mb-2 relative">
        Calculation
        </div>
        <hr className="border-dotted border-t border-gray-400 " />
      {/* Income Box */}
      <div className="text-center bg-lcreame p-4 shadow-sm my-3">
        <p className="text-xs text-black font-bold">INCOME</p>
        <p className="text-lg text-black">${totalIncome.toLocaleString()}</p>
      </div>

      {/* Doughnut Pie Chart */}
      <div className="relative w-full flex justify-center items-center">
        <PieChart width={200} height={190}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={80}
            startAngle={90}
            endAngle={-270}
            dataKey="value"
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
        </PieChart>
        <div className="absolute text-center text-lg  text-black">
          {spentPercentage}% <br />
          <span className="text-sm">Spent</span>
        </div>
      </div>

      {/* Available vs Spent */}
      <div className="w-full flex justify-center ">
      <div className="w-full max-w-md ">
        <div className="flex justify-between gap-4">
          {/* Available Box */}
          <div className="bg-black text-white p-2 rounded text-center flex-1 ">
            <p className="text-xs font-bold">Available</p>
            <p className=" text-sm text-green-600">${available.toLocaleString()}</p>
          </div>

          {/* Spent Box */}
          <div className="bg-black text-white p-2 rounded text-center flex-1">
            <p className="text-xs font-bold ">Spent</p>
            <p className="text-sm text-yellow">${spent.toLocaleString()}</p>
          </div>
        </div>
        <div className='border-b border-dotted mt-5 border-creame'></div>

        {/* Reset Button */}
        <div className="mt-6 flex justify-center">
          <button className="bg-yellow text-black px-12 py-2 rounded font-medium">
            Reset Expenses
          </button>
        </div>
      </div>
</div>

    </div>
  );
};

export default CalculationSection;
