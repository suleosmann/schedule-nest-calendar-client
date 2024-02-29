import React, { useState } from 'react';
import SearchCalendar from './SearchCalendar';
import { HiOutlineShare } from "react-icons/hi";

const ShareCalendarBtn = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className='mt-48'>
      <button 
        type="button" 
        className="bg-green-300 h-25 hover:bg-orange-400 active:bg-orange-500 focus:outline-none focus:ring focus:ring-green-900 font-medium rounded-lg text-sm px-20 py-2.5 me-2 mb-2" icon={HiOutlineShare}
        onClick={() => setShowDropdown(!showDropdown)}
      >
        Share Calendar
      </button>
      {showDropdown && (
        <div className="absolute top-96 left-64 z-10 bg-white border shadow-lg rounded-lg">
          {/* Render SearchCalendar component */}
          <div className="p-6">
            <SearchCalendar />
          </div>
          
        </div>
      )}
    </div>
  );
}

export default ShareCalendarBtn;
