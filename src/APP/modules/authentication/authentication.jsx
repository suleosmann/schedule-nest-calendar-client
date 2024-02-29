import React from 'react'
import CommonNavbar from '../../components/CommonNavbar'
import Footer  from '../../components/Footer'
import { Outlet } from 'react-router-dom'
import imagereg from "../../assets/imagereg.jpeg"

export default function authentication() {
  return (
    <>
    <CommonNavbar />
      <div className='bg-gradient-to-r from-green-200 to-green-300'>
        {/* <img src='https://i.pinimg.com/564x/24/a8/82/24a882450854eafa3476c945b615914d.jpg' className='w-full h-full object-cover absolute mix-blend-overlay'/> */}
            <div className="container mx-auto px-2 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 px-2">
            <div className="col-span-1 bg-green-500 flex justify-center items-center">
              {/* Add your image here */}
              <img src={imagereg} alt="calender" className="w-full h-auto rounded-lg object-cover" />
            </div>
            <Outlet/>
          </div>
        </div>
      </div>
      <Footer />
      </>
  )
}
