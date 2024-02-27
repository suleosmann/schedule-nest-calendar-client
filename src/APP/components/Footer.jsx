import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-green-300 to-green-500 text-white py-5  w-full">
      <div className="container mx-auto text-center">
        <p className="text-sm text-gray-700">&copy; ScheduleNest {currentYear}</p>
      </div>
    </footer>
  );
};

export default Footer;
