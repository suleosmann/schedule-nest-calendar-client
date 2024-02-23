import React from 'react';
import useNavigation from '../hooks/useNavigation'; // Import the custom hook

const Button = ({ children, path }) => {
  const navigate = useNavigation(); // Initialize the navigate function from the custom hook

  const handleButtonClick = () => {
    // Call the navigate function with the specified path when the button is clicked
    navigate(path);
  };

  return (
    <button
      className="mt-4 mr-6 text-white px-7 py-3 rounded-md text-sm font-medium bg-green-500 hover:bg-green-600"
      onClick={handleButtonClick} // Attach the click event handler
    >
      {children}
    </button>
  );
};

export default Button;
