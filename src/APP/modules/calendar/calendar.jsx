import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import useAxiosPrivate from './../../hooks/useAxiosPrivate';
import { useNavigate, useLocation } from 'react-router-dom';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';

const localizer = momentLocalizer(moment);

export default function MyCalendar() {
  const [events, setEvents] = useState([]);
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const controller = new AbortController();

    const fetchEvents = async () => {
      try {
        const response = await axiosPrivate.get('/users/calendar-events', {
          signal: controller.signal,
        });
        console.log('Response:', response.data);
        setEvents(response.data.map(event => ({
          id: event.id,
          title: event.title,
          start: new Date(event.start_time),
          end: new Date(event.end_time),
          allDay: false, // Assuming events have specific start and end times
        })));
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
    <div className="flex">
      <div className="calendar-container">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }} // Adjust height as needed
        />
      </div>
    </div>
  );
}
