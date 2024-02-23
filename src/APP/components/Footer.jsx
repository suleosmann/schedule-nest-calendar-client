import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-green-300 text-white py-4  w-full">
      <div className="container mx-auto text-center">
        <p className="text-sm text-gray-700">&copy; ScheduleNest {currentYear}</p>
      </div>
    </footer>
  );
};

export default Footer;
