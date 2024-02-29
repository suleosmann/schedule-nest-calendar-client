import React from "react";
import useNavigation from "../../hooks/useNavigation"; // Import the custom hook

const CtaSection = () => {
  const navigate = useNavigation();

  return (
    <div className="bg-lime-200 text-white relative">
      <div className="p-16 flex items-center justify-center">
        <div className="w-1/2 relative">
          <img
            src="src/APP/assets/planning.jpg"
            alt="Image"
            className="w-full h-auto absolute inset-0 opacity-50"
          />
          <div className="rounded-lg p-4 md:p-6 text-center relative z-10">
  <h1 className="text-xl text-stone-800 md:text-2xl lg:text-4xl mb-4">
    Plan your week like a pro. Explore our calendar.
  </h1>
  <button
    className="mx-auto block mb-2 text-stone-800 px-6 py-3 md:px-8 md:py-4 rounded-full text-sm md:text-lg lg:text-xl font-medium bg-yellow-100 hover:bg-stone-800 hover:text-white active:bg-orange-500 focus:outline-none focus:ring focus:ring-green-900"
    onClick={() => navigate('/authentication/signup')}
  >
    GET STARTED
  </button>
</div>


        </div>
      </div>
    </div>
  );
};

export default CtaSection;
