import React from "react";

const AboutSection = () => {
  return (
    <div id="about" className="bg-lime-200 text-white py-5 md:py-15">
      <div className="p-16">
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-center text-stone-800 mb-8 mt-0">ABOUT</h2>
        <div className="bg-gradient-to-r from-green-300 to-green-600 rounded-lg p-8 relative">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('src/APP/assets/bgcalendarimg.jpg')", minWidth: '100%', minHeight: '100%' }}></div>
          <div className="relative z-10">
            <p className="p-20 text-lg md:text-xl lg:text-2xl text-white">
              At ScheduleNest, we're dedicated to simplifying scheduling for busy individuals. Our intuitive platform offers seamless calendar integration, color-coded event categorization, and effortless recurring event management, empowering you to take control of your time and achieve greater balance in your life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
