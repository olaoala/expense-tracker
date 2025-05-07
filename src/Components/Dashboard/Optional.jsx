import React from 'react';

const fixedExpenses = [
  { name: 'Netflix', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' },
  { name: 'Spotify', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg' },
  { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
  { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
  { name: 'Facebook', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Facebook_icon.svg' },
];

const OptionalSection = () => {
  return (
    <div className="bg-white w-full  ">
      {/* Title */}
      <h2 className="text-md text-center font-semibold text-black mb-2 relative">Optionals</h2>
      <hr className="border-dotted border-t border-gray-400" />

      {/* Fixed Expense Section */}
      <div className="bg-lcreame p-2 rounded my-3">
        <h3 className="uppercase font-bold text-xs text-center text-black mb-2">Choose any Fixed Expense</h3>
        <ul className="space-y-1">
          {fixedExpenses.map((item, index) => (
            <li key={index} className="flex items-center justify-between p-1">
              <div className="flex items-center gap-3">
                <div className="border-2 border-green-500 rounded-full p-1">
                  <img src={item.logo} alt={item.name} className="w-8 h-8 object-contain" />
                </div>
                <span className="text-sm font-medium">{item.name}</span>
              </div>
              <button className="text-black  bg-green-600 px-3 py-1 rounded-xl text-xs hover:bg-green-600 hover:text-white transition">
                Select
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Goal Section Divider */}
      <hr className="border-dotted border-t border-gray-400 my-1" />

      {/* Goals Section */}
      <div>
        <h3 className="text-center text-xl font-semibold mb-4">Goals</h3>
        <div className="flex items-center gap-2">
          <div className="w-1 h-6 bg-green-500"></div>
          <p className="text-xs text-gray-700 font-bold">
            "Save 10% of this amount entered this <br /> month <br /> from my salary"
          </p>
        </div>
      </div>
    </div>
  );
};

export default OptionalSection;
