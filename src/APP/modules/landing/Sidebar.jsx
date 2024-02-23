import { Sidebar } from 'flowbite-react';
import { HiCalendar,   HiUser, HiLogout, HiOutlinePlus } from 'react-icons/hi';

function Sidenav() {

  return (
    
    <Sidebar aria-label="Sidebar">
      <Sidebar.Items>
        <Sidebar.ItemGroup className='flex-col justify-center items-center gap-4 py-6 my-5 c-8'>
          <Sidebar.Item className = ' h-20 bg-yellow-300 hover:bg-orange-400 active:bg-orange-500 focus:outline-none focus:ring focus:ring-green-900' href="#" icon={HiOutlinePlus}>
            Create Event
          </Sidebar.Item>

          <Sidebar.Item className = 'h-25 bg-green-300 hover:bg-orange-400 active:bg-orange-500 focus:outline-none focus:ring focus:ring-green-900' href="#" icon={HiCalendar}>
            Calender
          </Sidebar.Item>

          <Sidebar.Item className = 'h-25 bg-green-300 hover:bg-orange-400 active:bg-orange-500 focus:outline-none focus:ring focus:ring-green-900' href="#" icon={HiUser}>
            Profile
          </Sidebar.Item>
        </Sidebar.ItemGroup>

        <Sidebar.ItemGroup className='my-18  '>
          <span className="self-center whitespace-nowrap text-l font-semibold dark:text-white ">View</span>
          <Sidebar.Item className = 'h-14 border border-solid border-gray-900 rounded border-opacity-75 bg-green-300 hover:bg-orange-400 active:bg-orange-500 focus:outline-none focus:ring focus:ring-green-900' href="#" >
            Day
          </Sidebar.Item>
          <Sidebar.Item className = 'h-14 border border-solid border-gray-900 rounded border-opacity-75 bg-green-300 hover:bg-orange-400 active:bg-orange-500 focus:outline-none focus:ring focus:ring-green-900' href="#" >
            Week
          </Sidebar.Item>
          <Sidebar.Item className = 'h-14 border border-solid border-gray-900 rounded border-opacity-75 bg-green-300 hover:bg-orange-400 active:bg-orange-500 focus:outline-none focus:ring focus:ring-green-900' href="#" >
            Month
          </Sidebar.Item>
        </Sidebar.ItemGroup>

        <Sidebar.ItemGroup  >
          <Sidebar.Item className='my-48 border-white bg-yellow-300 hover:bg-orange-400 active:bg-orange-500 focus:outline-none focus:ring focus:ring-green-900' href="#" icon={HiLogout}>
            Log Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
    
  );
}

export default  Sidenav;