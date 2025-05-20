import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Login from './Login';
import Register from './Register';
import Welcome from '../Dashboard/Welcome';

const AuthWrapper = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const [view, setView] = useState('login');

  if (isLoggedIn) return <Welcome />;

  return (
    <div className="p-4 text-center">
      <div className="mb-4">
        <button
          onClick={() => setView('login')}
          className={`px-4 py-2 mr-2 rounded ${view === 'login' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Login
        </button>
        <button
          onClick={() => setView('register')}
          className={`px-4 py-2 rounded ${view === 'register' ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
        >
          Register
        </button>
      </div>
      {view === 'login' ? <Login /> : <Register />}
    </div>
  );
};

export default AuthWrapper;
