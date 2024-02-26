import React, { useState } from 'react';

// Define a functional component called CreateEventModal which accepts two props: closeModal and saveEvent
function CreateEventModal({ closeModal }) {
  // State variables to hold the form inputs
  const [eventTitle, setEventTitle] = useState('');
  const [eventNotes, setEventNotes] = useState('');
  const [startDate, setStartDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endDate, setEndDate] = useState('');
  const [endTime, setEndTime] = useState('');

  // Function to handle saving the event
  const handleSave = () => {
    // Construct start and end Date objects from date and time inputs
    const start = new Date(`${startDate}T${startTime}`);
    const end = new Date(`${endDate}T${endTime}`);
    
    // Call the passed in saveEvent function with the new event details
    saveEvent(eventTitle, start, end, eventNotes);
    // Close the modal
    closeModal();
  };

  return (
    // Modal backdrop 
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 overflow-y-auto h-full w-full z-50 flex justify-center items-start md:items-center pt-10 md:pt-0" onClick={closeModal}>
      {/* Modal content */}
      <div className="relative mx-auto p-5 border w-full max-w-md m-5 bg-white rounded-md shadow-lg" onClick={e => e.stopPropagation()}>
        <div className="mb-4">
          {/* Input field for event title */}
          <label htmlFor="eventTitle" className="block text-gray-700 text-sm font-bold mb-2">
            Event Title
          </label>
          <input
            type="text"
            id="eventTitle"
            value={eventTitle}
            onChange={(e) => setEventTitle(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter event title"
          />
        </div>
        {/* Grid layout for date and time inputs */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            {/* Input field for start date */}
            <label htmlFor="startDate" className="block text-gray-700 text-sm font-bold mb-2">
              Start Date
            </label>
            <input
              type="date"
              id="startDate"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            {/* Input field for start time */}
            <label htmlFor="startTime" className="block text-gray-700 text-sm font-bold mb-2">
              Start Time
            </label>
            <input
              type="time"
              id="startTime"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            {/* Input field for end date */}
            <label htmlFor="endDate" className="block text-gray-700 text-sm font-bold mb-2">
              End Date
            </label>
            <input
              type="date"
              id="endDate"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            {/* Input field for end time */}
            <label htmlFor="endTime" className="block text-gray-700 text-sm font-bold mb-2">
              End Time
            </label>
            <input
              type="time"
              id="endTime"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>
        <div className="mb-6">
          {/* Textarea for event notes */}
          <label htmlFor="eventNotes" className="block text-gray-700 text-sm font-bold mb-2">
            Event Notes
          </label>
          <textarea
            id="eventNotes"
            value={eventNotes}
            onChange={(e) => setEventNotes(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter event notes"
            rows="4"
          ></textarea>
        </div>
        {/* Buttons for saving and canceling */}
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleSave}
          >
            Save Event
          </button>
          <button
            className="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded"
            onClick={closeModal}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

// Export the CreateEventModal component as default
export default CreateEventModal;
