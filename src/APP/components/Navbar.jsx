import { Button, Navbar } from 'flowbite-react';


function Component() {

  const handleGetStarted = (e) =>{
    e.preventDefault();
    window.location.href = '/authentication'; 
    console.log("clicked")
  }

  return (
    <Navbar fluid rounded className="bg-green-300 " >
      <Navbar.Brand href="https://flowbite-react.com">
        <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">ScheduleNest</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button href="authentication" outline onClick={handleGetStarted} gradientDuoTone="greenToBlue">Get started</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="Home" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">Features</Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export  default Component;