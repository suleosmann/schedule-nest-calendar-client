import React from 'react';
 
///  option to delete

function NotifyModal({ type, message, closeModal }) {
  let bgColor;
  if (type === 'deletion') {
    bgColor = 'bg-red-100';
  } else if (type === 'notification') {
    bgColor = 'bg-blue-100';
  } else {
    bgColor = 'bg-gray-100';
  }

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
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 overflow-y-auto h-full w-full z-50 flex justify-center items-start md:items-center pt-10 md:pt-0" onClick={closeModal}>
      <div className="relative mx-auto p-5 border w-full max-w-md m-5 bg-white rounded-md shadow-lg" onClick={e => e.stopPropagation()}>
        <div className={`px-4 py-2 rounded-md ${bgColor}`}>
          {message}
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded"
            onClick={closeModal}
          >
            ok
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotifyModal;

// exammple usage
// <NotifyModal type="deletion" message="Event has been deleted from your calendar." />
// <NotifyModal type="notification" message="Event has been added successfully to your calendar." />
// <NotifyModal type="notification" message="Changes have been applied successfully" />
