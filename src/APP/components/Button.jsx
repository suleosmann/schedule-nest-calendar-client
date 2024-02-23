import React from 'react';

const Button = ({ children }) => {
  return (
    <button className='bg-orange-400 rounded pt-2 pr-2 pl-2 pb-1'>
      {children}
    </button>
  );
};

export default Button;
