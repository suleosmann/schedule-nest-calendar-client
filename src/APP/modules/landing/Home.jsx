import React from 'react'
import Navbar from './../../components/Navbar'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <div className='flex justify-between'>
        <div className='text-center bg-green-50 w-1/2 pt-40 font-serif text-2xl '>
            <div className='text-xs font-bold text-5xl'>
              <h1>Stay Connected, Stay Organized with Ease!</h1>
            </div>
            <div className='pt-10'>
              <h3>Unlock Your Productive Potential wirh ScheduleNest:             Seamlessly Manage Your Time,Boost Efficiency, and Conquer Your Goals!</h3>
              {/* <button className='bg-orange-300 rounded'>Sign up</button> */}
            </div>
        </div>
        <div className='bg-auto'>
            <img src='https://i.pinimg.com/736x/b1/5a/a7/b15aa7cf57b714bac8809b56646ff761.jpg' alt="calender" />
          
        </div>
      </div>
      
    </div>
  )
}
