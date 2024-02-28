import React, { useEffect, useState } from 'react';
import Select from 'react-select';

import useAxiosPrivate from './../../hooks/useAxiosPrivate';
import useAxios from './../../api/axios';
import useNavigation from './../../hooks/useNavigation';

import SuccessModal from './../../components/NotifyModal';
import ErrorModal from './../../components/NotifyModal';

function ShareCreateEvent({ closeModal }) {
  const POSTEVENT_URL = '/events/create_event';
  const GET_USERS_URL = '/users/get_all_users';

  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigation(); 

  const [showRecurrenceModal, setShowRecurrenceModal] = useState(false);
  const [isSuccessModalOpen, setSuccessModalOpen] = useState(false);
  const [isErrorModalOpen, setErrorModalOpen] = useState(false);
  const [errMsg, setErrMsg] = useState('');

  // State variables to hold data
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [location, setLocation] = useState('');
  const [attendees, setAttendees] = useState([]);


  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const [selectedUsers, setSelectedUsers] = useState([]);
  const [users, setUsers] = useState([]);

  //--------------------------------------successModal ------------------------------------------
  const openSuccessModal = () => {
    setSuccessModalOpen(true);
  };

  const closeSuccessModal = () => {
    setSuccessModalOpen(false);
  };

  //--------------------------------------errorModal ------------------------------------------
  const openErrorModal = () => {
    setErrorModalOpen(true);
  };

  const closeErrorModal = () => {
    setErrorModalOpen(false);
  };

  //--------------------------------------recurrenceModal ------------------------------------------
  const handleRecurrenceClick = () => {
    setShowRecurrenceModal(true);
  };

  const closeRecurrenceModal = () => {
    setShowRecurrenceModal(false);
  };

  //--------------------------------------event attendees useEffect ----------------------------------
  useEffect(() => {
    const user_id = localStorage.getItem("sharedUserId");
    setAttendees([{ user_id }]); // Set attendees as an array containing the user_id from local storage
  }, []);

  //--------------------------------------saving event to api ------------------------------------------
  const handleSave = async () => {
    const start_time = new Date(`${date}T${startTime}:00`).toISOString().slice(0, 19);
    const end_time = new Date(`${date}T${endTime}:00`).toISOString().slice(0, 19);
  
    // Log the data being sent
    console.log('Data being sent:', { title, description, start_time, end_time, location, attendees });
  
    try {
      const accessToken = localStorage.getItem("accessToken");
      const response = await axiosPrivate.post(POSTEVENT_URL, JSON.stringify({ title, description, start_time, end_time, location, attendees }), {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}` 
        },
      });
      console.log("Event Created successfully ", response.data);
      openSuccessModal();
    } catch (err) {
      setErrMsg('Update Failed. Please try again.');
      console.error("Update error:", err);
      openErrorModal();
    }    
    closeModal();
  };
  

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 overflow-y-auto h-full w-full z-50 flex justify-center items-start md:items-center pt-10 md:pt-0" onClick={closeModal}>
      <div className="relative mx-auto p-5 border w-full max-w-md m-5 bg-white rounded-md shadow-lg" onClick={e => e.stopPropagation()}>
        <div className="mb-4">
          <label htmlFor="eventTitle" className="block text-gray-700 text-base font-bold mb-2">
            Add new event
          </label>  
        </div> 

        <div className="mb-4">
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Event title"
          />
        </div>

        <div className="mb-4">
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Event Details"
            rows="4"
          ></textarea>
        </div>
        
        {/* Grid layout for date and time inputs */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="startDate" className="block text-gray-700 text-sm font-bold mb-2">
              Date
            </label>
            <input
              type="date"
              id="Date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          
          <div></div>

          <div>
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
        </div>
        <div className="mb-4">
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Location"
          />
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
      {showRecurrenceModal && <RecurrenceFormModal closeRecurrenceModal={closeRecurrenceModal} />}
      {isSuccessModalOpen && <SuccessModal type='success' message='Event has been added successfully to your calendar!' closeModal={closeSuccessModal} />}
      {isErrorModalOpen && <ErrorModal type='error' message={errMsg} closeModal={closeErrorModal} />}
    </div>
  );
}

// Export the CreateEventModal component as default
export default ShareCreateEvent;
