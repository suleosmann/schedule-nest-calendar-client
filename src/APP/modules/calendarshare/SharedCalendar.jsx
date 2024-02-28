import React, { useState, useEffect } from "react";
import useAxiosPrivate from "./../../hooks/useAxiosPrivate";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import "moment-timezone"; 
import ShareCreateEvent from './ShareCreateEvent';

const localizer = momentLocalizer(moment);

export default function SharedCalendar() {
  const [events, setEvents] = useState([]);
  const axiosPrivate = useAxiosPrivate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    const user_id = localStorage.getItem("sharedUserId");
    const controller = new AbortController();

    const fetchEvents = async () => {
      try {
        const response = await axiosPrivate.get(
          `/calendar/get_shared_calendar/${user_id}`,
          {
            signal: controller.signal,
          }
        );
        setEvents(
          response.data.map((event) => ({
            id: event.id,
            title: event.title,
            start: new Date(event.start_time),
            end: new Date(event.end_time),
            allDay: false,
          }))
        );
      } catch (error) {
        console.error("Error fetching calendar events:", error);
      }
    };

    if (user_id) {
      fetchEvents();
    }

    return () => {
      controller.abort();
    };
  }, [axiosPrivate]);

  const openModal = (event, isEvent) => {
    setIsModalOpen(true);
    setSelectedEvent({ event, isEvent });
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  const handleEventClick = (event) => {
    openModal(event, true);
    console.log("Event clicked:", event);
  };

  const handleSlotSelect = (slotInfo) => {
    openModal(slotInfo, false);
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
          style={{ height: 900, width: 1590 }}
          onSelectEvent={handleEventClick}
          onSelectSlot={handleSlotSelect}
          selectable={true}
        />
      </div>
      {isModalOpen && (
        <ShareCreateEvent event={selectedEvent} closeModal={closeModal} />
      )}
    </div>
  );
}
