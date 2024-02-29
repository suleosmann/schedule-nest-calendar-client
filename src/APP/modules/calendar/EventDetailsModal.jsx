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
      <div  className='float-right border border-gray-400 rounded-full h-6 w-6 items-center justify-center cursor-pointer ' onClick={closeModal}>
      <p className=' text-gray-900 text-center'> x </p>
     </div>
        <h3 className="text-lg leading-6 font-medium text-gray-900 text-center"  id="modal-title">
          {event.title}
        </h3>
        <div className='border border-gray-300 mt-4 mb-4'></div>
        <div className="mt-2 bg-green-300 rounded-xl ">
          <p className="text-lg text-gray-900 text-center ">
            {event.description}
          </p>
          <p className="text-base text-gray-900 text-center m-1 ">
            {event.start.toString().slice(0,16)}
          </p>
          <p className="text-base text-gray-900 text-center ">
              location: {event.location}
            </p>
          <div className='flex-row flex justify-center  items-center text-base  text-gray-900 '>
            <div className='mr-2' >
            <p> Start Time</p>
            <p>
                {event.start.toString().slice(16,24)}
              </p>
            </div>
            <div className='ml-2'>
            <p> End Time</p>
            <p>
              {event.end.toString().slice(16,24)}
            </p>
          </div>
          </div>
        </div>
        <div className='border border-gray-400 mt-4'></div>
        <div className="mt-4 flex-row flex justify-between items-center">
         <div>
          <button
            type="button"
            className="bg-green-300 hover:bg-orange-400 active:bg-orange-500 focus:outline-none focus:ring focus:ring-green-900 hover:shadow-md shadow border border-gray-500 hover:border-transparent rounded focus:outline-none focus:shadow-outline py-2 px-4 border border-gray-500 hover:border-transparent hover:text-white rounded"
            onClick={openEditModal}
          >
            Edit
          </button>
          </div>
          <div>
          <button
            type="button"
            className="bg-yellow-300 hover:bg-red-400 active:bg-red-600 focus:outline-none focus:ring focus:ring-green-900 hover:shadow-md shadow border border-gray-500 hover:border-transparent rounded focus:outline-none focus:shadow-outline hover:text-white py-2 px-4  rounded"
            onClick={openDeleteModal}
          >
            Delete
          </button>
          </div>
         
        </div>
      </div>
      {isEditModalOpen && <EditEventModal event={event} closeModal={closeEditModal} />}
      {isDeleteModalOpen && <DeleteEventModal type='deletion' event={event} message='This event will be deleted.' closeModal={closeDeleteModal} />}
    </div>
  );
}

export default EventDetailsModal;
