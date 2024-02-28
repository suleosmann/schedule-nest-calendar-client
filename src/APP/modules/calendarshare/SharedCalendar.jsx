import React, { useState, useEffect } from "react";
import useAxiosPrivate from "./../../hooks/useAxiosPrivate";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import "moment-timezone"; // Import moment-timezone to handle time zones

import EventModal from "./../calendar/CreateEventModal";

const localizer = momentLocalizer(moment);

export default function SharedCalendar() {
  const [events, setEvents] = useState([]);
  const axiosPrivate = useAxiosPrivate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  useEffect(() => {
    const user_id = localStorage.getItem("sharedUserId"); // Retrieve user_id from localStorage

    const controller = new AbortController();

    const fetchEvents = async () => {
      try {
        const response = await axiosPrivate.get(
          `/calendar/get_shared_calendar/${user_id}`,
          {
            signal: controller.signal,
          }
        );
        console.log("Response:", response.data);
        console.log("User Id:", { user_id });

        setEvents(
          response.data.map((event) => ({
            id: event.id,
            title: event.title,
            // Parse start_time and end_time strings to Date objects
            start: new Date(event.start_time), // Ensure start_time is in UTC or local time
            end: new Date(event.end_time), // Ensure end_time is in UTC or local time
            allDay: false, // Assuming events have specific start and end times
          }))
        );
      } catch (error) {
        console.error("Error fetching calendar events:", error);
        // Handle error and navigate if needed
      }
    };

    if (user_id) {
      fetchEvents();
    }

    return () => {
      controller.abort();
    };
  }, [axiosPrivate]);


  const handleEventClick = (event) => {
    // Handle the event click here, you can access event properties like event.id, event.title, etc.
    // toggleModal();
    openModal(event, true);
    // {isModalOpen && <EventModal event={event} closeModal={toggleModal} />}
    console.log("Event clicked:", event);
  };

  const handleSlotSelect = (slotInfo) => {
    // Handle the slot select here, slotInfo contains information about the selected slot
    // toggleModal();
    openModal(slotInfo, false);
    // {isModalOpen && <EditEventModal event={slotInfo} closeModal={toggleModal} />}
    console.log("Slot selected:", slotInfo);
  };

  return (
    <div key={Math.random()} className="flex">
      <div className="calendar-container">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 900, width: 1590 }} // Adjust height as needed
          onSelectEvent={handleEventClick} // Attach event click handler
          onSelectSlot={handleSlotSelect} // Attach slot select handler
          selectable={true} // Make sure that slots are selectable
        />
      </div>
      {isModalOpen && (
        <EventModal event={selectedEvent} closeModal={closeModal} />
      )}
    </div>
  );
}
