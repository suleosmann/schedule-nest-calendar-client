import React, { useState, useEffect } from 'react';
import useAxiosPrivate from './../../hooks/useAxiosPrivate';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import 'moment-timezone'; // Import moment-timezone to handle time zones

const localizer = momentLocalizer(moment);

export default function MyCalendar() {
  const [events, setEvents] = useState([]);
  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    const controller = new AbortController();
  
    const fetchEvents = async () => {
      try {
        const response = await axiosPrivate.get('/users/calendar-events', {
          signal: controller.signal,
        });
        console.log('Response:', response.data);
  
        setEvents(
          response.data.map(event => ({
            id: event.id,
            title: event.title,
            // Parse start_time and end_time strings to Date objects
            start: new Date(event.start_time), // Ensure start_time is in UTC or local time
            end: new Date(event.end_time),     // Ensure end_time is in UTC or local time
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
  
  return (
    <div key={Math.random()} className="flex">
      <div className="calendar-container">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 900, width:1650 }} // Adjust height as needed
        />
      </div>
    </div>
  );
}
