import React from "react";
import bgcalenderimg from "../../assets/bgcalendarimg.jpg"
import aboutcalender from "../../assets/aboutcalender2.jpg"

const AboutSection = () => {
  return (
    <div id= "about" className="flex justify-center bg-gradient-to-r from-green-800 to-green-400 text-white h-screen">
      <div className="w-[50vw] h-[60vh] mt-52 mr-20 bg-red-300 rounded-lg">
        <img
          src={aboutcalender}
          alt="Calendar"
          className="w-full h-full rounded-lg shadow-md"
        />

      </div>
      <div className="w-[40vw] h-[60vh] mt-52 bg-green-100 rounded-lg">
      
      <h1 className="font-['Open_Sans'] text-4xl md:text-5xl lg:text-6xl text-left px-20 mt-20 mb-8 rounded-lg text-black"
        > About</h1>
        <p className="px-20  text-lg md:text-xl lg:text-2xl text-black">
        ScheduleNest streamlines scheduling for busy individuals with seamless calendar integration,
         color-coded categorization, and effortless recurring event management for optimal life balance.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
