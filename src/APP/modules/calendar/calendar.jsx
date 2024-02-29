import React, { useState, useEffect } from 'react';
import useAxiosPrivate from './../../hooks/useAxiosPrivate';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import 'moment-timezone'; // Import moment-timezone to handle time zones

import  EventModal from './EventDetailsModal'
import  EditEventModal from './CreateEventModal'

const localizer = momentLocalizer(moment);

export default function MyCalendar() {
  const [events, setEvents] = useState([]);
  const axiosPrivate = useAxiosPrivate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);


  // const toggleModal = () => {
  //   setIsModalOpen(!isModalOpen);
  // };

  const openModal = (event, isEdit) => {
    setSelectedEvent(event);
    if (isEdit) {
      setIsModalOpen(true);
    } else {
      
      setIsEditModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsEditModalOpen(false);
    setSelectedEvent(null);
  };

  //-----------------------------------------date fomatting for calendar -------------------------------------------

  function formatDateString(dbDate) {
    const dateObj = new Date(dbDate);
  const options = { weekday: 'short', month: 'short', day: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
  const formattedDate = dateObj.toLocaleString('en-US', options).replace(/,/g, '');
  return formattedDate;
  }
  
//------------------------------------------get calendar events -----------------------------------------------------
useEffect(() => {
  const controller = new AbortController();

  const fetchEvents = async () => {
    const accessToken = localStorage.getItem("accessToken");

    console.log("Access Token:", accessToken);

    try {
      const response = await axiosPrivate.get('/users/calendar-events', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        signal: controller.signal,
      });
      console.log('Response:', response.data);

      setEvents(
        response.data.map(event => ({
          id: event.id,
          title: event.title,
          description: event.description,
          location: event.location,
          start: new Date(event.start_time), // Parse start_time to Date object
          end: new Date(event.end_time),     // Parse end_time to Date object
          allDay: false, // Assuming events have specific start and end times
        }))
      );
    } catch (error) {
      console.error('Error fetching calendar events:', error);
      // Handle error and navigate if needed
    }
  };

  fetchEvents();

  return () => {
    controller.abort();
  };
}, [axiosPrivate]);


  const handleEventClick = (event) => {
    openModal(event, true);
    console.log('Event clicked:', event);
  };

  const handleSlotSelect = (slotInfo) => {
    openModal(slotInfo, false);
    console.log('Slot selected:', slotInfo);
  };
  
  return (
    <div key={Math.random()} className="flex">
      <div className="bg-green-100">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 860, width:1590 }} // Adjust height as needed
          onSelectEvent={handleEventClick} // Attach event click handler
          onSelectSlot={handleSlotSelect} // Attach slot select handler
          selectable={true} // Make sure that slots are selectable
        />
      </div>
      {isModalOpen && <EventModal event={selectedEvent} closeModal={closeModal} />}
      {isEditModalOpen && <EditEventModal event={selectedEvent} closeModal={closeModal} />}

    </div>
  );
}
