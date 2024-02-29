import React from "react";

const FeaturesSections = () => {
  return (
    <div id="features" className = "bg-lime-200">
      <div className="h-16">
        <h1 className="text-4xl pt-4 flex justify-center">ScheduleNest Features</h1>
      </div>
      <div className="mt-8">
        <div className="text-center mb-8">
          
          <p className="text-lg text-gray-600">Tailored to meet all your scheduling needs!</p>
        </div>
        <div className="flex justify-center">
          <div className="mx-16 w-72 h-75">
            <div className="mt-16 bg-lime-400 rounded-lg p-5">
              <div className="flex items-center mb-3">
                <h1 className="ml-0 p-3 bg-stone-800 text-white ">01</h1>
                <h1 className="p-3 bg-yellow-200 w-72">Event Manager</h1>
              </div>
              <p className="p-6 italic">
                Organize your events efficiently by setting event titles, times and locations to streamline planning with options for recurring
                events, categorization, invitations, and device sync.
              </p>
            </div>
          </div>
          <div className="mx-16 w-72 h-75">
            <div className="mt-16 bg-lime-400 rounded-lg p-5">
              <div className="flex items-center mb-2">
                <h1 className="ml-0 p-3 bg-stone-800 text-white">02</h1>
                <h1 className="p-3 bg-yellow-200 w-72 ">Task Manager</h1>
              </div>
              <p className="p-6  pb-20 italic">
                Create, track and prioritizing your tasks by setting due dates, categorizing tasks, and marking them as complete, and 
                boost your productivity.
              </p>
            </div>
          </div>
          <div className="mx-16  w-72 h-75">
            <div className="mt-16 bg-lime-400 rounded-lg p-6">
              <div className="flex items-center mb-3 ">
                <h1 className="ml-0  p-3 bg-stone-800 text-white">03</h1>
                <h1 className="p-3 bg-yellow-200 w-72">Calendar Views</h1>
              </div>
              <p className="p-6 pb-12 italic">
                Stay organized and on top of your schedules with our Daily, Weekly and Monthly views of ScheduleNest calendar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSections;
