import React from "react";

const FeaturesSections = () => {
  return (
    <div id= "features">
      <div className="h-16 bg-green-300">
        <h1 className="text-4xl pt-4 flex justify-center">FEATURES</h1>
      </div>
      <div className="h-96 mb-32 flex justify-center">
        <div className="mx-16  w-72 h-80">
          <div className="mt-16 bg-yellow-200">
            <div className="flex ">
              <h1 className="ml-0  p-3 bg-green-900">01</h1>
              <h1 className="p-3 bg-green-300 w-72">Event Manager</h1>
            </div>
            <p className="p-6">
              The "Event Manager" in a calendar helps users organize events
              efficiently by setting details like titles, times, locations, and
              reminders. It streamlines planning with options for recurring
              events, categorization, invitations, and device sync.
            </p>
          </div>
        </div>
        <div className="mx-16  w-72 h-80">
          <div className="mt-16 bg-yellow-200">
            <div className="flex ">
              <h1 className="ml-0  p-3 bg-green-900">02</h1>
              <h1 className="p-3 bg-green-300 w-72">Task Manager</h1>
            </div>
            <p className="p-6  pb-20">
              A "Task Manager" helps users organize tasks by creating, tracking,
              and prioritizing them. It includes features like setting due
              dates, categorizing tasks, and marking them as complete, aiming to
              boost productivity.
            </p>
          </div>
        </div>
        <div className="mx-16  w-72 h-80">
          <div className="mt-16 bg-yellow-200">
            <div className="flex ">
              <h1 className="ml-0  p-3 bg-green-900">03</h1>
              <h1 className="p-3 bg-green-300 w-72">Calendar</h1>
            </div>
            <p className="p-6 pb-12">
              A calendar enables users to schedule, organize, and manage events
              efficiently. It includes features like setting event details,
              reminders, and recurring events, ensuring users stay organized and
              on top of their schedules.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSections;
