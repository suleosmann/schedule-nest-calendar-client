import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import 'moment-timezone';
import CreateEventModal from './CreateEventModal'; // the CreateEventModal component
import EventDetailsModal from './EventDetailsModal'; // Import a new component for showing event details

const localizer = momentLocalizer(moment);

const MyCalendars = () => {
  useEffect(() => {
    moment.tz.setDefault('America/New_York');
  }, []);

  const [isEventDetailsModalOpen, setIsEventDetailsModalOpen] = useState(false);
  // State to hold the selected event for details
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Updated state to include a setter function and make it modifiable
  const [events, setEvents] = useState([
    {
      title: 'Meeting',
      start: new Date(2024, 1, 21, 10, 0, 0), // Assuming 21st Feb is the date for the meeting
      end: new Date(2024, 1, 21, 12, 0, 0),
    },
  ]);
  // State to manage modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);
  // State to hold the selected date
  const [selectedDate, setSelectedDate] = useState();

  const handleSelectSlot = ({ start }) => {
    // Set the selected date
    setSelectedDate(start);
    // Open the modal
    setIsModalOpen(true);
  };

   // Handler for clicking an event
   const handleSelectEvent = (event) => {
    // Set the selected event
    setSelectedEvent(event);
    // Open the event details modal
    setIsEventDetailsModalOpen(true);
  };

  // Function to add a new event
  const addNewEvent = (eventTitle, eventNotes) => {
    const newEvent = {
      title: eventTitle,
      start: selectedDate,
      end: new Date(selectedDate.getTime() + 2 * 60 * 60 * 1000), // End time is 2 hours after start time by default
      notes: eventNotes, // Additional notes for the event
    };
    setEvents([...events, newEvent]);
    setIsModalOpen(false); // Close the modal after adding the event
  };

  return (
    <div className='bg-green-100 w-full h-full'>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 950, width:1580 }}
        views={['month', 'week', 'day']}
        toolbar={true}
        selectable={true}
        onSelectSlot={handleSelectSlot}
        onSelectEvent={handleSelectEvent}
      />

    {isEventDetailsModalOpen && (
        <EventDetailsModal
          event={selectedEvent}
          closeModal={() => setIsEventDetailsModalOpen(false)}
        />
      )}
      {isModalOpen && (
        <CreateEventModal
          closeModal={() => setIsModalOpen(false)}
          saveEvent={addNewEvent}
        />
      )}
    </div>
  );
};

export default MyCalendars;
