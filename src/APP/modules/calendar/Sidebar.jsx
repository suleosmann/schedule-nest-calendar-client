import React, { useState } from 'react';
import { Sidebar } from 'flowbite-react';
import { HiCalendar, HiUser, HiLogout, HiOutlinePlus } from 'react-icons/hi';
import CreateEventModal from './CreateEventModal'; // Make sure to create this component

function Sidenav() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  
  return (
    <div className='sideBar'>
    <Sidebar  aria-label="Sidebar" >
      <Sidebar.Items className='h-full' >
        <Sidebar.ItemGroup className='flex-col justify-center items-center gap-4 py-6 mt-8 c-8 ' >
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">ScheduleNest</span>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup className='flex-col justify-center items-center gap-4 py-6 my-5 c-8 ' >
          <Sidebar.Item className = ' h-20 bg-yellow-300 hover:bg-orange-400 active:bg-orange-500 focus:outline-none focus:ring focus:ring-green-900' href="#" icon={HiOutlinePlus} onClick={toggleModal}>
            Create Event
          </Sidebar.Item>

          <Sidebar.Item className = 'h-25 bg-green-300 hover:bg-orange-400 active:bg-orange-500 focus:outline-none focus:ring focus:ring-green-900' href="#" icon={HiCalendar}>
            Calender
          </Sidebar.Item>

          <Sidebar.Item className = 'h-25 bg-green-300 hover:bg-orange-400 active:bg-orange-500 focus:outline-none focus:ring focus:ring-green-900' href="#" icon={HiUser}>
            Profile
          </Sidebar.Item>
        </Sidebar.ItemGroup>

        <Sidebar.ItemGroup  >
          <Sidebar.Item className='mt-96 border-white bg-yellow-300 hover:bg-orange-400 active:bg-orange-500 focus:outline-none focus:ring focus:ring-green-900' href="#" icon={HiLogout}>
            Log Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
    {isModalOpen && <CreateEventModal closeModal={toggleModal} />}
    </div>
    
  );
}

export default  Sidenav;