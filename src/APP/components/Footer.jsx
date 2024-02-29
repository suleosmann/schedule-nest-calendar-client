import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-lime-600 text-white py-5  w-full">
      <div className="container mx-auto text-center">
        <p className="text-sm text-stone-950">&copy; ScheduleNest {currentYear}</p>
      </div>
    </footer>
  );
};

export default Footer;
