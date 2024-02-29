import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import calendarImage from "../../assets/Floral 2023 Wall Calendar.jpeg";
import Button from "../../components/Button"; // Adjust the path as needed
import useNavigation from "../../hooks/useNavigation"; // Import the custom hook

const HeroSection = () => {
  const navigate = useNavigation();

  return (
    <div className="flex mb-50 bg-lime-200 relative">
      <div className="w-2/6 h-80 mt-32 ml-64">
        <h1 className="text-6xl pb-6 italic">
          Stay Connected, Stay Organized with Ease!
        </h1>
        <h3 className="text-gray-500">
          Unlock Your Productive Potential with ScheduleNest: Seamlessly Manage
          Your Time, Boost Efficiency, and Conquer Your Goals!
        </h3>
        <Button path="/authentication/signup">Sign Up</Button>
        <Button path="/authentication">Sign In</Button>
      </div>
      <div className="w-2/6 relative ml-auto mt-32 mr-64">
        <div className="bg-lime-200 aspect-w-16 aspect-h-9">
          <img
            src={calendarImage}
            alt="Calendar"
            className="object-cover w-full h-full"
            style={{ position: "absolute", top: "-5%", right: "-50" }}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;


