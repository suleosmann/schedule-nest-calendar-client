import React, { useState } from 'react';
import SearchCalendar from './SearchCalendar';

const ShareCalendarBtn = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className='mt-48'>
      <button 
        type="button" 
        className="text-black bg-green-300 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-20 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        Share Calendar
      </button>
      {showDropdown && (
        <div className="absolute top-120 left-0 z-10 bg-white border shadow-lg rounded-lg">
          {/* Render SearchCalendar component */}
          <div className="p-4">
            <SearchCalendar />
          </div>
          
        </div>
      )}
    </div>
  );
}

export default ShareCalendarBtn;
