

import { Sidebar } from 'flowbite-react';
import { BiBuoy } from 'react-icons/bi';
import { HiArrowSmRight, HiCalendar,  HiShoppingBag, HiTable, HiUser, HiLogout, HiOutlinePlus } from 'react-icons/hi';

function Sidenav() {
  return (
    <Sidebar aria-label="Sidebar with content separator example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiOutlinePlus}>
            Create Event
          </Sidebar.Item>

          <Sidebar.Item href="#" icon={HiCalendar}>
            Calender
          </Sidebar.Item>

          <Sidebar.Item href="#" icon={HiUser}>
            Profile
          </Sidebar.Item>


          <Sidebar.ItemGroup>
          <Sidebar.Item href="#" >
            Day
          </Sidebar.Item>
          <Sidebar.Item href="#" >
            Week
          </Sidebar.Item>
          <Sidebar.Item href="#" >
            Month
          </Sidebar.Item>
        </Sidebar.ItemGroup>


         
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiLogout}>
            Log Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}

export default  Sidenav;