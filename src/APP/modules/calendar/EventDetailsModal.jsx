import React, { useState } from 'react';
import EditEventModal from './CreateEventModal';
import DeleteEventModal from './../../components/NotifyModal';

function EventDetailsModal({ event, closeModal }) {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const openEditModal = () => {
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  const openDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 overflow-y-auto h-full w-full z-50 flex justify-center items-start md:items-center pt-10 md:pt-0" onClick={closeModal}>
      <div className="relative mx-auto p-5 border w-full max-w-md m-5 bg-white rounded-md shadow-lg" onClick={e => e.stopPropagation()}>
        <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
          {event.title}
        </h3>
        <div className="mt-2">
          <p className="text-sm text-gray-500">
            {event.start.toString()} - {event.end.toString()}
          </p>
          <p className="text-sm text-gray-500">
            Notes: {event.notes}
          </p>
        </div>
        <div className="mt-4">
          <button
            type="button"
            className="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded"
            onClick={openEditModal}
          >
            Edit
          </button>
          <button
            type="button"
            className="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded"
            onClick={openDeleteModal}
          >
            Delete
          </button>
          <button
            type="button"
            className="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      </div>
      {isEditModalOpen && <EditEventModal event={event} closeModal={closeEditModal} />}
      {isDeleteModalOpen && <DeleteEventModal event={event} closeModal={closeDeleteModal} />}
    </div>
  );
}

export default EventDetailsModal;
