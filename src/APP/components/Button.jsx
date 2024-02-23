import React from 'react';

const Button = ({ children }) => {
  return (
    <button className="mt-4 text-white px-5 py-2 rounded-md text-sm font-medium bg-green-500 hover:bg-green-600">
      {children}
    </button>
  );
};

export default Button;
