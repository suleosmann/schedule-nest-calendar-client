

import { Button, Navbar } from 'flowbite-react';

function Navbar2() {
  return (
    <Navbar fluid rounded className="bg-green-200 " >
      <Navbar.Brand href="https://flowbite-react.com">
        <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">ScheduleNest</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button className='border-white border-solid bg-transparent text-black' >Get started</Button>
        <Navbar.Toggle />
        
        <Button className=' border-solid bg-transparent text-black' >l </Button>
        
        <Button className=' border-solid bg-transparent text-black' > r</Button>

      </div>
      
    </Navbar>
  );
}

export  default Navbar2;