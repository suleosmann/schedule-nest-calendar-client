import React from "react";
import useNavigation from "../../hooks/useNavigation"; // Import the custom hook


const CtaSection = () => {
  const navigate = useNavigation();
  return (
    <div className="bg-gradient-to-r from-green-400 to-green-900 text-white">
  <div className="p-16">
    <div className="bg-gradient-to-r from-green-300 to-green-800 rounded-lg p-8">
      <h1 className="text-4xl md:text-5xl lg:text-7xl text-center mb-8">
        Plan your week like a pro. Explore our calendar.
      </h1>
      <button
        className="mx-auto block mb-6 text-white px-8 py-4 rounded-full text-2xl md:text-3xl lg:text-4xl font-medium bg-green-600 hover:bg-orange-400 active:bg-orange-500 focus:outline-none focus:ring focus:ring-green-900"
        onClick={() => navigate('/authentication/signup')}
      >
        GET STARTED
      </button>
    </div>
  </div>
</div>

  );
};

export default CtaSection;
