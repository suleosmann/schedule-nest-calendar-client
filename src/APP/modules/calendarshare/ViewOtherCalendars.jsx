import React, { useState, useEffect } from "react";
import useAxios from "./../../api/axios";
import useNavigation from "../../hooks/useNavigation";


const ViewOtherCalendars = () => {
  const [linkedUsers, setLinkedUsers] = useState([]);
  const navigate = useNavigation(); // Use the custom hook

  useEffect(() => {
    const fetchLinkedUsers = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");
        const response = await useAxios.get("/calendar/get_share_calendar", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        // Filter out duplicate entries based on user_id
        const uniqueUsers = response.data.filter(
          (user, index, self) =>
            index === self.findIndex((u) => u.user_id === user.user_id)
        );
        setLinkedUsers(uniqueUsers);
      } catch (error) {
        console.error("Error fetching linked users:", error);
        // Handle error if needed
      }
    };

    fetchLinkedUsers();
  }, []);

  return (
    <div className="mt-6">
      <h2 className="mb-4 text-lg font-semibold">Check Other Calendars</h2>
      <ul>
        {linkedUsers.map((user) => (
          <li key={user.user_id}>
            <a
              href="#"
              className="text-blue-500 hover:text-blue-700"
              onClick={() => {
                console.log("User ID:", user.user_id); // Log the user_id
                if (user.user_id) {
                  localStorage.setItem("sharedUserId", user.user_id); // Store user_id in localStorage
                  navigate("/dashboard/SharedCalendar");
                }
              }}
            >
              {user.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewOtherCalendars;
