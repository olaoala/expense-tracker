import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthWrapper from './Components/Auth/AuthWrapper';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <AuthWrapper />
      </div>
    </Router>
  );
}

export default App;
