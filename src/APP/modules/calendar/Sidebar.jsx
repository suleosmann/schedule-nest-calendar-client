// Sidenav.jsx
import React, { useState } from 'react';
import { Sidebar } from 'flowbite-react';
import { HiCalendar, HiUser, HiLogout, HiOutlinePlus } from 'react-icons/hi';
import CreateEventModal from './CreateEventModal'; // Notification component
import useNavigation from '../../hooks/useNavigation'
import ShareCalendarBtn from '../calendarshare/ShareCalendarBtn';
import ViewOtherCalendars from '../calendarshare/ViewOtherCalendars'


function Sidenav() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigation(); // Use the custom hook


  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const logout = () => {
    // Remove the accessToken from localStorage
    localStorage.removeItem('accessToken');

  
    // Redirect the user to the login page or any other desired location
    navigate('/');
  }

  return (
    <div className='sideBar'>
      <Sidebar aria-label="Sidebar">
        <Sidebar.Items className='h-full'>
          {/* <Sidebar.ItemGroup className='flex-col justify-center items-center gap-4 py-6 mt-8 c-8'>
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">ScheduleNest</span>
          </Sidebar.ItemGroup> */}
          <Sidebar.ItemGroup className='flex-col justify-center items-center gap-4 py-6 my-5 c-8'>
            <Sidebar.Item className='cursor-pointer h-20 bg-yellow-300 hover:bg-orange-400 active:bg-orange-500 focus:outline-none focus:ring focus:ring-green-900' icon={HiOutlinePlus} onClick={toggleModal}>
              Create Event
            </Sidebar.Item>
            <Sidebar.Item className='cursor-pointer h-25 bg-green-300 hover:bg-orange-400 active:bg-orange-500 focus:outline-none focus:ring focus:ring-green-900'  icon={HiCalendar} onClick={() => navigate('/dashboard')}>
              Calendar
            </Sidebar.Item>
            <Sidebar.Item className='cursor-pointer h-25 bg-green-300 hover:bg-orange-400 active:bg-orange-500 focus:outline-none focus:ring focus:ring-green-900' icon={HiUser} onClick={() => navigate('/dashboard/profile')}>
              Profile
            </Sidebar.Item>
          </Sidebar.ItemGroup>
          <ShareCalendarBtn/>
          <ViewOtherCalendars/>
          <Sidebar.ItemGroup>
            <Sidebar.Item className='cursor-pointer mt-48 border border-gray bg-yellow-300 hover:bg-orange-400 active:bg-orange-500 focus:outline-none focus:ring focus:ring-green-900' onClick={logout} icon={HiLogout}>
              Log Out
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
      {isModalOpen && <CreateEventModal closeModal={toggleModal} />}
    </div>
  );
}

export default Sidenav;
