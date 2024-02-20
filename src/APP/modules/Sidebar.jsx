

import { Sidebar } from 'flowbite-react';
import { HiCalendar,   HiUser, HiLogout, HiOutlinePlus } from 'react-icons/hi';

function Sidenav() {
  return (
    <Sidebar aria-label="Sidebar" className=' h-full '>
      <Sidebar.Items>
        <Sidebar.ItemGroup className=' my-5 c-8 ' >
          <Sidebar.Item className = ' h-20' href="#" icon={HiOutlinePlus}>
            Create Event
          </Sidebar.Item>

          <Sidebar.Item className = 'h-25' href="#" icon={HiCalendar}>
            Calender
          </Sidebar.Item>

          <Sidebar.Item className = 'h-25' href="#" icon={HiUser}>
            Profile
          </Sidebar.Item>
        </Sidebar.ItemGroup>

        <Sidebar.ItemGroup className='my-18 '>
          <span className="self-center whitespace-nowrap text-l font-semibold dark:text-white">View</span>
          <Sidebar.Item className = 'h-14 border border-solid border-gray-900 rounded border-opacity-75' href="#" >
            Day
          </Sidebar.Item>
          <Sidebar.Item className = 'h-14 border border-solid border-gray-900 rounded border-opacity-75' href="#" >
            Week
          </Sidebar.Item>
          <Sidebar.Item className = 'h-14 border border-solid border-gray-900 rounded border-opacity-75' href="#" >
            Month
          </Sidebar.Item>
        </Sidebar.ItemGroup>

        <Sidebar.ItemGroup  >
          <Sidebar.Item className='my-48 border-white bg-yellow-300 ' href="#" icon={HiLogout}>
            Log Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}

export default  Sidenav;