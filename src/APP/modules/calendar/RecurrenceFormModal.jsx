import React, { useState } from 'react';

function RecurrenceFormModal({ closeRecurrenceModal }) {
  const [recurrence, setRecurrence] = useState('');

  // Function to handle closing the recurrence form
  const handleClose = () => {
    closeRecurrenceModal();
  };

  const renderDateInput = (label, id, value, onChange) => (
    <div className="date-input">
      <label htmlFor={id} className="block text-gray-700 text-sm font-bold mb-2">
        {label}
      </label>
      <input
        type="date"
        id={id}
        value={value}
        onChange={onChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
  );


  // Function to handle saving the recurrence options
  const handleRecurrenceSave = () => {
    // Here you would handle the recurrence logic
    console.log(recurrence);
    // Then close the modal
    closeRecurrenceModal();
  };

  const [allDay, setAllDay] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [selectedDays, setSelectedDays] = useState([]);

  const toggleDay = (day) => {
    setSelectedDays(prevDays =>
      prevDays.includes(day) ? prevDays.filter(d => d !== day) : [...prevDays, day]
    );
  };

  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const [dayOfMonth, setDayOfMonth] = useState(1);



  const renderRecurrenceForm = () => {
    switch (recurrence) {
      case 'daily':
        return (
            <div className="bg-white p-4 rounded-lg shadow-lg mb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4" >
            {renderDateInput('Start Date', 'start-date', startDate, (e) => setStartDate(e.target.value))}
            {renderDateInput('End Date', 'end-date', endDate, (e) => setEndDate(e.target.value))}
          </div>
        </div>
          );
          case 'weekly':
            return (
              <div className="recurrence-form-weekly bg-white p-4 rounded-lg shadow-lg mb-4">
                <div className="week-days-selector">
                  {daysOfWeek.map((day) => (
                    <div key={day} className="day-checkbox">
                      <label>
                        <input
                          type="checkbox"
                          checked={selectedDays.includes(day)}
                          onChange={() => toggleDay(day)}
                        />
                        {day}
                      </label>
                    </div>
                  ))}
                </div>
                <div className="date-range grid grid-cols-1 gap-4 sm:grid-cols-2 mt-2">
                  <div className="date-input">
                    <label htmlFor="start-date-weekly">Start Date</label>
                    <input
                      type="date"
                      id="start-date-weekly"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                    />
                  </div>
                  <div className="date-input">
                    <label htmlFor="end-date-weekly">End Date</label>
                    <input
                      type="date"
                      id="end-date-weekly"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            );
      
      case 'monthly':
        return (
            <div  className="bg-white p-4 rounded-lg shadow-lg">
              <div  className="mb-4">
                <label className="block text-sm font-medium text-gray-700" htmlFor="day-of-month">Day of Month</label>
                <input
                  type="number"
                  id="day-of-month"
                  value={dayOfMonth}
                  min="1"
                  max="31"
                  onChange={(e) => setDayOfMonth(Number(e.target.value))}
                  className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="date-range grid grid-cols-1 gap-4 sm:grid-cols-2 mt-2">
                <div className="date-input">
                  <label htmlFor="start-date-monthly">Start Date</label>
                  <input
                    type="date"
                    id="start-date-monthly"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="date-input">
                  <label htmlFor="end-date-monthly">End Date</label>
                  <input
                    type="date"
                    id="end-date-monthly"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
              </div>
            </div>
          );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 overflow-y-auto h-full w-full z-50 flex justify-center items-center">
      <div className="relative mx-auto p-5 border w-full max-w-md m-5 bg-white rounded-md shadow-lg" onClick={e => e.stopPropagation()}>
        {/* Recurrence Form Content */}
        <div className="mb-4">
          <label htmlFor="recurrence" className="block text-gray-700 text-sm font-bold mb-2">
            Recurrence Options
          </label>
          <select
            id="recurrence"
            value={recurrence}
            onChange={(e) => setRecurrence(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="none">None</option>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            
          </select>
        </div>
        {renderRecurrenceForm()}

        {/* Buttons for saving and canceling */}
        <div className="flex items-center justify-end">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleRecurrenceSave}
          >
            Save
          </button>
          <button
            className="ml-4 bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded"
            onClick={handleClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default RecurrenceFormModal;
