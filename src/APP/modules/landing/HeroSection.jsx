import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import calendarImage from '../../assets/calendarbg.jpg';
import Button from '../../components/Button'; // Adjust the path as needed



const HeroSection = () => {
  return (
    <div className="flex mb-64">
      <div className="w-2/6 h-80 mt-32 ml-64">
        <h1 className='text-6xl pb-6'>Stay Connected, Stay Organized with Ease!</h1>
        <h3 className='text-gray-500'>
          Unlock Your Productive Potential with ScheduleNest: Seamlessly Manage
          Your Time, Boost Efficiency, and Conquer Your Goals!
        </h3>
        <Button>Sign Up</Button> {/* Use the Button component */}
        <Button>Sign In</Button>
      </div>
      <div className="w-2/6 relative ml-32 mt-64 ">
      <img src={calendarImage} alt="Calendar" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      </div>
    </div>
  );
};


export default HeroSection;
