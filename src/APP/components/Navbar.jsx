import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import useNavigation from '../hooks/useNavigation'; // Import the custom hook

const Navbar = () => {
  const navigate = useNavigation(); // Initialize the navigate function from the custom hook

  return (
    <nav className="bg-lime-600">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faStar} className="text-yellow-200 mr-2" />
            <span className="text-black text-xl font-semibold">ScheduleNest</span>
          </div>
          <div className="flex items-center space-x-4">
            {/* Navbar links */}
            <a href="/" className="text-black px-3 py-2 rounded-md text-sm font-medium">Home</a>
            <a href="#features" className="text-black px-3 py-2 rounded-md text-sm font-medium">Features</a>
            <a href="#about" className="text-black px-3 py-2 rounded-md text-sm font-medium">About</a>
            {/* Get Started button */}
            <a href="#" className="text-stone-800 px-4 py-2 rounded-md text-sm font-medium bg-yellow-100 hover:bg-stone-800 hover:text-white active:bg-orange-500 focus:outline-none focus:ring focus:ring-green-900" onClick={() => navigate('/authentication/signup')}>
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
