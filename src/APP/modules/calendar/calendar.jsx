import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import 'moment-timezone'; // Import moment-timezone to use timezones

const localizer = momentLocalizer(moment);

const MyCalendars = () => {
  useEffect(() => {
    // Set the timezone to match your local timezone
    moment.tz.setDefault('America/New_York'); // Replace 'America/New_York' with your local timezone
  }, []);

  const [events] = useState([
    {
      title: 'Meeting',
      start: new Date(2024, 1, 12, 10, 0, 0),
      end: new Date(2024, 1, 12, 12, 0, 0),
    },
  ]);

  const handleSelectSlot = ({ start }) => {
    console.log('Clicked date:', start); // Console log the clicked date
    // const title = window.prompt('Enter event title:');
    // if (title) {
    //   const newEvent = {
    //     title,
    //     start,
    //     end,
    //   };
    //   setEvents([...events, newEvent]);
    // }
  };

  console.log('Today is: ', moment().format('MMMM Do YYYY, h:mm:ss a')); // Log current time with correct timezone

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 950, width:1580 }}
        views={['month', 'week', 'day']}
        toolbar={true}
        selectable={true} // Enable selecting slots
        onSelectSlot={handleSelectSlot} // Handle selecting slots
      />
    </div>
  );
};

export default MyCalendars;