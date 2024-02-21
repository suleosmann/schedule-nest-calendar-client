import React from 'react'
import { Outlet } from 'react-router-dom'

export default function authentication() {
  return (
    <div className="container mx-auto px-4 py-44">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <div className="col-span-1 bg-green-500 flex justify-center items-center">
              {/* Add your image here */}
              <img src="" alt="calender" className="w-full h-auto rounded-lg object-cover" />
            </div>
            <Outlet/>
          </div>
        </div>
  )
}
