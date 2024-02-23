import React from "react";
import useNavigation from "../../hooks/useNavigation"; // Import the custom hook


const CtaSection = () => {
  const navigate = useNavigation();
  return (
    <div className="bg-green-900">
      <div className="p-16">
        <div className="bg-green-300">
          <h1 className="text-white m-8 p-16 text-7xl flex justify-center pb-4">
            Plan your week like a pro. Explore our calendar.
          </h1>
          <button className="ml-24 mb-6 text-white px-8 py-4 rounded-lg text-3xl font-medium bg-green-500 hover:bg-green-600" onClick={() => navigate('/authentication/signup')}>GET STARTED</button>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
