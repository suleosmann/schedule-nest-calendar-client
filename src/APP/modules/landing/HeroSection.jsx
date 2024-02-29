import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import calendarImage from "../../assets/calendarbg.jpg";
import Button from "../../components/Button"; // Adjust the path as needed
import useNavigation from "../../hooks/useNavigation"; // Import the custom hook

const HeroSection = () => {
  const navigate = useNavigation(); // Initialize the navigate function from the custom hook

  return (
    <div className="bg-green-100 flex h-screen">
      <div className="w-2/6 h-80 mt-44 ml-64 ">
        <h1 className="text-7xl pb-6 italic">
          Stay Connected, Stay Organized with Ease!
        </h1>
        <h3 className="text-2xl text-gray-500">
          Unlock Your Productive Potential with ScheduleNest
        </h3>
        <Button path="/authentication/signup">Sign Up</Button>
        <Button path="/authentication">Sign In</Button>
      </div>
      <div className="bg-green-100 w-2/6 relative ml-32 ">
        <img
          src={calendarImage}
          alt="Calendar"
          className="bg-green-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>
    </div>
  );
};

export default HeroSection;
