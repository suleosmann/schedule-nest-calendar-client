import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import useAxios from './../../api/axios';
import { Alert } from 'flowbite-react';
import RecurrenceFormModal from './RecurrenceFormModal'; // Import the new component

function statusMessage(message, status) {
  return (
    <Alert color="{status}" onDismiss={() => alert('Alert dismissed!')}>
      <span className="font-medium">Info alert!</span> 
      {message}
    </Alert>
  );
}

// Define a functional component called CreateEventModal which accepts two props: closeModal and saveEvent
function CreateEventModal({ closeModal }) {
  const [showRecurrenceModal, setShowRecurrenceModal] = useState(false);

  // State variables to hold the form input
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [location, setLocation] = useState('');
  const [attendees, setAttendees] = useState([]);
  const [recurrence, setRecurrence] = useState(false); // Assuming it's a boolean value
  const [interval, setInterval] = useState(1); // Assuming it's a number
  const [byweekday, setByWeekday] = useState([]); // Assuming it's an array of weekdays (e.g., ['MO', 'TU'])
  const [bymonthday, setByMonthday] = useState([]); // Assuming it's an array of monthdays (e.g., [1, 15])


  const [date, setDate] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const [selectedUsers, setSelectedUsers] = useState([]);
  const [users, setUsers] = useState([]);

  const [showStatusMessage, setShowStatusMessage] = useState(false);



  useEffect( () => {
    const controller = new AbortController();

    const fetchUsers = async () => {
      const controller = new AbortController();
      try {
        const response = await useAxios.get('/users/get_all_users', {
          signal: controller.signal,
        });
        console.log('Response:', response.data);

        setUsers(response.data );

        console.log('Users:', users);

      } catch (error) {
        console.error('Error fetching Users', error);
        // Handle error and navigate if needed
      }
    };

    fetchUsers();

    return () => {
      controller.abort();
    };
  },[useAxios]);

  const handleChange = (selectedUser) => {
    setSelectedUsers([...selectedUsers, selectedUser]);
  };

  // Function to handle saving the event
  const handleSave = async () => {
    // Construct start and end Date objects from date and time inputs
    const start_time = new date(`${date}T${startTime}`);
    const end_time= new date(`${date}T${endTime}`);

    try {
      // Directly retrieve the accessToken from localStorage
      const accessToken = localStorage.getItem("accessToken");

      const response = await axiosPrivate.post(PROFILE_URL, JSON.stringify({ title, description, start_time, end_time, location, attendees, recurrence, interval, byweekday, bymonthday, count}), {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}` // Manually include the accessToken
        },
      });
  
      console.log("Profile update response:", response.data);
      setShowStatusMessage(true); // Show success message upon successful update
  
      // Automatically close the modal and navigate after showing the success message
      setTimeout(() => {
        closeModal();
        navigate('/dashboard/profile'); // Adjust navigation as necessary
      }, 2000); // Adjust timing as necessary
  
    } catch (err) {
      setErrMsg('Update Failed. Please try again.');
      console.error("Update error:", err);
    }
    
    closeModal();
  };

  // Function to open the recurrence modal
  const handleRecurrenceClick = () => {
    setShowRecurrenceModal(true);
  };

  // Function to close the recurrence modal
  const closeRecurrenceModal = () => {
    setShowRecurrenceModal(false);
  };

  return (
    // Modal backdrop 
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 overflow-y-auto h-full w-full z-50 flex justify-center items-start md:items-center pt-10 md:pt-0" onClick={closeModal}>
      {/* Modal content */}
      <div className="relative mx-auto p-5 border w-full max-w-md m-5 bg-white rounded-md shadow-lg" onClick={e => e.stopPropagation()}>

        <div className="mb-4">
          {/* Input field for event title */}
          <label htmlFor="eventTitle" className="block text-gray-700 text-base font-bold mb-2">
            Add new event
          </label>  
        </div> 

        <div className="mb-4">
          {/* Input field for event title */}
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
          {/* Input field for event title */}
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
            {/* Input field for start date */}
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
          
          <div>
            {/* Input field for end date */}
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
        </div>
        <div className="mb-4">
        {/* Input field for event title */}
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Location"
          />
        </div>

        <div className='mb-4'>
            <Select
            onChange={handleChange}
            options={users.map(user => ({ value: user.id, label: user.name }))}
            placeholder="Add guest..."
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {selectedUsers.map(user => (
            <p key={user.id} className='text-gray-700 text-sm font-bold'>Selected: {user.name}</p>
          ))}
         
        </div>

        <div className='mb-4'>
        <button
            className="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded"
            onClick={handleRecurrenceClick}
          >
            Recurrence
          </button>
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

      {showStatusMessage && <statusMessage status='InfoMessage' message="Profile successfully updated!" onClose={() => setShowStatusMessage(false)} />}
    </div>
  );
}

// Export the CreateEventModal component as default
export default CreateEventModal;
