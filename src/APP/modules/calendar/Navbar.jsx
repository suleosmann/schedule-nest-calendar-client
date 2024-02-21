

import { Button, Navbar } from 'flowbite-react';
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";

function NavComponent() {
  return (
    <Navbar fluid rounded className="bg-green-200 " >
      <Navbar.Brand href="https://flowbite-react.com">
        <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">ScheduleNest</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button className='border-white border-solid bg-transparent text-black' >Get started</Button>
        <Navbar.Toggle />
        
        <Button className=' border-solid bg-transparent text-black' icon={HiArrowSmLeft}></Button>
        
        <Button className=' border-solid bg-transparent text-black' icon={HiArrowSmRight}></Button>

      </div>
      
    </Navbar>
  );
}

export  default NavComponent;