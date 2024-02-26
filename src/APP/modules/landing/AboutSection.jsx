import React from "react";

const AboutSection = () => {
  return (
    <div id= "about" className="bg-gradient-to-r from-green-800 to-green-400 text-white">
      <div className="p-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-center mb-8">ABOUT</h1>
        <div className="bg-gradient-to-r from-green-300 to-green-600 rounded-lg p-8">
        <p className="p-20 text-lg md:text-xl lg:text-2xl">
          At ScheduleNest, we're dedicated to simplifying scheduling for busy
          individuals. Our intuitive platform offers seamless calendar
          integration, color-coded event categorization, and effortless
          recurring event management, empowering you to take control of your
          time and achieve greater balance in your life.
        </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
