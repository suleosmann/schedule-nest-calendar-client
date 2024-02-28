import React from 'react';
// import useAxiosPrivate from './../hooks/useAxiosPrivate';
import useNavigation from './../hooks/useNavigation';
import axios from './../api/axios'
///  option to delete

function NotifyModal({ type, message, event, closeModal }) {
  let bgColor;
  let handleEvent;
  let text;

  if (type === 'deletion') {
    bgColor = 'bg-red-100';
    handleEvent =handleDelete;
    text = event.title
  } else if (type === 'success'){
    bgColor = 'bg-green-100';
    handleEvent =() => {closeModal};
    text = 'SUCCESS!'
  }else  if (type === 'error'){
    bgColor = 'bg-red-100';
    handleEvent =closeModal;
    text = "ERROR!"
  }else {
    bgColor = 'bg-gray-100';
    handleEvent =closeModal;
    text = 'System Notification'
  }
  
  // const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigation(); 
  const id = event.id;
  console.log(id)

  async function handleDelete() {
    try {
      const accessToken = localStorage.getItem("accessToken");

      const response = await axios.delete(`/events/manage_event/${id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log(response?.data);
      navigate('/dashboard');
    } catch (err) {
      if (err.response) {
        console.error('Deletion failed:', err.response.data);
      } else if (err.request) {
        console.error('Deletion failed: Request made but no response received');
      } else {
        console.error('Deletion failed:', err.message);
      }
    }
    closeModal();
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
        <div className='border border-gray-300 mt-4 mb-8'></div>
        <div className="px-4 py-2 rounded-md text-center ${bgColor}}">
         <p>{message}</p> 
         <p>Confirm ?</p>
        </div>
        <div className=" flex-row flex items-center ml-40 mt-4">
          <button
            className="bg-transparent hover:bg-red-100 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded"
            onClick={handleEvent}
          >
            Delete
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