import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const CommonNavbar = () => {
  return (
    <div className="bg-green-300">
      <div className="flex items-center ml-10 ">
        <FontAwesomeIcon icon={faStar} className="text-yellow-200 mr-2 py-6 " />
        <span className="text-black text-xl font-semibold">ScheduleNest</span>
      </div>
    </div>
  );
};

export default CommonNavbar;
