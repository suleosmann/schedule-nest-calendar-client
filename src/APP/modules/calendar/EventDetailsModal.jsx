import React from 'react';

// Define a functional component called EventDetailsModal which accepts two props: event and closeModal
function EventDetailsModal({ event, closeModal }) {
  return (
    // Modal backdrop with a semi-transparent gray overlay
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 overflow-y-auto h-full w-full z-50 flex justify-center items-start md:items-center pt-10 md:pt-0" onClick={closeModal}>
      {/* Modal content */}
      <div className="relative mx-auto p-5 border w-full max-w-md m-5 bg-white rounded-md shadow-lg" onClick={e => e.stopPropagation()}>
        {/* Modal title */}
        <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
          {event.title}
        </h3>
        {/* Event details */}
        <div className="mt-2">
          {/* Display start and end time of the event */}
          <p className="text-sm text-gray-500">
            {event.start.toString()} - {event.end.toString()}
          </p>
          {/* Display notes for the event */}
          <p className="text-sm text-gray-500">
            Notes: {event.notes}
          </p>
        </div>
        {/* Close button */}
        <div className="mt-4">
          <button
            type="button"
            // Styles for the close button
            className="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded"
            // onClick event handler to close the modal
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

// Export the EventDetailsModal component as default
export default EventDetailsModal;
