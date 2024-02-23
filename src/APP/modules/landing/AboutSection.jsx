import React from "react";

const AboutSection = () => {
  return (
    <div id= "about" className="bg-green-900">
      <div className="p-16">
        <h1 className="text-white text-5xl flex justify-center pb-4">ABOUT</h1>
        <div className="bg-green-300">
        <p className="p-32 text-lg">
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
