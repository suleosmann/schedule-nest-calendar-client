import React from 'react';
import NotifyModal from './NotifyModal';
function DetailsModal({ type, created_by, atendees, description, end_time, location, start_time, title, closeModal }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };


  let bgColor;
  if (type === 'Delete') {

    bgColor = 'bg-red-100';
    handleEvent1 = handleCancel
    handleEvent2 = HandleDeleteAPI
    event1 = "Cancel"
    event2 = "Confirm Delete"

  } else if (type === 'veiw') {

    bgColor = 'bg-gray-100';
    handleEvent1 = handleEdit
    handleEvent2 = handleDelete
    event1 = " Edit"
    event2 = " Delete"
  } else {
    bgColor = 'bg-gray-100';
  } 

  const handleCancel = () => {
    closeModal();
  };

  const HandleDeleteAPI = () => {
    toggleModal();
    {isModalOpen && <NotifyModal type="deletion" message="Event has been deleted from your calendar." />}
    closeModal();
  };

  const handleEdit = () => {
    toggleModal();
    closeModal();
  };

  const handleDelete = () => {
    toggleModal();
    closeModal();
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 overflow-y-auto h-full w-full z-50 flex justify-center items-start md:items-center pt-10 md:pt-0" onClick={closeModal}>
      <div className="relative mx-auto p-5 border w-full max-w-md m-5 bg-white rounded-md shadow-lg" onClick={e => e.stopPropagation()}>
      <div className={`px-4 py-2 rounded-md ${bgColor}`}  onClick={closeModal}>
          X
        </div>
        <div className={`px-4 py-2 rounded-md ${bgColor}`}>
          {title}
        </div>
        <div className={`px-4 py-2 rounded-md ${bgColor}`}>
          { description }
        </div>
        <div className={`px-4 py-2 rounded-md ${bgColor}`}>
          {end_time  || start_time}
        </div>
        <div className={`px-4 py-2 rounded-md ${bgColor}`}>
          {location}
        </div>
        <div className={`px-4 py-2 rounded-md ${bgColor}`}>
          {atendees}
        </div>
        <div className={`px-4 py-2 rounded-md ${bgColor}`}>
          {created_by}
          </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleEvent1}
          >
           {event1}
          </button>
          <button
            className="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded"
            onClick={handleEvent2}
          >
           {event2}
          </button>
      </div>
    </div>
    </div>
  );
}

export default DetailsModal;

// exammple usage
// <EventDetailsModal type="error" message="There was an error processing your request." />
// <EventDetailsModal type="notification" message="Your changes have been saved." />
// <EventDetailsModal type="info" message="Please review your submission." />
