import React, { useEffect, useState } from "react";
import Select from "react-select";

import useAxiosPrivate from "./../../hooks/useAxiosPrivate";
import useAxios from "./../../api/axios";
import useNavigation from "./../../hooks/useNavigation";

import RecurrenceFormModal from "./RecurrenceFormModal";
import SuccessModal from "./../../components/NotifyModal";
import ErrorModal from "./../../components/NotifyModal";

function CreateEventModal({ closeModal }) {
  const POSTEVENT_URL = "/events/create_event";
  const GET_USERS_URL = "/users/get_all_users";

  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigation();

  const [showRecurrenceModal, setShowRecurrenceModal] = useState(false);

  //----------------------------variables in create event modal --------------------------------
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [location, setLocation] = useState('');
  const [attendees, setAttendees] = useState([]);

  //--------------------------processed variables to be sent -----------------------------------
  const [recurrence, setRecurrence] = useState(); 
  const [count, setCount] = useState(1); 
  const [interval, setInterval] = useState(1);
  const [byweekday, setByWeekday] = useState([]); 
  const [bymonthday, setByMonthday] = useState([]); 
  const [errMsg,setErrMsg] = useState('')

  const [selectedUsers, setSelectedUsers] = useState([]);
  const [users, setUsers] = useState([]);
//------------------------------------recurrence data being received -----------------------------------

  const handleRecurrenceSave = (options) => {
    console.log('recurrence options:',options);
    setByWeekday(options.selectedDays);
    setByMonthday(options.dayOfMonth);
    setRecurrence(options.recurrence);
    setCount(recurrenceLogic(options.startDate, options.endDate, options.recurrence));
    closeRecurrenceModal();
  };

  //---------------------------------------function for recurrence --------------------------------------
function recurrenceLogic(startDate, endDate, recurrence) {
  let count = 0;

  const start = new Date(startDate);
  const end = new Date(endDate);

  if (recurrence === 'weekly') {
    // Calculate number of weeks between start and end date
    const millisecondsPerWeek = 7 * 24 * 60 * 60 * 1000;
    const diffTime = Math.abs(end - start);
    const diffWeeks = Math.ceil(diffTime / millisecondsPerWeek);
    count = diffWeeks;
  } else if (recurrence === 'daily') {
    // Calculate number of days between start and end date
    const millisecondsPerDay = 24 * 60 * 60 * 1000;
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / millisecondsPerDay);
    count = diffDays;
  } else if (recurrence === 'monthly') {
    // Calculate number of months between start and end date
    const diffMonths = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
    count = diffMonths;
  }

  return count;
}


  const [isSuccessModalOpen, setSuccessModalOpen] = useState(false);
  const [isErrorModalOpen, setErrorModalOpen] = useState(false);

  const [currentDate, setCurrentDate] = useState(
    new Date().toISOString().slice(0, 10)
  );

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
    const controller = new AbortController();
  
    const fetchUsers = async () => {
      try {
        const response = await useAxios.get(GET_USERS_URL, {
          signal: controller.signal,
        });
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching Users", error);
      }
    };
  
    fetchUsers();
  
    return () => {
      controller.abort();
    };
  }, [selectedUsers]);
  

  const handleChange = (selectedUser) => {
    console.log("Selected User:", selectedUser);
    setSelectedUsers([...selectedUsers, selectedUser]);
    console.log(selectedUsers);
    
  };

//--------------------------------------function to fomat date for database--------------------------
function formatDateTimedb(date, time) {
  const [year, month, day] = date.split('-');
  const [hours, minutes] = time.split(':');
   `${year}-${month}-${day}T${hours}:${minutes}:00`;
  return `${year}-${month}-${day}T${hours}:${minutes}:00`;
}

//---------------------------------------function for recurrence --------------------------------------
function recurrenceLogic(startDate, endDate, recurrence, selectedDays, dayOfMonth) {
  let count = 0;

  const start = new Date(startDate);
  const end = new Date(endDate);

  if (recurrence === 'weekly') {
    // Calculate number of weeks between start and end date
    const millisecondsPerWeek = 7 * 24 * 60 * 60 * 1000;
    const diffTime = Math.abs(end - start);
    const diffWeeks = Math.ceil(diffTime / millisecondsPerWeek);
    count = diffWeeks;
  } else if (recurrence === 'daily') {
    // Calculate number of days between start and end date
    const millisecondsPerDay = 24 * 60 * 60 * 1000;
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / millisecondsPerDay);
    count = diffDays;
  } else if (recurrence === 'monthly') {
    // Calculate number of months between start and end date
    const diffMonths = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
    count = diffMonths;
  }

  return count;
}

//--------------------------------------saving event to api ------------------------------------------
  const handleSave = async () => {
    const start_time =  formatDateTimedb(date, startTime);
    const end_time= formatDateTimedb(date, endTime);
    console.log( 'title: ',title,' description: ', description,' start_time: ', start_time, 'end_time: ',end_time, 'location:',location, 'attendees : ',attendees, 'recurrence:', recurrence, 'interval:',interval ,'byweekday:', byweekday, 'bymonthday:',bymonthday , 'count:',count);

    try {
      const accessToken = localStorage.getItem("accessToken");
      const response = await axiosPrivate.post(
        POSTEVENT_URL,
        JSON.stringify({
          title,
          description,
          start_time,
          end_time,
          location,
          attendees,
          recurrence,
          interval,
          byweekday,
          bymonthday,
          count,
        }),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log("Event Created successfully ", response.data);
      openSuccessModal();
    } catch (err) {
      setErrMsg("Update Failed. Please try again.");
      console.error("Update error:", err);
      openErrorModal();
    }  
    navigate('/dashboard')
    closeModal();
  };

  return (
    <div
      className="fixed inset-0 bg-gray-600 bg-opacity-75 overflow-y-auto h-full w-full z-50 flex justify-center items-start md:items-center pt-10 md:pt-0"
      onClick={closeModal}
    >
      <div
        className="relative mx-auto p-5 border w-full max-w-md m-5 bg-white rounded-md shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4">
          <label
            htmlFor="eventTitle"
            className="block text-gray-700 text-base font-bold mb-2"
          >
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
          <div className="mb-4">
            <label
              htmlFor="startDate"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Date
            </label>
            <input
              type="date"
              id="Date"
              value={currentDate}
              onChange={(e) => setCurrentDate(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div></div>

          <div>
            <label
              htmlFor="startTime"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
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
            <label
              htmlFor="endTime"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
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

        <div className="mb-6"></div>
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

        <div className="mb-4">
          <Select
            onChange={handleChange}
            options={users}
            placeholder="Add guest..."
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {selectedUsers.map((user) => (
            <p key={user.id} className="text-gray-700 text-sm font-bold">
              Selected: {user.name}
            </p>
          ))}
        </div>

        <div className="mb-4">
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
      {showRecurrenceModal && <RecurrenceFormModal closeRecurrenceModal={closeRecurrenceModal} onSave={handleRecurrenceSave} />}
      {isSuccessModalOpen && <SuccessModal type='success' message='Event has been added successfully to your calendar!' closeModal={closeSuccessModal} />}
      {isErrorModalOpen && <ErrorModal type='error' message={errMsg} closeModal={closeErrorModal} />}
    </div>
  );
}

// Export the CreateEventModal component as default
export default CreateEventModal;
